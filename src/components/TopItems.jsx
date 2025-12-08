import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";
import { Sparkles, ArrowRight, Star, Loader2, AlertCircle } from "lucide-react";
import Marquee from "react-fast-marquee";

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
      {/* Products Marquee */}
      <section className="max-w-[1920px] mx-auto py-12 md:py-16 xl:py-20">
        {topProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-12 rounded-3xl shadow-xl mx-4 sm:mx-6 lg:mx-8"
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
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 px-4 sm:px-6 lg:px-8"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 sm:mb-6">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <span className="text-blue-800 font-bold text-sm sm:text-base lg:text-lg">
                  Featured Products
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Top Products
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
                Explore our handpicked selection of premium products
              </p>
            </motion.div>

            {/* Marquee Carousel */}
            <div className="overflow-hidden">
              <Marquee
                gradient={false}
                speed={200}
                pauseOnHover={true}
                className="py-4"
                style={{ overflow: "visible" }}
              >
                {topProducts.map((product) => (
                  <div
                    key={product.id}
                    className="mx-4 w-[450px] sm:w-[480px] lg:w-[520px]"
                  >
                    <div
                      onClick={() => handleReadMore(product.id)}
                      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 cursor-pointer transform-gpu will-change-transform"
                    >
                      {/* Product Image */}
                      <div className="relative h-80 sm:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Sparkles className="w-20 h-20 text-gray-300" />
                          </div>
                        )}

                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                            <Star className="w-4 h-4 fill-white" />
                            Featured
                          </div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 sm:p-7">
                        <h3 className="text-xl sm:text-2xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 line-clamp-3">
                          {truncateText(product.description, 120)}
                        </p>

                        {/* Read More Button */}
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
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default TopItems;
