import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Package,
  Microscope,
  Beaker,
  Sprout,
  Gift,
  Laptop,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Import banner
import expertBanner from "../assets/expertiseImage/expertBanner.jpg";

// Import all images for each sector
// Sector 1 - Construction

import s1a from "../assets/expertiseImage/s1a.jpg";
import s1b from "../assets/expertiseImage/s1b.jpeg";
import s1c from "../assets/expertiseImage/s1c.jpeg";

// Sector 2 - Printing & Packaging
import s2a from "../assets/expertiseImage/s2a.jpg";
import s2b from "../assets/expertiseImage/s2b.jpg";
import s2c from "../assets/expertiseImage/s2c.jpg";

// Sector 3 - Artificial Insemination
import s3a from "../assets/expertiseImage/s3a.jpg";
import s3b from "../assets/expertiseImage/s3b.jpeg";
import s3c from "../assets/expertiseImage/s3c.jpeg";

// Sector 4 - Chemical Supplies
import s4a from "../assets/expertiseImage/s4a.jpg";
import s4b from "../assets/expertiseImage/s4b.jpg";
import s4c from "../assets/expertiseImage/s4c.jpg";

// Sector 5 - Agriculture
import s5a from "../assets/expertiseImage/s5a.jpeg";
import s5b from "../assets/expertiseImage/s5b.jpeg";
import s5c from "../assets/expertiseImage/s5c.jpeg";

// Sector 6 - Relief & Gift Items
import s6a from "../assets/expertiseImage/s6a.jpeg";
import s6b from "../assets/expertiseImage/s6b.jpeg";
import s6c from "../assets/expertiseImage/s6c.jpeg";
import s6d from "../assets/expertiseImage/s6d.jpeg";
import s6e from "../assets/expertiseImage/s6e.jpeg";

// Sector 7 - IT & Networking
import s7a from "../assets/expertiseImage/s7a.jpg";
import s7b from "../assets/expertiseImage/s7b.jpg";
import s7c from "../assets/expertiseImage/s7c.jpg";

