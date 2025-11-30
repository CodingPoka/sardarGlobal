import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import productHero from "../assets/productImage/productHero.jpg";
import {
  Search,
  Package,
  Filter,
  Grid,
  X,
  MessageSquare,
  ArrowRight,
  Box,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Product = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Show 12 products per page (4x3 grid on xl screens)

  // Fetch categories and all products
  useEffect(() => {
    fetchCategoriesAndProducts();
  }, []);

  // Filter products based on category and search
  useEffect(() => {
    filterProducts();
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery, allProducts]);

  const fetchCategoriesAndProducts = async () => {
    try {
      setLoading(true);
      const categoriesSnapshot = await getDocs(collection(db, "categories"));
      const categoriesData = [];
      const productsData = [];

      for (const categoryDoc of categoriesSnapshot.docs) {
        const categoryData = {
          id: categoryDoc.id,
          ...categoryDoc.data(),
        };
        categoriesData.push(categoryData);

        // Fetch products for this category
        const productsSnapshot = await getDocs(
          collection(db, "categories", categoryDoc.id, "products")
        );

        productsSnapshot.docs.forEach((productDoc) => {
          productsData.push({
            id: productDoc.id,
            categoryId: categoryDoc.id,
            categoryName: categoryData.name,
            ...productDoc.data(),
          });
        });
      }

      setCategories(categoriesData);
      setAllProducts(productsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.categoryId === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchQuery(""); // Clear search when changing category
  };

  const handleContactUs = () => {
    navigate("/contact#contact-form");
    // Smooth scroll to form after navigation
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleViewProductDetail = (product) => {
    navigate(`/product/${product.categoryId}/${product.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={productHero}
          alt="Our Products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-blue-950/85"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 border border-amber-400/30">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm sm:text-base">
                Our Products
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
              Explore Our Product Range
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-5 sm:mb-6 leading-relaxed px-4">
              Discover premium quality products tailored to your needs
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all shadow-lg font-semibold text-sm sm:text-base"
              >
                <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                View All Products
              </button>
              <button
                onClick={handleContactUs}
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all shadow-lg font-semibold text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24">
        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 border border-blue-100"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 mb-2 xl:mb-3">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                Filter by Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-5 pr-10 border-2 border-gray-300 rounded-lg xl:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white cursor-pointer text-gray-700 font-medium text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  <option value="all">🌟 All Products</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      📦 {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 lg:right-4 xl:right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-400"
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
            </div>

            {/* Search Bar */}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 mb-2 xl:mb-3">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                Search Products
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or description..."
                  className="w-full pl-10 lg:pl-12 xl:pl-14 pr-10 lg:pr-12 xl:pr-14 py-3 lg:py-4 xl:py-5 border-2 border-gray-300 rounded-lg xl:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base lg:text-lg xl:text-xl"
                />
                <Search className="absolute left-3 lg:left-4 xl:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 lg:right-4 xl:right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="mt-4 lg:mt-5 xl:mt-6 flex flex-wrap items-center gap-2 lg:gap-3">
            <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-600">
              Active Filters:
            </span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 lg:gap-1.5 px-3 py-1 lg:px-4 lg:py-1.5 xl:px-5 xl:py-2 bg-blue-100 text-blue-700 rounded-full text-sm lg:text-base xl:text-lg font-medium">
                <Package className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5 lg:p-1"
                >
                  <X className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 lg:gap-1.5 px-3 py-1 lg:px-4 lg:py-1.5 xl:px-5 xl:py-2 bg-green-100 text-green-700 rounded-full text-sm lg:text-base xl:text-lg font-medium">
                <Search className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />"
                {searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:bg-green-200 rounded-full p-0.5 lg:p-1"
                >
                  <X className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                </button>
              </span>
            )}
            {selectedCategory === "all" && !searchQuery && (
              <span className="text-sm lg:text-base xl:text-lg text-gray-500 italic">
                Showing all products
              </span>
            )}
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 lg:gap-6"
        >
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <Box className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Product" : "Products"} Found
            </h2>
          </div>

          {filteredProducts.length > 0 && (
            <button
              onClick={handleContactUs}
              className="flex items-center gap-2 lg:gap-3 px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg xl:rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-md font-semibold text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
              Send Us a Message
            </button>
          )}
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 xl:py-32">
            <div className="animate-spin rounded-full h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 border-b-4 lg:border-b-6 border-blue-600 mb-4 lg:mb-6"></div>
            <p className="text-gray-600 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl">
              Loading products...
            </p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 lg:border-3 border-yellow-300 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-yellow-200 rounded-full mb-4 lg:mb-6">
              <Package className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-yellow-700" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 lg:mb-3">
              No Products Found
            </h3>
            <p className="text-gray-600 mb-6 lg:mb-8 xl:mb-10 text-base sm:text-lg lg:text-xl xl:text-2xl">
              {searchQuery
                ? `No products match "${searchQuery}". Try a different search term.`
                : "No products available in this category."}
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-5">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 bg-yellow-500 text-white rounded-lg xl:rounded-xl hover:bg-yellow-600 transition-all font-semibold text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Clear Search
                </button>
              )}
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 bg-blue-500 text-white rounded-lg xl:rounded-xl hover:bg-blue-600 transition-all font-semibold text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  View All Products
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-6 2xl:gap-8">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Product Image */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-64 xl:h-56 2xl:h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-20 h-20 text-gray-400" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {product.categoryName}
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 lg:p-6 xl:p-7">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {product.description && (
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      <button
                        onClick={() => handleViewProductDetail(product)}
                        className="mt-2 text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base flex items-center gap-1 transition-colors group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={handleContactUs}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md font-semibold text-sm sm:text-base group"
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && filteredProducts.length > productsPerPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100"
          >
            <div className="text-sm sm:text-base text-gray-600 font-medium">
              Showing {indexOfFirstProduct + 1} -{" "}
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </div>

            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                }`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex gap-1 sm:gap-2">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show max 5 page numbers on mobile, all on desktop
                  if (
                    totalPages <= 7 ||
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 &&
                      pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageClick(pageNumber)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                          currentPage === pageNumber
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return (
                      <span
                        key={pageNumber}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA Section */}
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center border border-blue-500"
          >
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
                Interested in Our Products?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                We're here to help! Get in touch with us for more information,
                custom orders, or any questions about our products.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg font-semibold text-sm sm:text-base lg:text-lg"
                >
                  <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                  View All Products
                </button>
                <button
                  onClick={handleContactUs}
                  className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-lg font-semibold text-sm sm:text-base lg:text-lg"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      <style>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default Product;
