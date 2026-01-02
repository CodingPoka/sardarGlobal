import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import imvLogo from "../assets/imvImage/imvLogo.png";

const ImvPartnership = () => {
  const handleLearnMore = () => {
    window.open("https://www.imv-technologies.com", "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Main Content Section */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-start">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center mb-8">
              <img
                src={imvLogo}
                alt="IMV Technologies Logo"
                className="h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 w-auto object-contain"
              />
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 leading-tight"
            >
              Proud to be the only one sole distributor of IMV Technologies in
              Bangladesh
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Sardar Global Trading Co. Ltd. (SGTCL) is honored to be the sole
                and only one official distributor of IMV Technologies in
                Bangladesh, representing the world's leading name in
                reproductive biotechnology, artificial insemination equipment,
                and livestock productivity solutions.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                IMV Technologies is a global leader in reproductive
                biotechnology and artificial insemination solutions, operating
                in over 163 countries worldwide.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Through this exclusive partnership, we bring world-class AI
                consumables, cryogenic preservation systems, and laboratory
                instruments to Bangladesh's livestock and dairy sectors. Our
                role is not just to supply IMV products — but to ensure their
                effective implementation, training, and long-term support for
                farms, institutions, and breeding programs nationwide.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleLearnMore}
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Visit IMV Technologies Website</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-full flex items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 w-full">
              {/* Video Container with 16:9 Aspect Ratio */}
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Ow_oeJXRJSc?si=GplWLtwcdU-xFBuO"
                  title="IMV Technologies Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImvPartnership;
