import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Rocket,
  Award,
  CheckCircle2,
  Users,
  Globe,
  TrendingUp,
  Sparkles,
  Building2,
  HandshakeIcon,
  Shield,
  BadgeCheck,
  Sprout,
  UserCircle2,
  Mail,
  Phone,
} from "lucide-react";

// Import images
import aboutHero from "../assets/aboutImage/aboutHero.jpg";
import firstImage from "../assets/aboutImage/firstImage.jpg";
import ourHistory from "../assets/aboutImage/ourHistory.jpg";
import chairman from "../assets/aboutImage/chairman.jpg";
import managingDirector from "../assets/aboutImage/managingDirector.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("history");
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const coreValuesRef = useRef(null);
  const membershipsRef = useRef(null);
  const leadershipRef = useRef(null);

  const scrollToSection = (section) => {
    setActiveTab(section);
    let ref;
    if (section === "history") ref = historyRef;
    else if (section === "vision") ref = visionRef;
    else if (section === "mission") ref = missionRef;
    else if (section === "coreValues") ref = coreValuesRef;
    else if (section === "memberships") ref = membershipsRef;
    else if (section === "leadership") ref = leadershipRef;

    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Upholding the highest standards of honesty and transparency",
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Ensuring consistent and dependable service",
      color: "green",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Continuously adapting to market trends and customer demands",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: HandshakeIcon,
      title: "Mutual Respect",
      description: "Building strong relationships with stakeholders",
      color: "amber",
      gradient: "from-amber-500 to-amber-700",
    },
  ];

  const missionPoints = [
    "Deliver tailored solutions with competitive pricing and on-time delivery",
    "Foster long-term partnerships through exceptional service and innovation",
    "Maintain a dynamic, customer-focused approach to meet diverse needs",
    "Uphold our commitment to sustainable and ethical business practices",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={aboutHero}
          alt="About Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/90" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
              className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-6"
            >
              <Building2 className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm md:text-base">
                Since 2015
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-4 text-sm sm:text-base md:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Building excellence in trading since 2015, serving diverse sectors
              with dedication, innovation, and unwavering commitment to quality
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10"
            >
              {[
                { label: "Years of Excellence", value: "9+", icon: Award },
                { label: "Trusted Clients", value: "14+", icon: Users },
                { label: "Business Sectors", value: "7+", icon: Globe },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 border border-white/20 min-w-[90px] sm:min-w-[110px]"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400 flex-shrink-0" />
                    <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-amber-400">
                      {stat.value}
                    </p>
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={firstImage}
                alt="SGTCL Company"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Right - Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-8">
              Discover Our Journey
            </h2>
            <p className="text-gray-600 text-base md:text-lg xl:text-xl leading-relaxed mb-10">
              Explore the story, vision, mission, and core values that drive
              Sardar Global Trading Co. Ltd. to deliver excellence across
              diverse industries.
            </p>

            {/* Navigation Cards */}
            <div className="space-y-3">
              {[
                {
                  id: "history",
                  icon: Heart,
                  title: "Our History",
                  description: "The journey that shaped who we are today",
                  color: "red",
                },
                {
                  id: "vision",
                  icon: Target,
                  title: "Vision",
                  description: "Our aspirations for global leadership",
                  color: "blue",
                },
                {
                  id: "mission",
                  icon: Rocket,
                  title: "Mission",
                  description: "How we achieve our goals every day",
                  color: "purple",
                },
                {
                  id: "coreValues",
                  icon: Award,
                  title: "Core Values",
                  description: "The principles that guide our actions",
                  color: "amber",
                },
                {
                  id: "memberships",
                  icon: BadgeCheck,
                  title: "Memberships",
                  description: "Our professional affiliations",
                  color: "green",
                },
                {
                  id: "leadership",
                  icon: UserCircle2,
                  title: "Leadership",
                  description: "Meet our dedicated team",
                  color: "indigo",
                },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl border-2 transition-all ${
                      activeTab === item.id
                        ? `bg-${item.color}-50 border-${item.color}-500 shadow-lg`
                        : "bg-white border-gray-200 hover:border-gray-300 shadow-md"
                    }`}
                  >
                    {/* Red Dot Connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          activeTab === item.id
                            ? `bg-${item.color}-500`
                            : "bg-gray-300"
                        }`}
                      />
                      {item.id !== "leadership" && (
                        <div
                          className={`w-0.5 h-8 ${
                            activeTab === item.id
                              ? `bg-${item.color}-300`
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>

                    <IconComponent
                      className={`w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 ${
                        activeTab === item.id
                          ? `text-${item.color}-600`
                          : "text-gray-400"
                      }`}
                    />
                    <div className="flex-1 text-left">
                      <h3
                        className={`text-base md:text-lg xl:text-xl font-bold ${
                          activeTab === item.id
                            ? `text-${item.color}-700`
                            : "text-gray-700"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our History Section */}
      <section
        ref={historyRef}
        className="bg-white py-12 md:py-16 xl:py-20 scroll-mt-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-red-700 font-semibold">Our History</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
              Where It All Began
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl border-2 border-red-100">
                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center">
                  About SGTCL
                </h3>
                <p className="text-gray-700 text-base md:text-lg xl:text-xl leading-relaxed mb-6 text-justify">
                  Sardar Global Trading Co. Ltd. (SGTCL) is a
                  government-registered private limited company established in{" "}
                  <span className="font-bold text-red-600">2015</span> under the
                  Companies Act of 1994, Bangladesh. We are a leading
                  international and local trading company specializing in the
                  supply, import, and indenting of a diverse range of general
                  and technical items.
                </p>
                <p className="text-gray-700 text-base md:text-lg xl:text-xl leading-relaxed text-justify">
                  Our extensive expertise, coupled with a dedicated team of
                  professionals, ensures reliable service, competitive pricing,
                  and on-time deliveries, earning the trust and satisfaction of
                  our esteemed clients. SGTCL serves various sectors, including
                  government and semi-government organizations, UN agencies,
                  NGOs, hospitals, educational institutions, and multinational
                  companies.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Established", value: "2015" },
                  { label: "Registration", value: "1994 Act" },
                  { label: "Sector Type", value: "Private Ltd" },
                  { label: "Scope", value: "Global" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-xl shadow-md border border-red-100"
                  >
                    <p className="text-red-600 font-bold text-2xl mb-1">
                      {item.value}
                    </p>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ourHistory}
                  alt="Our History"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        ref={visionRef}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16 xl:py-20 scroll-mt-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
              Where We're Heading
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-14 xl:p-16 rounded-3xl shadow-2xl text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

              <div className="relative z-10">
                <Target className="w-20 h-20 text-amber-400 mx-auto mb-6" />
                <p className="text-white text-xl md:text-2xl xl:text-3xl leading-relaxed font-medium">
                  To be a{" "}
                  <span className="font-bold text-amber-300">
                    globally recognized leader
                  </span>{" "}
                  in the trading industry by consistently exceeding customer
                  expectations and setting new benchmarks in{" "}
                  <span className="font-bold text-amber-300">
                    service excellence
                  </span>
                  ,{" "}
                  <span className="font-bold text-amber-300">
                    business ethics
                  </span>
                  , and{" "}
                  <span className="font-bold text-amber-300">
                    organizational efficiency
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Vision Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: Globe,
                  title: "Global Recognition",
                  description: "Leading the trading industry worldwide",
                },
                {
                  icon: Award,
                  title: "Service Excellence",
                  description: "Setting new benchmarks in quality",
                },
                {
                  icon: TrendingUp,
                  title: "Organizational Efficiency",
                  description: "Optimizing every aspect of our operations",
                },
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center border-2 border-blue-100"
                >
                  <pillar.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-950 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="bg-gradient-to-br from-purple-50 to-pink-50 py-12 md:py-16 xl:py-20 scroll-mt-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Rocket className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
              How We Make It Happen
            </h2>
            <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
              Our mission guides every decision we make and every action we take
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {missionPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100 relative overflow-hidden group"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-base md:text-lg xl:text-xl leading-relaxed flex-1">
                      {point}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={coreValuesRef}
        className="bg-white py-12 md:py-16 xl:py-20 scroll-mt-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-semibold">Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
              Our core values are the foundation of everything we do, shaping
              our culture and driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border-2 border-gray-100 text-center relative overflow-hidden group"
                >
                  {/* Background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3
                      className={`text-2xl md:text-3xl font-bold text-${value.color}-700 mb-4`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section
        ref={membershipsRef}
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 md:py-16 xl:py-20 scroll-mt-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <BadgeCheck className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">Memberships</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
              Our Professional Affiliations
            </h2>
            <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
              Proud registered members of leading trade associations in
              Bangladesh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Dhaka Chamber of Commerce & Industry",
                abbreviation: "DCCI",
                icon: Building2,
                color: "blue",
                gradient: "from-blue-500 to-blue-700",
                description: "Leading chamber of commerce in Bangladesh",
              },
              {
                title: "Bangladesh Indenting Agents Association",
                abbreviation: "BIAA",
                icon: HandshakeIcon,
                color: "purple",
                gradient: "from-purple-500 to-purple-700",
                description: "Professional association for indenting agents",
              },
              {
                title: "Bangladesh Fertilizer Association",
                abbreviation: "BFA",
                icon: Sprout,
                color: "green",
                gradient: "from-green-500 to-green-700",
                description: "Association for fertilizer industry",
              },
            ].map((membership, idx) => {
              const IconComponent = membership.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 relative overflow-hidden group"
                >
                  {/* Background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${membership.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
                  />

                  <div className="relative z-10 text-center">
                    {/* Badge Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${membership.gradient} rounded-2xl mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Check Badge */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-green-500 rounded-full p-2 shadow-lg">
                        <BadgeCheck className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Abbreviation */}
                    <div
                      className={`inline-block bg-${membership.color}-50 px-4 py-1 rounded-full mb-4`}
                    >
                      <span
                        className={`text-${membership.color}-700 font-bold text-lg`}
                      >
                        {membership.abbreviation}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-3 leading-snug">
                      {membership.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {membership.description}
                    </p>

                    {/* Registered Badge */}
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-semibold text-sm">
                        Registered Member
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-200 rounded-2xl px-8 py-4">
              <BadgeCheck className="w-6 h-6 text-green-600" />
              <p className="text-gray-700 text-base md:text-lg">
                <span className="font-bold text-green-700">
                  Officially Registered
                </span>{" "}
                with leading trade associations ensuring credibility and
                professional standards
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        ref={leadershipRef}
        className="bg-white py-12 md:py-16 xl:py-20 scroll-mt-20"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
              <UserCircle2 className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-semibold">
                Our Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
              Experienced professionals guiding SGTCL towards excellence and
              sustainable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 xl:gap-12 max-w-6xl mx-auto">
            {/* Chairman Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-indigo-100 group hover:shadow-3xl transition-all"
            >
              <div className="relative">
                {/* Image */}
                <div className="w-full h-80 md:h-96 overflow-hidden">
                  <img
                    src={chairman}
                    alt="Mst. Jakera Parvin - Chairman"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Role Badge */}
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Chairman
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2">
                  Mst. Jakera Parvin
                </h3>
                <p className="text-indigo-600 font-semibold text-lg mb-4">
                  B.Sc (Hons)
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a
                        href="tel:+88029614490"
                        className="font-semibold hover:text-indigo-600 transition-colors"
                      >
                        +88 02 9614490
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:jakera@dotbd.com"
                        className="font-semibold hover:text-indigo-600 transition-colors break-all"
                      >
                        jakera@dotbd.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-indigo-200">
                  <p className="text-gray-600 text-sm italic">
                    Leading SGTCL with vision, dedication, and commitment to
                    excellence since 2015
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Managing Director Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100 group hover:shadow-3xl transition-all"
            >
              <div className="relative">
                {/* Image */}
                <div className="w-full h-80 md:h-96 overflow-hidden">
                  <img
                    src={managingDirector}
                    alt="Sardar Muhammad Nurul Huda - Managing Director"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Role Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Managing Director
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  Sardar Muhammad Nurul Huda
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  B.Sc Engineer (EEE)
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mobile</p>
                      <a
                        href="tel:+8801713033888"
                        className="font-semibold hover:text-blue-600 transition-colors"
                      >
                        +880 1713 033888
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:sardar@dotbd.com"
                        className="font-semibold hover:text-blue-600 transition-colors break-all"
                      >
                        sardar@dotbd.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-200">
                  <p className="text-gray-600 text-sm italic">
                    Driving innovation and operational excellence with
                    engineering expertise and strategic vision
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 md:py-16 xl:py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-blue-200 text-base md:text-lg xl:text-xl max-w-3xl mx-auto mb-8">
              Join our growing list of satisfied clients and experience the
              SGTCL difference
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
