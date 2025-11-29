import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Grid,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Tag,
} from "lucide-react";

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

  const handleContactUs = () => {
    navigate("/contact#contact-form");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleViewAllProducts = () => {
    navigate("/product");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-lg">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Package className="w-20 h-20 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={handleViewAllProducts}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            View All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header with Back Button */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-6 sm:py-8 lg:py-10 xl:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-4 sm:mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm sm:text-base lg:text-lg">
              Back to Products
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-yellow-300" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              Product Details
            </h1>
          </div>

          <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base lg:text-lg">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium">{category.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square lg:aspect-auto lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[700px]">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-gray-400" />
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-full text-xs sm:text-sm lg:text-base font-bold shadow-lg">
                {category.name}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Product Information */}
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-16 flex flex-col">
              <div className="flex-1">
                {/* Product Name */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                    {product.name}
                  </h2>
                  <div className="h-1 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>

                {/* Category Info */}
                <div className="mb-6 sm:mb-8 lg:mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-50 rounded-lg border border-blue-200">
                    <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-blue-700">
                      Category: {category.name}
                    </span>
                  </div>
                </div>

                {/* Product Description */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    Product Description
                  </h3>
                  <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl whitespace-pre-wrap">
                      {product.description ||
                        "No description available for this product."}
                    </p>
                  </div>
                </div>

                {/* Features/Highlights (if available) */}
                {product.features &&
                  Array.isArray(product.features) &&
                  product.features.length > 0 && (
                    <div className="mb-8 sm:mb-10 lg:mb-12">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {product.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200">
                <button
                  onClick={handleContactUs}
                  className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg font-bold text-sm sm:text-base lg:text-lg group"
                >
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  Send Us a Message
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleViewAllProducts}
                  className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg font-bold text-sm sm:text-base lg:text-lg group"
                >
                  <Grid className="w-5 h-5 sm:w-6 sm:h-6" />
                  Visit All Products
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center border border-blue-500"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 lg:mb-8">
              <Package className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Interested in This Product?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today to learn more about this product, request a
              quote, or place an order. Our team is ready to assist you!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6">
              <button
                onClick={handleContactUs}
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg font-bold text-sm sm:text-base lg:text-lg"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                Contact Us Now
              </button>
              <button
                onClick={handleViewAllProducts}
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all border-2 border-white/30 font-bold text-sm sm:text-base lg:text-lg"
              >
                <Grid className="w-5 h-5 sm:w-6 sm:h-6" />
                Browse More Products
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductDetail;
