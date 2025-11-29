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

const AdminProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Category Form State
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
  });

  // Product Form State
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    imageFile: null,
  });

  // Fetch Categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch Products when category changes
  useEffect(() => {
    if (selectedCategoryId) {
      fetchProducts(selectedCategoryId);
    } else {
      setProducts([]);
    }
  }, [selectedCategoryId]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categoriesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesData);
      if (categoriesData.length > 0) {
        toast.success(`Loaded ${categoriesData.length} categories`);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error(`Failed to fetch categories: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async (categoryId) => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        collection(db, "categories", categoryId, "products")
      );
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
      toast.success(`Loaded ${productsData.length} products`);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error(`Failed to fetch products: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Add Category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!categoryForm.name.trim()) {
      toast.error("Please enter category name");
      return;
    }

    const toastId = toast.loading("Adding category...");
    try {
      setLoading(true);
      await addDoc(collection(db, "categories"), {
        name: categoryForm.name,
        description: categoryForm.description,
        createdAt: serverTimestamp(),
      });
      toast.success("✅ Category added successfully!", { id: toastId });
      setCategoryForm({ name: "", description: "" });
      setShowCategoryModal(false);
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error(`❌ Failed to add category: ${error.message}`, {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete Category
  const handleDeleteCategory = async (categoryId, categoryName) => {
    if (
      !window.confirm(
        `Are you sure you want to delete "${categoryName}"?\nThis will delete all products in it.`
      )
    ) {
      return;
    }

    const toastId = toast.loading("Deleting category...");
    try {
      setLoading(true);
      // First delete all products in the category
      const productsSnapshot = await getDocs(
        collection(db, "categories", categoryId, "products")
      );
      const deletePromises = productsSnapshot.docs.map((productDoc) =>
        deleteDoc(doc(db, "categories", categoryId, "products", productDoc.id))
      );
      await Promise.all(deletePromises);

      // Then delete the category
      await deleteDoc(doc(db, "categories", categoryId));
      toast.success("✅ Category and all products deleted successfully!", {
        id: toastId,
      });

      if (selectedCategoryId === categoryId) {
        setSelectedCategoryId("");
        setProducts([]);
      }
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error(`❌ Failed to delete category: ${error.message}`, {
        id: toastId,
      });
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

  // Add/Edit Product
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategoryId) {
      toast.error("❌ Please select a category first");
      return;
    }

    if (!productForm.name.trim()) {
      toast.error("❌ Please enter product name");
      return;
    }

    const toastId = toast.loading(
      editingProduct ? "Updating product..." : "Adding product..."
    );

    try {
      setLoading(true);
      let imageUrl = productForm.imageUrl;

      // Upload new image if selected
      if (productForm.imageFile) {
        toast.loading("Uploading image...", { id: toastId });
        imageUrl = await handleImageUpload(productForm.imageFile);
        if (!imageUrl) {
          toast.error("❌ Product not saved - image upload failed", {
            id: toastId,
          });
          setLoading(false);
          return;
        }
      }

      if (!imageUrl && !editingProduct) {
        toast.error("❌ Please select an image for the product", {
          id: toastId,
        });
        setLoading(false);
        return;
      }

      const productData = {
        name: productForm.name.trim(),
        description: productForm.description.trim(),
        imageUrl: imageUrl || "",
        updatedAt: serverTimestamp(),
      };

      if (editingProduct) {
        // Update existing product
        await updateDoc(
          doc(
            db,
            "categories",
            selectedCategoryId,
            "products",
            editingProduct.id
          ),
          productData
        );
        toast.success("✅ Product updated successfully!", { id: toastId });
      } else {
        // Add new product
        await addDoc(
          collection(db, "categories", selectedCategoryId, "products"),
          {
            ...productData,
            createdAt: serverTimestamp(),
          }
        );
        toast.success("✅ Product added successfully!", { id: toastId });
      }

      setProductForm({
        name: "",
        description: "",
        imageUrl: "",
        imageFile: null,
      });
      setEditingProduct(null);
      setShowProductModal(false);
      fetchProducts(selectedCategoryId);
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error(`❌ Failed to save product: ${error.message}`, {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (productId, productName) => {
    if (!window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      return;
    }

    const toastId = toast.loading("Deleting product...");
    try {
      setLoading(true);
      await deleteDoc(
        doc(db, "categories", selectedCategoryId, "products", productId)
      );
      toast.success("✅ Product deleted successfully!", { id: toastId });
      fetchProducts(selectedCategoryId);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(`❌ Failed to delete product: ${error.message}`, {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  // Edit Product
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description || "",
      imageUrl: product.imageUrl || "",
      imageFile: null,
    });
    setShowProductModal(true);
  };

  const getSelectedCategory = () => {
    return categories.find((cat) => cat.id === selectedCategoryId);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description &&
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
                Product Management
              </h1>
              <p className="text-gray-600">
                Manage your categories and products
              </p>
            </div>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-md"
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
              Add Category
            </button>
          </div>
        </div>

        {/* Category Selection & Product Management */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Category Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-800 font-medium appearance-none cursor-pointer"
                >
                  <option value="">-- Choose a category --</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {selectedCategoryId && (
                <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        {getSelectedCategory()?.name}
                      </p>
                      {getSelectedCategory()?.description && (
                        <p className="text-xs text-blue-700 mt-1">
                          {getSelectedCategory()?.description}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        handleDeleteCategory(
                          selectedCategoryId,
                          getSelectedCategory()?.name
                        )
                      }
                      className="ml-4 p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all"
                      title="Delete Category"
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
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Add Product Button */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  if (!selectedCategoryId) {
                    toast.error("Please select a category first");
                    return;
                  }
                  setEditingProduct(null);
                  setProductForm({
                    name: "",
                    description: "",
                    imageUrl: "",
                    imageFile: null,
                  });
                  setShowProductModal(true);
                }}
                disabled={!selectedCategoryId}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                  selectedCategoryId
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
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
                Add Product to Category
              </button>
            </div>
          </div>

          {/* Products List */}
          {selectedCategoryId && (
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Products in {getSelectedCategory()?.name}
                  <span className="ml-2 text-sm font-normal text-gray-600">
                    ({filteredProducts.length} of {products.length}{" "}
                    {products.length === 1 ? "product" : "products"})
                  </span>
                </h2>

                {/* Search Bar */}
                {products.length > 0 && (
                  <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

              {loading && products.length === 0 ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <svg
                    className="w-20 h-20 mx-auto text-gray-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <p className="text-gray-500 font-medium">
                    No products in this category yet
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Click "Add Product to Category" to create your first product
                  </p>
                </div>
              ) : filteredProducts.length === 0 ? (
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
                    No products found for "{searchQuery}"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Try a different search term
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 group"
                    >
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
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

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 text-lg mb-1">
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {product.description}
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 self-end sm:self-center">
                        <button
                          onClick={() => handleEditProduct(product)}
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
                          onClick={() =>
                            handleDeleteProduct(product.id, product.name)
                          }
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
          )}
        </div>
      </div>

      {/* Add Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
              <h3 className="text-2xl font-bold text-white">
                Add New Category
              </h3>
            </div>
            <form onSubmit={handleAddCategory} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) =>
                    setCategoryForm({ ...categoryForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="e.g., Electronics, Clothing, Food"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={categoryForm.description}
                  onChange={(e) =>
                    setCategoryForm({
                      ...categoryForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Category description..."
                  rows="3"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCategoryModal(false);
                    setCategoryForm({ name: "", description: "" });
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium disabled:opacity-50"
                >
                  {loading ? "Adding..." : "Add Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 overflow-hidden animate-fadeIn">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Category: {getSelectedCategory()?.name}
              </p>
            </div>
            <form onSubmit={handleProductSubmit} className="p-6 space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image {!editingProduct && "*"}
                </label>
                <div className="flex flex-col items-center">
                  {(productForm.imageUrl || productForm.imageFile) && (
                    <div className="mb-4 w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={
                          productForm.imageFile
                            ? URL.createObjectURL(productForm.imageFile)
                            : productForm.imageUrl
                        }
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <label className="w-full cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-all text-center">
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
                          setProductForm({ ...productForm, imageFile: file });
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={productForm.name}
                  onChange={(e) =>
                    setProductForm({ ...productForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="e.g., Wireless Headphones"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Product description..."
                  rows="4"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowProductModal(false);
                    setEditingProduct(null);
                    setProductForm({
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all font-medium disabled:opacity-50"
                >
                  {uploadingImage
                    ? "Uploading..."
                    : loading
                    ? "Saving..."
                    : editingProduct
                    ? "Update Product"
                    : "Add Product"}
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

export default AdminProduct;
