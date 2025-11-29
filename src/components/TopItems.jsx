import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";
import { Sparkles, ArrowRight, Star, Loader2, AlertCircle } from "lucide-react";

const TopItems = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopProducts();
  }, []);

  const fetchTopProducts = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "topItems"),
        orderBy("createdAt", "desc"),
        limit(6)
      );
      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTopProducts(products);
      setError(null);
    } catch (err) {
      console.error("Error fetching top products:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (productId) => {
    navigate(`/top-items/${productId}`);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topProducts.length);
  };

  // Auto-advance slider - continuous left movement
  useEffect(() => {
    if (topProducts.length > 1) {
      const timer = setInterval(() => {
        nextSlide();
      }, 3500); // Change slide every 3.5 seconds
      return () => clearInterval(timer);
    }
  }, [topProducts.length, currentIndex]);

  const getVisibleProducts = () => {
    if (topProducts.length === 0) return [];
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + topProducts.length) % topProducts.length;
      visible.push({ ...topProducts[index], position: i });
    }
    return visible;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading top products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-3xl shadow-xl max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={fetchTopProducts}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Products Grid */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 xl:py-20">
        {topProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-12 rounded-3xl shadow-xl"
          >
            <Sparkles className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Products Yet
            </h3>
            <p className="text-gray-500">
              Top products will appear here once they are added.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
                Our Top Products
              </h2>
              <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
                Explore our handpicked selection of premium products
              </p>
            </motion.div>

            {/* Slider Container */}
            <div className="relative max-w-7xl mx-auto overflow-hidden">
              {/* Slider - Show 3 cards at once */}
              <div className="relative h-[650px] md:h-[700px] flex items-center justify-center">
                <div className="relative w-full flex items-center justify-center gap-8">
                  {getVisibleProducts().map((product, idx) => {
                    const isCenter = product.position === 0;
                    const isLeft = product.position === -1;
                    const isRight = product.position === 1;

                    return (
                      <motion.div
                        key={`${product.id}-${currentIndex}`}
                        initial={false}
                        animate={{
                          x: product.position * 520,
                          scale: isCenter ? 1.05 : 0.8,
                          opacity: isCenter ? 1 : 0.4,
                          zIndex: isCenter ? 10 : 1,
                        }}
                        transition={{
                          duration: 1,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className={`absolute w-[450px] ${
                          isCenter ? "cursor-pointer" : "pointer-events-none"
                        }`}
                        onClick={() => isCenter && handleReadMore(product.id)}
                      >
                        <div
                          className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${
                            isCenter
                              ? "border-blue-300 shadow-blue-200/50 group"
                              : "border-gray-100"
                          }`}
                        >
                          {/* Product Image */}
                          <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                            {product.imageUrl ? (
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                className={`w-full h-full object-cover transition-transform duration-500 ${
                                  isCenter ? "group-hover:scale-110" : ""
                                }`}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Sparkles className="w-20 h-20 text-gray-300" />
                              </div>
                            )}

                            {/* Featured Badge - only on center */}
                            {isCenter && (
                              <div className="absolute top-4 right-4">
                                <div className="bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                                  <Star className="w-4 h-4 fill-white" />
                                  Featured
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="p-7">
                            <h3
                              className={`text-2xl font-bold mb-3 transition-colors ${
                                isCenter
                                  ? "text-blue-950 group-hover:text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              {product.name}
                            </h3>

                            {/* Description */}
                            <p
                              className={`text-base leading-relaxed mb-5 line-clamp-3 ${
                                isCenter ? "text-gray-600" : "text-gray-500"
                              }`}
                            >
                              {truncateText(product.description, 120)}
                            </p>

                            {/* Read More Button - only on center */}
                            {isCenter && (
                              <motion.button
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleReadMore(product.id);
                                }}
                                className="flex items-center gap-2 text-blue-600 font-semibold text-base group-hover:gap-3 transition-all"
                              >
                                Read More
                                <ArrowRight className="w-5 h-5" />
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {topProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentIndex
                        ? "w-12 h-3 bg-blue-600"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default TopItems;
