import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Award,
  MapPin,
  ExternalLink,
  Sparkles,
  Package,
  BadgeCheck,
  TrendingUp,
  Shield,
} from "lucide-react";
import partnerHero from "../assets/partnersImage/partnerHero.jpg";
import plogo1 from "../assets/partnersImage/plogo1.png";
import plogo2 from "../assets/partnersImage/plogo2.png";
import plogo3 from "../assets/partnersImage/plogo3.png";
import plogo4 from "../assets/partnersImage/plogo4.jpg";
import plogo5 from "../assets/partnersImage/plogo5.png";
import plogo6 from "../assets/partnersImage/plogo6.png";
import plogo7 from "../assets/partnersImage/plogo7.png";
import plogo8 from "../assets/partnersImage/plogo8.png";
import plogo9 from "../assets/partnersImage/plogo9.png";

const Partners = () => {
  const partners = [
    {
      id: 1,
      logo: plogo6,
      title: "IMV Technology, France",
      type: "Authorized Sole Distributor",
      product: "AI Consumable and AI LAB Equipment",
      description:
        "Authorized Sole Distributor of Bangladesh for IMV Technology, France for AI Consumable and AI LAB equipment's.",
      location: "ZI n° 1 Est, 61300 L'Aigle, France",
      country: "France",
      website: "https://www.imv-technologies.com/",
      icon: TrendingUp,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 2,
      logo: plogo1,
      title: "SHIJIAZHUANG LEAMANDOU CHEMICALS CO. LTD & LEMANDOU",
      type: "Sole Distributor",
      product: "Aluminum Foil",
      description:
        "Sole distributor of SHIJIAZHUANG LEAMANDOU CHEMICALS CO. LTD, and LEMANDOU is authorized distributor of Shandong Yuanrui Metal Material Co., Ltd for Aluminum Foil.",
      location:
        "17th Floor, Block A, COFCO Hebei Plaza, No. 345 Youyi North Street, Shijiazhuang 050071 China",
      country: "China",
      website: "https://www.lemandou.com/",
      icon: Package,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      logo: plogo2,
      title:
        "Chengdu Golden Bridge Technology Co., Ltd., Chengdu ARO Technology Co., Ltd., Chengdu AiAo Technology Co. Ltd.",
      type: "Sole Distributor",
      product: "Liquid Nitrogen Container",
      description:
        "Sole Distributorship with Chengdu Golden Bridge Technology Co., Ltd., Chengdu ARO Technology Co., Ltd., and Chengdu AiAo Technology Co. Ltd. for Liquid Nitrogen Container.",
      location:
        "No # 486, GuangHua East Third Road, QingYang, District Chengdu SiChuan 61000, P. R China",
      country: "China",
      website: "https://www.bio-equip.cn/",
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      logo: plogo3,
      title: "Bankim Plast Private Limited",
      type: "Authorized Sole Distributor",
      product: "Master Batch",
      description:
        "Authorized Sole Distributor of Bankim Plast and JJ Plastalloy Pvt. Ltd. for Master Batch.",
      location:
        "601, Bhakti Park, RHB Road, Mulund (W) Mumbai - 00080, Maharashtra & A-2, Badsha Bagh Colony, Maldahiya, Varanasi, Uttar Pradesh 221 002, India",
      country: "India",
      website: "https://www.bankimplast.com/",
      icon: Award,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      logo: plogo6,
      title: "Nelson Techno Medical Co., Ltd.",
      type: "Authorized Sole Distributor",
      product: "Veterinary & Livestock Equipment, AI Accessories",
      description:
        "Authorized Sole Distributor of Nelson Techno Medical Co., Ltd. for equipment of veterinary and livestock production, Artificial Insemination accessories.",
      location: "Room A1201 No.400 Pudian Road, Pudong, Shanghai 200122, China",
      country: "China",
      website: "https://www.imv-technologies.com/",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 6,
      logo: plogo5,
      title: "Zhangjiagang Weinhold Industrial Co., Ltd",
      type: "Sole Distributor",
      product: "Artificial Insemination Hand Gloves",
      description:
        "Sole Distributor of Zhangjiagang Weinhold Industrial Co., Ltd for Artificial insemination Hand Gloves.",
      location:
        "No.8 Chuangye Road, Fenghuang Town, Jiangsu Province, CN 215614, China",
      country: "China",
      website: "https://www.weinhold-corp.com/",
      icon: BadgeCheck,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      id: 7,
      logo: plogo7,
      title: "Paper Bag Mfg Co & Pure Trade Links (P) Ltd.",
      type: "Authorized Distributor",
      product: "Kraft Paper and Kraft Paper Bag",
      description:
        "Authorized distributor of Paper Bag Mfg Co and Pure Trade Links (P) Ltd., India for Kraft Paper and Kraft Paper Bag.",
      location: "India",
      country: "India",
      website: "https://www.paperbagmfg.com/",
      icon: Package,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      logo: plogo8,
      title: "Fujian Yamei Industry & Trade CO., Ltd.",
      type: "Authorized Distributor",
      product: "Mosquito Net",
      description:
        "Authorized Distributor of Fujian Yamei Industry & Trade CO., Ltd. for Distributer Mosquito Net in Bangladesh.",
      location:
        "3F, J District, Fen'an Industry Park, 142# JianXin North Road, Fuzhou, Fujian Province, China",
      country: "China",
      website: "http://www.yaheln.com/",
      icon: Shield,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 9,
      logo: plogo9,
      title: "NRS Relief",
      type: "Authorized Distributor",
      product: "Sleeping Mats",
      description: "Authorized Distributor of NRS Relief for Sleeping Mats.",
      location: "PO Box 261218, Jebel Ali Free Zone, Dubai, U.A.E.",
      country: "UAE",
      website: "https://www.nrsrelief.com/",
      icon: Globe2,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const handlePartnerClick = (website) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
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
      <section className="relative w-full h-[480px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[640px] 2xl:h-[680px] overflow-hidden">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 lg:mb-5 border border-white/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
              Global Distribution Network
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-5 leading-tight"
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
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellow-300 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    9+
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-blue-200 whitespace-nowrap">
                    Global Brands
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-7 lg:py-5 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-300 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    5
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-blue-200 whitespace-nowrap">
                    Countries
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-7 lg:py-5 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-pink-300 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    100%
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-blue-200 whitespace-nowrap">
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
            Click on any partner to visit their official website and explore
            their global presence
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
              onClick={() => handlePartnerClick(partner.website)}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-blue-400 cursor-pointer"
            >
              {/* Logo Section */}
              <div className="relative h-52 sm:h-56 lg:h-60 bg-white flex items-center justify-center p-8 sm:p-10 overflow-hidden border-b-2 border-gray-100">
                {/* Subtle Pattern Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>

                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Partner Logo */}
                <img
                  src={partner.logo}
                  alt={partner.title}
                  className="relative z-10 max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />

                {/* Visit Website Badge - Shows on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-full shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-semibold">
                      Visit Website
                    </span>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-4 py-2 bg-white rounded-full border-2 border-blue-100 shadow-lg group-hover:border-blue-300 transition-colors">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {partner.type}
                    </span>
                  </div>
                </div>

                {/* Country Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-gray-100 shadow-lg group-hover:border-blue-200 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {partner.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 sm:p-8 lg:p-9">
                {/* Partner Title */}
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                  {partner.title}
                </h3>

                {/* Product Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-5 border-2 border-blue-100 group-hover:border-blue-200 transition-colors">
                  <Package className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-blue-900">
                    {partner.product}
                  </span>
                </div>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed mb-5 line-clamp-3">
                  {partner.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border-2 border-gray-100 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                    {partner.location}
                  </p>
                </div>

                {/* Click to Visit Indicator */}
                <div className="mt-5 sm:mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    <span className="text-xs sm:text-sm font-semibold text-green-600">
                      Verified Partnership
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-xs sm:text-sm font-semibold">
                      Learn More
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
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
                onClick={() => (window.location.href = "/products")}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Partners;