const Expertise = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const detailsRef = useRef(null);

  const scrollToDetails = (idx) => {
    setActiveSection(idx);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const expertiseData = [
    {
      id: 1,
      title: "Artificial Insemination Complete Solutions",
      icon: Microscope,
      color: "teal",
      gradient: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      description:
        "Delivering end-to-end services for establishing laboratories specializing in reproductive biotechnology for bovines, buffaloes, and goats. Our comprehensive product range includes semen straws, AI sheaths, AI guns, AI gloves, and liquid nitrogen containers, ensuring efficient and effective breeding operations.",
      products: [
        "Semen Straws",
        "AI Sheaths",
        "AI Guns",
        "AI Gloves",
        "Liquid Nitrogen Containers",
        "Laboratory Setup",
      ],
      images: [s3a, s3b, s3c],
      stats: { labs: "15+", species: "3 Types" },
    },
    {
      id: 2,
      title: " Disaster & Rohingya Refugee Response",
      icon: Building2,
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description:
        "Supplying construction materials, shelter kits, jerry cans, mosquito nets, sleeping mats, jute bags, and other essential items for UNHCR operations in Cox's Bazar, supporting refugee relief efforts.",
      products: [
        "Construction Materials",
        "Education Kits",
        "Geo Bags",
        "Shelter Kits",
        "Jerry Cans",
        "Mosquito Nets",
        "Sleeping Mats",
        "Jute Bags",
        "Essential Relief Items",
      ],
      images: [s1a, s1b, s1c],
      stats: { projects: "50+", clients: "UNHCR, NGOs" },
    },
    {
      id: 3,
      title: "Flexible Printing & Packaging Materials",
      icon: Package,
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description:
        "Offering premium products such as aluminum foil, doctor blades, master batches, PET films, kraft paper, kraft paper bags, and mentoring badges. We also provide a variety of custom gift items.",
      products: [
        "Aluminum Foil",
        "Doctor Blades",
        "Master Batches",
        "PET Films",
        "Kraft Paper & Bags",
        "Custom Gift Items",
      ],
      images: [s2a, s2b, s2c],
      stats: { products: "100+", quality: "Premium" },
    },
    {
      id: 4,
      title: "Agricultural Fertilizer & Chemical Suppliers",
      icon: Beaker,
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      description:
        "Providing high-quality chemicals such as sodium chloride, potassium chloride BP, tri-sodium citrate BP, and dextrose anhydrous BP, with a focus on ORSaline-N solutions.",
      products: [
        "Sodium Chloride",
        "Potassium Chloride BP",
        "Tri-Sodium Citrate BP",
        "Dextrose Anhydrous BP",
        "ORSaline-N Solutions",
      ],
      images: [s4a, s4b, s4c],
      stats: { chemicals: "20+", standard: "BP Grade" },
    },
    {
      id: 5,
      title: "Jute Products",
      icon: Sprout,
      color: "green",
      gradient: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description:
        "Supplying fertilizers, pesticides, insecticides, and fungicides to support sustainable agricultural practices.",
      products: [
        "Fertilizers",
        "Pesticides",
        "Insecticides",
        "Fungicides",
        "Agricultural Equipment",
      ],
      images: [s5a, s5b, s5c],
      stats: { farmers: "1000+", regions: "Nationwide" },
    },
    {
      id: 6,
      title: "Lifestyle & Fashion",
      icon: Gift,
      color: "amber",
      gradient: "from-amber-500 to-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      description:
        "Offering an array of relief supplies, including food and non-food items, search and rescue kits for Red Crescent operations, and promotional gift items such as mugs, pens, keyrings, and bags.",
      products: [
        "Relief Supplies (Food & Non-Food)",
        "Search & Rescue Kits",
        "Promotional Mugs",
        "Custom Pens",
        "Keyrings & Bags",
      ],
      images: [s6a, s6b, s6c, s6d, s6e],
      stats: { items: "500+", partners: "Red Crescent" },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[420px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[620px] 2xl:h-[650px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={expertBanner}
          alt="Our Expertise"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/90" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -100],
                x: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute bottom-0"
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold text-xs sm:text-sm md:text-base">
                Industry Leading Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4"
            >
              Our Expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Delivering quality products and services across 7 diverse sectors,
              ensuring customer satisfaction and operational excellence since
              2015
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10"
            >
              {[
                { label: "Industry Sectors", value: "7+" },
                { label: "Products Range", value: "500+" },
                { label: "Happy Clients", value: "100+" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-4 sm:px-4 sm:py-4 md:px-6 md:py-5 border border-white/20 min-w-[90px] sm:min-w-[110px]"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-amber-400">
                    {stat.value}
                  </p>
                  <p className="text-white/90 text-xs sm:text-sm mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 sm:py-12 md:py-16 xl:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-6">
            Diverse Sectors, Tailored Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg xl:text-xl leading-relaxed">
            <span style={{ color: "#807d7d" }}>S</span>
            <span style={{ color: "#e03131" }}>G</span>
            <span style={{ color: "#807d7d" }}>T</span>
            <span style={{ color: "#807d7d" }}>C</span>
            <span style={{ color: "#807d7d" }}>L</span> operates across diverse
            sectors, providing a wide range of products and services tailored to
            meet the needs of various industries. From construction support to
            advanced IT solutions, we deliver excellence in every field.
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {expertiseData.map((sector, idx) => {
            const IconComponent = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(sector.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => scrollToDetails(idx)}
                className={`bg-white rounded-3xl shadow-xl border-2 ${sector.borderColor} p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl relative overflow-hidden group`}
              >
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${sector.gradient} opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500`}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: hoveredCard === sector.id ? 360 : 0,
                    scale: hoveredCard === sector.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br ${sector.gradient} rounded-2xl mb-5 shadow-lg relative z-10`}
                >
                  <IconComponent className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-950 mb-3 relative z-10">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base xl:text-lg leading-relaxed mb-4 relative z-10 text-justify">
                  {sector.description.substring(0, 150)}...
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-4 relative z-10">
                  {Object.entries(sector.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className={`${sector.bgColor} px-3 py-2 rounded-lg`}
                    >
                      <p
                        className={`text-${sector.color}-700 font-bold text-sm`}
                      >
                        {value}
                      </p>
                      <p className="text-gray-600 text-xs capitalize">{key}</p>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 text-${sector.color}-600 font-semibold text-sm md:text-base relative z-10 group-hover:gap-3 transition-all`}
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Detailed Sections */}
      <section
        ref={detailsRef}
        className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 py-12 md:py-16 xl:py-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
              Explore Our Services in Detail
            </h2>
            <p className="text-blue-200 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
              Click on any sector to see our comprehensive range of products and
              solutions
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {expertiseData.map((sector, idx) => {
              const IconComponent = sector.icon;
              return (
                <motion.button
                  key={sector.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(idx)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                    activeSection === idx
                      ? `bg-gradient-to-r ${sector.gradient} text-white shadow-lg`
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{sector.title}</span>
                  <span className="sm:hidden">Sector {idx + 1}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Section Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 xl:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                {/* Left - Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br ${expertiseData[activeSection].gradient} rounded-2xl shadow-lg`}
                    >
                      {React.createElement(expertiseData[activeSection].icon, {
                        className: "w-8 h-8 xl:w-10 xl:h-10 text-white",
                      })}
                    </div>
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-blue-950">
                      {expertiseData[activeSection].title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-base md:text-lg xl:text-xl leading-relaxed mb-8 text-justify">
                    {expertiseData[activeSection].description}
                  </p>

                  <h4 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                    Our Product Range:
                  </h4>
                  <div className="space-y-3">
                    {expertiseData[activeSection].products.map(
                      (product, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2
                            className={`w-6 h-6 text-${expertiseData[activeSection].color}-600 flex-shrink-0`}
                          />
                          <span className="text-gray-700 text-sm md:text-base xl:text-lg">
                            {product}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Right - Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {expertiseData[activeSection].images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className={`relative rounded-2xl overflow-hidden shadow-lg ${
                        idx === 0 ? "col-span-2 h-64 md:h-80" : "h-72 md:h-96"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${expertiseData[activeSection].title} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 xl:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 xl:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <Sparkles className="w-16 h-16 xl:w-20 xl:h-20 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-blue-200 text-base md:text-lg xl:text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how our expertise can help your business grow.
              Contact us today for customized solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 xl:px-10 xl:py-5 rounded-full text-base md:text-lg xl:text-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-3 mx-auto group"
            >
              Get Started Today
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Expertise;
