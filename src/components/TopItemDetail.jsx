import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import {
  ArrowLeft,
  Package,
  Calendar,
  Tag,
  Loader2,
  AlertCircle,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroImage from "../assets/productImage/pDetails2.jpg";

const TopItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "topItems", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
        setError(null);
      } else {
        setError("Product not found");
      }
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Failed to load product details");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-3xl shadow-xl max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate("/top-items")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Top Items
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Product Details"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        </div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col justify-center items-center text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 border border-white/30 shadow-lg"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
            <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
              Featured Product Details
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
          >
            Discover Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Top Products
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Explore detailed information about our premium featured items
          </motion.p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate("/top-items")}
          className="flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Top Items
        </motion.button>
      </div>

      {/* Product Detail Section */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 md:py-12 xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-gray-100 to-gray-200">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                    <Package className="w-32 h-32 text-gray-300" />
                  </div>
                )}

                {/* Featured Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2">
                    <Star className="w-6 h-6 fill-white" />
                    Featured Item
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            {product.category && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block"
              >
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Tag className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-semibold">
                    {product.category}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Product Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-blue-950 leading-tight"
            >
              {product.name}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {product.createdAt && (
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 text-sm">
                    {formatDate(product.createdAt)}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                <Package className="w-8 h-8 text-blue-600" />
                Product Description
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-base md:text-lg xl:text-xl leading-relaxed whitespace-pre-wrap">
                  {product.description}
                </p>
              </div>
            </motion.div>

            {/* Additional Features (if available) */}
            {product.features && product.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-base md:text-lg">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Specifications (if available) */}
            {product.specifications && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                  Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + idx * 0.05 }}
                        className="bg-gray-50 p-4 rounded-xl"
                      >
                        <p className="text-sm text-gray-500 mb-1 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="text-base md:text-lg font-semibold text-gray-800">
                          {value}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 text-center shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interested in This Product?
              </h3>
              <p className="text-blue-200 mb-6">
                Contact us for more information and pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/products")}
                  className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all border-2 border-white hover:bg-gray-50"
                >
                  Visit Our All Products
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TopItemDetail;
