import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { uploadToCloudinary } from "../config/cloudinary";
import toast, { Toaster } from "react-hot-toast";

const AdminTopItems = () => {
  const [topItems, setTopItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Item Form State
  const [itemForm, setItemForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    imageFile: null,
  });

  // Fetch Top Items on mount
  useEffect(() => {
    fetchTopItems();
  }, []);

  const fetchTopItems = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "topItems"));
      const itemsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTopItems(itemsData);
      if (itemsData.length > 0) {
        toast.success(`Loaded ${itemsData.length} top items`);
      }
    } catch (error) {
      console.error("Error fetching top items:", error);
      toast.error(`Failed to fetch top items: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle Image Upload
  const handleImageUpload = async (file) => {
    if (!file) {
      toast.error("No image file selected");
      return null;
    }

    try {
      setUploadingImage(true);
      toast.loading("Uploading image to Cloudinary...");
      const result = await uploadToCloudinary(file);

      if (!result || !result.secure_url) {
        throw new Error("Image upload failed - no URL returned");
      }

      toast.success("✅ Image uploaded successfully!");
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(`❌ Image upload failed: ${error.message}`);
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  // Add/Edit Item
  const handleItemSubmit = async (e) => {
    e.preventDefault();

    if (!itemForm.name.trim()) {
      toast.error("❌ Please enter item name");
      return;
    }

    const toastId = toast.loading(
      editingItem ? "Updating item..." : "Adding item..."
    );

    try {
      setLoading(true);
      let imageUrl = itemForm.imageUrl;

      // Upload new image if selected
      if (itemForm.imageFile) {
        toast.loading("Uploading image...", { id: toastId });
        imageUrl = await handleImageUpload(itemForm.imageFile);
        if (!imageUrl) {
          toast.error("❌ Item not saved - image upload failed", {
            id: toastId,
          });
          setLoading(false);
          return;
        }
      }

      if (!imageUrl && !editingItem) {
        toast.error("❌ Please select an image for the item", { id: toastId });
        setLoading(false);
        return;
      }

      const itemData = {
        name: itemForm.name.trim(),
        description: itemForm.description.trim(),
        imageUrl: imageUrl || "",
        updatedAt: serverTimestamp(),
      };

      if (editingItem) {
        // Update existing item
        await updateDoc(doc(db, "topItems", editingItem.id), itemData);
        toast.success("✅ Top item updated successfully!", { id: toastId });
      } else {
        // Add new item
        await addDoc(collection(db, "topItems"), {
          ...itemData,
          createdAt: serverTimestamp(),
        });
        toast.success("✅ Top item added successfully!", { id: toastId });
      }

      setItemForm({ name: "", description: "", imageUrl: "", imageFile: null });
      setEditingItem(null);
      setShowItemModal(false);
      fetchTopItems();
    } catch (error) {
      console.error("Error saving item:", error);
      toast.error(`❌ Failed to save item: ${error.message}`, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // Delete Item
  const handleDeleteItem = async (itemId, itemName) => {
    if (!window.confirm(`Are you sure you want to delete "${itemName}"?`)) {
      return;
    }

    const toastId = toast.loading("Deleting item...");
    try {
      setLoading(true);
      await deleteDoc(doc(db, "topItems", itemId));
      toast.success("✅ Top item deleted successfully!", { id: toastId });
      fetchTopItems();
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error(`❌ Failed to delete item: ${error.message}`, {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  // Edit Item
  const handleEditItem = (item) => {
    setEditingItem(item);
    setItemForm({
      name: item.name,
      description: item.description || "",
      imageUrl: item.imageUrl || "",
      imageFile: null,
    });
    setShowItemModal(true);
  };

  // Filter items based on search query
  const filteredItems = topItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Top Items Management
              </h1>
              <p className="text-gray-600">Manage your featured top items</p>
            </div>
            <button
              onClick={() => {
                setEditingItem(null);
                setItemForm({
                  name: "",
                  description: "",
                  imageUrl: "",
                  imageFile: null,
                });
                setShowItemModal(true);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Top Item
            </button>
          </div>
        </div>

        {/* Search Bar & Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {filteredItems.length}{" "}
                  {filteredItems.length === 1 ? "Item" : "Items"}
                </h2>
                <p className="text-sm text-gray-600">
                  {searchQuery
                    ? `of ${topItems.length} total`
                    : "Total top items"}
                </p>
              </div>
            </div>

            {/* Search Bar */}
            {topItems.length > 0 && (
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search items..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Items List */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {loading && topItems.length === 0 ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
            </div>
          ) : topItems.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-24 h-24 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p className="text-gray-500 font-medium text-lg">
                No top items yet
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Click "Add Top Item" to create your first featured item
              </p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <svg
                className="w-16 h-16 mx-auto text-yellow-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-gray-700 font-medium">
                No items found for "{searchQuery}"
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Try a different search term
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 group"
                >
                  {/* Item Image */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <h3 className="font-bold text-gray-800 text-lg">
                        {item.name}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 self-end sm:self-center">
                    <button
                      onClick={() => handleEditItem(item)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id, item.name)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Item Modal */}
      {showItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 overflow-hidden animate-fadeIn">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6">
              <h3 className="text-2xl font-bold text-white">
                {editingItem ? "Edit Top Item" : "Add New Top Item"}
              </h3>
              <p className="text-yellow-100 text-sm mt-1">
                Featured items displayed prominently on your site
              </p>
            </div>
            <form onSubmit={handleItemSubmit} className="p-6 space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Image {!editingItem && "*"}
                </label>
                <div className="flex flex-col items-center">
                  {(itemForm.imageUrl || itemForm.imageFile) && (
                    <div className="mb-4 w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={
                          itemForm.imageFile
                            ? URL.createObjectURL(itemForm.imageFile)
                            : itemForm.imageUrl
                        }
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <label className="w-full cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-yellow-500 transition-all text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-gray-600 font-medium">
                        Click to upload image
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          if (file.size > 10 * 1024 * 1024) {
                            toast.error("File size should be less than 10MB");
                            return;
                          }
                          setItemForm({ ...itemForm, imageFile: file });
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Name *
                </label>
                <input
                  type="text"
                  value={itemForm.name}
                  onChange={(e) =>
                    setItemForm({ ...itemForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                  placeholder="e.g., Premium Coffee Beans"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={itemForm.description}
                  onChange={(e) =>
                    setItemForm({ ...itemForm, description: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                  placeholder="Item description..."
                  rows="4"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowItemModal(false);
                    setEditingItem(null);
                    setItemForm({
                      name: "",
                      description: "",
                      imageUrl: "",
                      imageFile: null,
                    });
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || uploadingImage}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all font-medium disabled:opacity-50"
                >
                  {uploadingImage
                    ? "Uploading..."
                    : loading
                    ? "Saving..."
                    : editingItem
                    ? "Update Item"
                    : "Add Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default AdminTopItems;
