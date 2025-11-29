import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Award,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Package,
  BadgeCheck,
  TrendingUp,
  Shield,
} from "lucide-react";
import partnerHero from "../assets/partnersImage/partnerHero.jpg";

const Partners = () => {
  const partners = [
    {
      id: 1,
      title: "SHIJIAZHUANG LEAMANDOU CHEMICALS CO. LTD & LEMANDOU",
      type: "Sole Distributor",
      product: "Aluminum Foil",
      description:
        "Sole distributor of SHIJIAZHUANG LEAMANDOU CHEMICALS CO. LTD, and LEMANDOU is authorized distributor of Shandong Yuanrui Metal Material Co., Ltd for Aluminum Foil.",
      location:
        "17th Floor, Block A, COFCO Hebei Plaza, No. 345 Youyi North Street, Shijiazhuang 050071 China",
      country: "China",
      icon: Package,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Chengdu Golden Bridge Technology Co., Ltd.",
      type: "Sole Distributor",
      product: "Liquid Nitrogen Container",
      description:
        "Sole Distributorship with Chengdu Golden Bridge Technology Co., Ltd. for Liquid Nitrogen Container.",
      location:
        "No # 486, GuangHua East Third Road, QingYang, District Chengdu SiChuan 61000, P. R China",
      country: "China",
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Bankim Plast & JJ Plastalloy Pvt. Ltd.",
      type: "Authorized Sole Distributor",
      product: "Master Batch",
      description:
        "Authorized Sole Distributor of Bankim Plast and JJ Plastalloy Pvt. Ltd. for Master Batch.",
      location:
        "601, Bhakti Park, RHB Road, Mulund (W) Mumbai - 00080, Maharashtra & A-2, Badsha Bagh Colony, Maldahiya, Varanasi, Uttar Pradesh 221 002, India",
      country: "India",
      icon: Award,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Nelson Techno Medical Co., Ltd.",
      type: "Authorized Sole Distributor",
      product: "Veterinary & Livestock Equipment, AI Accessories",
      description:
        "Authorized Sole Distributor of Nelson Techno Medical Co., Ltd. for equipment of veterinary and livestock production, Artificial Insemination accessories.",
      location: "Room A1201 No.400 Pudian Road, Pudong, Shanghai 200122, China",
      country: "China",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Zhangjiagang Weinhold Industrial Co., Ltd",
      type: "Sole Distributor",
      product: "Artificial Insemination Hand Gloves",
      description:
        "Sole Distributor of Zhangjiagang Weinhold Industrial Co., Ltd for Artificial insemination Hand Gloves.",
      location:
        "No.8 Chuangye Road, Fenghuang Town, Jiangsu Province, CN 215614, China",
      country: "China",
      icon: BadgeCheck,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      id: 6,
      title: "IMV Technology, France",
      type: "Authorized Sole Distributor",
      product: "AI Consumable and AI LAB Equipment",
      description:
        "Authorized Sole Distributor of Bangladesh for IMV Technology, France for AI Consumable and AI LAB equipment's.",
      location: "ZI n° 1 Est, 61300 L'Aigle, France",
      country: "France",
      icon: TrendingUp,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 7,
      title: "Paper Bag Mfg Co & Pure Trade Links (P) Ltd.",
      type: "Authorized Distributor",
      product: "Kraft Paper and Kraft Paper Bag",
      description:
        "Authorized distributor of Paper Bag Mfg Co and Pure Trade Links (P) Ltd., India for Kraft Paper and Kraft Paper Bag.",
      location: "India",
      country: "India",
      icon: Package,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "Fujian Yamei Industry & Trade CO., Ltd.",
      type: "Authorized Distributor",
      product: "Mosquito Net",
      description:
        "Authorized Distributor of Fujian Yamei Industry & Trade CO., Ltd. for Distributer Mosquito Net in Bangladesh.",
      location:
        "3F, J District, Fen'an Industry Park, 142# JianXin North Road, Fuzhou, Fujian Province, China",
      country: "China",
      icon: Shield,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 9,
      title: "NRS Relief",
      type: "Authorized Distributor",
      product: "Sleeping Mats",
      description: "Authorized Distributor of NRS Relief for Sleeping Mats.",
      location: "PO Box 261218, Jebel Ali Free Zone, Dubai, U.A.E.",
      country: "UAE",
      icon: Globe2,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
      {/* Hero Banner with Image */}
      <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={partnerHero}
            alt="Our Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        </div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        {/* Floating Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={floatAnimation}
            className="absolute top-20 left-10 text-white/10"
          >
            <Globe2 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </motion.div>
          <motion.div
            animate={{
              ...floatAnimation,
              transition: { ...floatAnimation.transition, delay: 0.5 },
            }}
            className="absolute top-32 right-16 text-white/10"
          >
            <Award className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
          </motion.div>
          <motion.div
            animate={{
              ...floatAnimation,
              transition: { ...floatAnimation.transition, delay: 1 },
            }}
            className="absolute bottom-24 left-1/4 text-white/10"
          >
            <Building2 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col justify-center items-center text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 lg:mb-6 border border-white/30 shadow-lg"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
            <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
              Global Distribution Network
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight"
          >
            Our Esteemed{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Global Partners
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4"
          >
            We are proud to be the{" "}
            <span className="font-bold text-yellow-300">
              sole distributor and authorized partner
            </span>{" "}
            of several renowned global brands, bringing quality products to
            Bangladesh
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-300" />
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    9+
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-blue-200">
                    Global Brands
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-5 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-300" />
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    5
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-blue-200">
                    Countries
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-5 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-pink-300" />
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    100%
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-blue-200">
                    Authorized
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 sm:mb-6">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
            <span className="text-blue-800 font-bold text-sm sm:text-base lg:text-lg xl:text-xl">
              Distribution Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Trusted{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Partnership Network
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering world-class products through exclusive distribution
            agreements with leading international manufacturers
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Gradient Header */}
              <div
                className={`relative h-32 sm:h-36 lg:h-40 bg-gradient-to-r ${partner.gradient} overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                </div>

                {/* Icon */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" />
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-lg">
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {partner.type}
                    </span>
                  </div>
                </div>

                {/* Country Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {partner.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 lg:p-8">
                {/* Partner Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {partner.title}
                </h3>

                {/* Product Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4 sm:mb-5 border border-blue-100">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-xs sm:text-sm font-bold text-blue-800">
                    {partner.product}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
                  {partner.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {partner.location}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="mt-5 sm:mt-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  <span className="text-xs sm:text-sm font-semibold text-green-600">
                    Verified Partnership
                  </span>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 lg:mt-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl lg:rounded-[3rem] shadow-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Animated Background Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              animate={floatAnimation}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8"
            >
              <Globe2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Interested in Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Premium Products?
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-lg text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore our extensive range of products from world-renowned
              manufacturers. Contact us to learn more about our distribution
              services and partnership opportunities.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-600 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl shadow-xl hover:shadow-2xl transition-all"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-white text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:bg-white hover:text-blue-600 transition-all"
                onClick={() => (window.location.href = "/product")}
              >
                Browse Products
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
      `}</style>
    </div>
  );
};

export default Partners;
