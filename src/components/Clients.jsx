import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Handshake,
  Award,
  Globe,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Import client logos
import brac from "../assets/clientsLogo/brack2.png";
import unhcr from "../assets/clientsLogo/unhcr.png";
import unicef from "../assets/clientsLogo/unicef2.png";
import undp from "../assets/clientsLogo/undp.png";
import dls from "../assets/clientsLogo/dls.png";
import bdcr from "../assets/clientsLogo/bdcr.png";
import smc from "../assets/clientsLogo/smc.png";
import securityPrinting from "../assets/clientsLogo/securityPrinting.png";
import milkvita from "../assets/clientsLogo/malikvita.png";
import aci from "../assets/clientsLogo/aci.png";
import premiaflex from "../assets/clientsLogo/Premiaflex.png";
import lalTeer from "../assets/clientsLogo/lalTeer.png";
import ejab from "../assets/clientsLogo/Ejab.png";
import american from "../assets/clientsLogo/American.png";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "BRAC",
      fullName:
        "BRAC Printing Pack, BRAC Bull & Buck Station (Artificial Insemination Enterprise)",
      logo: brac,
    },
    {
      id: 2,
      name: "UNHCR",
      fullName: "United Nation High Commission of Refugee",
      logo: unhcr,
    },
    {
      id: 3,
      name: "UNICEF",
      fullName: "United Nations Children's Fund",
      logo: unicef,
    },
    {
      id: 4,
      name: "UNDP",
      fullName: "United Nations Development Programme",
      logo: undp,
    },
    {
      id: 5,
      name: "Department of Livestock Services",
      fullName: "Department of Livestock Services Bangladesh",
      logo: dls,
    },
    {
      id: 6,
      name: "Bangladesh Red Crescent Society",
      fullName: "Bangladesh Red Crescent Society",
      logo: bdcr,
    },
    {
      id: 7,
      name: "Social Marketing Company",
      fullName: "Social Marketing Company (SMC)",
      logo: smc,
    },
    {
      id: 8,
      name: "Security Printing Corporation",
      fullName: "The Security Printing Corporation (Bangladesh) Ltd.",
      logo: securityPrinting,
    },
    {
      id: 9,
      name: "MILK VITA",
      fullName: "Bangladesh Milk Producers' Co-Operative Union Ltd.",
      logo: milkvita,
    },
    {
      id: 10,
      name: "ACI",
      fullName: "Advance Chemical Industries Ltd. (ACI), ACI Animal Genetics",
      logo: aci,
    },
    {
      id: 11,
      name: "Premiaflex Plastics",
      fullName: "Premiaflex Plastics Limited",
      logo: premiaflex,
    },
    {
      id: 12,
      name: "Lal Teer Livestock",
      fullName: "Lal Teer Livestock Development (BD) Ltd.",
      logo: lalTeer,
    },
    {
      id: 13,
      name: "Ejab Alliance",
      fullName: "Ejab Alliance Ltd.",
      logo: ejab,
    },
    {
      id: 14,
      name: "American Dairy",
      fullName: "American Dairy Limited",
      logo: american,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Hero Banner */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={floatAnimation}
            className="absolute top-20 left-10 text-white/10"
          >
            <Building2 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </motion.div>
          <motion.div
            animate={{
              ...floatAnimation,
              transition: { ...floatAnimation.transition, delay: 0.5 },
            }}
            className="absolute top-40 right-20 text-white/10"
          >
            <Handshake className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
          </motion.div>
          <motion.div
            animate={{
              ...floatAnimation,
              transition: { ...floatAnimation.transition, delay: 1 },
            }}
            className="absolute bottom-20 left-1/4 text-white/10"
          >
            <Award className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </motion.div>
        </div>

        <div className="relative w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 lg:py-14 xl:py-16 2xl:py-18">
          <div className="text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 lg:mb-6 border border-white/30 shadow-lg"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
              <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                Trusted by Leading Organizations
              </span>
            </motion.div>

            {/* Animated Title with Different Entrance */}
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-white mb-2 sm:mb-3 leading-tight"
              >
                Our
              </motion.h1>
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight"
              >
                Valued Clients
              </motion.h1>
            </div>

            {/* Animated Subtitle */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-7 lg:mb-8 leading-relaxed px-4"
            >
              Building lasting partnerships with{" "}
              <span className="font-bold text-yellow-300">
                14+ prestigious organizations
              </span>{" "}
              across Bangladesh and beyond
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 xl:px-12 xl:py-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Building2 className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-yellow-300" />
                  <div className="text-left">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
                      14+
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-base text-blue-200">
                      Trusted Clients
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-5 xl:px-8 xl:py-5 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-green-300" />
                  <div className="text-left">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
                      Global
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-base text-blue-200">
                      Partnerships
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-5 xl:px-8 xl:py-5 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-pink-300" />
                  <div className="text-left">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
                      100%
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-base text-blue-200">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 sm:mb-6">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
            <span className="text-blue-800 font-bold text-sm sm:text-base lg:text-lg xl:text-xl">
              Our Esteemed Partners
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
            Organizations We're{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proud to Serve
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders, government bodies, and
            international organizations to deliver excellence
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-8 2xl:gap-10"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300"
            >
              {/* Card Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300 z-10">
                <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                  {index + 1}
                </span>
              </div>

              {/* Logo Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 xl:h-56 2xl:h-72 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6 sm:p-8 lg:p-10 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="relative z-10 max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                />

                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/30 rounded-t-3xl transition-all duration-300"></div>
              </div>

              {/* Client Info */}
              <div className="p-5 sm:p-6 lg:p-7 xl:p-6 2xl:p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {client.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base xl:text-sm 2xl:text-base text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors">
                  {client.fullName}
                </p>

                {/* Hover Effect Gradient Line */}
                <div className="mt-4 sm:mt-5 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 lg:mt-24 xl:mt-28 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl lg:rounded-[3rem] shadow-2xl p-8 sm:p-12 lg:p-16 xl:p-20 text-center relative overflow-hidden"
        >
          {/* Animated Background Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              animate={floatAnimation}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8"
            >
              <Handshake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              Want to Join Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-lg text-blue-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's build a partnership that drives growth, innovation, and
              excellence together. Contact us today to explore collaboration
              opportunities!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-white text-blue-600 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl shadow-xl hover:shadow-2xl transition-all"
                onClick={() => (window.location.href = "/contact")}
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-transparent border-2 border-white text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:bg-white hover:text-blue-600 transition-all"
                onClick={() => (window.location.href = "/product")}
              >
                View Our Products
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
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

export default Clients;
