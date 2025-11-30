import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  ArrowLeft,
  Package,
  Tag,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import pDetails from "../productImage/pDetails.jpg";

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductDetails();
  }, [categoryId, productId]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);

      // Fetch category
      const categoryDoc = await getDoc(doc(db, "categories", categoryId));
      if (categoryDoc.exists()) {
        setCategory({ id: categoryDoc.id, ...categoryDoc.data() });
      }

      // Fetch product
      const productDoc = await getDoc(
        doc(db, "categories", categoryId, "products", productId)
      );
      if (productDoc.exists()) {
        setProduct({ id: productDoc.id, ...productDoc.data() });
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
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

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-3xl shadow-xl max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={pDetails}
          alt="Product Details Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-blue-950/85"></div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-col justify-center">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors mb-4 sm:mb-5 group"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm sm:text-base">
              Back to Products
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <div className="p-2 sm:p-2.5 bg-amber-500/20 backdrop-blur-sm rounded-lg border border-amber-400/30">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            {category && (
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-amber-500/90 rounded-full">
                <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span className="font-bold text-white text-xs sm:text-sm">
                  {category.name}
                </span>
              </div>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Product Details
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
            Explore comprehensive information about this quality product
          </p>
        </div>
      </section>

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
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-contain p-8"
                  />
                ) : (
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                    <Package className="w-32 h-32 text-gray-300" />
                  </div>
                )}

                {/* Category Badge */}
                {category && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      {category.name}
                    </div>
                  </div>
                )}
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
            {category && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block"
              >
                <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                  <Tag className="w-5 h-5 text-amber-600" />
                  <span className="text-amber-700 font-semibold">
                    {category.name}
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
                  {product.description ||
                    "No description available for this product."}
                </p>
              </div>
            </motion.div>

            {/* Features (if available) */}
            {product.features &&
              Array.isArray(product.features) &&
              product.features.length > 0 && (
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
                  Browse All Products
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
