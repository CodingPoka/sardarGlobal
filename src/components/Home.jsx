import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import slide1 from "../assets/homeImage/slide1.jpg";
import slide2 from "../assets/homeImage/slide2.jpg";
import slide3 from "../assets/homeImage/slide3.jpeg";
import slide4 from "../assets/homeImage/slide4.jpg";
import slide5 from "../assets/homeImage/slide5.jpeg";
import slide6 from "../assets/homeImage/slide6.png";
import section1 from "../assets/homeImage/section1.jpg";
import section2 from "../assets/homeImage/section2.jpg";
import section5 from "../assets/homeImage/section5.jpg";
import { Award, TrendingUp, Heart } from "lucide-react";

const slides = [
  {
    image: slide1,
    title: "Welcome to Sardar Global Trading Co. Ltd.",
    subtitle:
      "Leading International Trading & trusted Supply Solutions Since 2015",
  },
  {
    image: slide2,
    title: "Import • Export • Global Sourcing &Trading",
    subtitle: "Quality, Reliability, and On-Time Delivery — Always",
  },
  {
    image: slide3,
    title: "Your Trusted Partner Across Multiple Industries",
    subtitle:
      "LiveStock | Relief | Agriculture Fertilizer & Chemical | Jute & Germents ",
  },
  {
    image: slide4,
    title:
      "Supporting UN Agencies, Leading NGOs & Government and Multinational Corporations",
    subtitle:
      "Delivering Relief Items, Lab Proudct & Consumables ,  & Technical Supplies",
  },
  {
    image: slide5,
    title: "Advanced Artificial Insemination Solutions",
    subtitle:
      "Delivering high-quality AI tools & biotechnology support for modern livestock breeding.",
  },
  {
    image: slide6,
    title: "Innovative AI Technology for Livestock Productivity",
    subtitle:
      "Supplying semen straws, AI guns, sheaths, gloves, and LN₂ containers for efficient breeding operations.",
  },
];

/**
 * Title container variants (stagger timing)
 * Different per slide.
 */
const titleContainerVariants = [
  // Slide 1 – smooth, elegant
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.06,
      },
    },
  },
  // Slide 2 – more dynamic
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  },
  // Slide 3 – bold
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.06,
      },
    },
  },
  // Slide 4 – premium
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.06,
      },
    },
  },
  // Slide 5 – tech style
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  },
  // Slide 6 – modern bounce
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  },
];

/**
 * Word variants per slide (each word animates differently)
 */
const wordVariants = [
  // Slide 1 – fade up
  {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  },
  // Slide 2 – slide from left
  {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
  // Slide 3 – zoom in
  {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },
  // Slide 4 – blur + rise
  {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  // Slide 5 – rotate + zoom (tech style)
  {
    hidden: { opacity: 0, scale: 0.7, rotateX: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  // Slide 6 – bounce zoom
  {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4,
      },
    },
  },
];

/**
 * Subtitle animations per slide
 */
const subtitleVariants = [
  // Slide 1 – soft fade up
  {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.2, ease: "easeOut" },
    },
  },
  // Slide 2 – slide in from right
  {
    hidden: { opacity: 0, x: 35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, delay: 0.18, ease: "easeOut" },
    },
  },
  // Slide 3 – gentle rise
  {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.22, ease: "easeOut" },
    },
  },
  // Slide 4 – subtle scale in
  {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] },
    },
  },
  // Slide 5 – fade + slide from bottom
  {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: 0.25, ease: "easeOut" },
    },
  },
  // Slide 6 – elastic bounce
  {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        type: "spring",
        bounce: 0.3,
      },
    },
  },
];

/**
 * Image animation variants - different for each slide
 */
const imageVariants = [
  // Slide 1 – Ken Burns zoom in
  {
    initial: { scale: 1.2, opacity: 0.8 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 2, ease: "easeOut" },
  },
  // Slide 2 – Slide from right with zoom
  {
    initial: { scale: 1.3, x: 100 },
    animate: { scale: 1, x: 0 },
    transition: { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  // Slide 3 – Zoom out with rotation
  {
    initial: { scale: 1.4, rotate: 2 },
    animate: { scale: 1, rotate: 0 },
    transition: { duration: 2.2, ease: "easeOut" },
  },
  // Slide 4 – Pan and zoom (left to center)
  {
    initial: { scale: 1.25, x: -80 },
    animate: { scale: 1, x: 0 },
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
  },
  // Slide 5 – Blur zoom in (tech style)
  {
    initial: { scale: 1.3, filter: "blur(10px)" },
    animate: { scale: 1, filter: "blur(0px)" },
    transition: { duration: 1.8, ease: "easeOut" },
  },
  // Slide 6 – Vertical pan with zoom
  {
    initial: { scale: 1.35, y: -50 },
    animate: { scale: 1, y: 0 },
    transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
  },
];

/**
 * Title component – splits text into words and animates each word
 */
const AnimatedTitle = ({ text, slideIndex, current }) => {
  const words = text.split(" ");

  return (
    <motion.div
      key={`title-${current}`}
      className="inline-block"
      variants={titleContainerVariants[slideIndex]}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants[slideIndex]}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
};

/**
 * Subtitle component
 */
const AnimatedSubtitle = ({ text, slideIndex, current }) => (
  <motion.p
    key={`subtitle-${current}`}
    className="mt-4 text-lg md:text-2xl font-medium text-emerald-300 drop-shadow-md"
    variants={subtitleVariants[slideIndex]}
    initial="hidden"
    animate="visible"
  >
    {text}
  </motion.p>
);

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto change slide (3.5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[current];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Hero Slider */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Background Images - all rendered with crossfade */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.img
              key={`img-${index}`}
              initial={imageVariants[index].initial}
              animate={
                current === index
                  ? imageVariants[index].animate
                  : imageVariants[index].initial
              }
              transition={imageVariants[index].transition}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: current === index ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            />
          ))}

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/30 z-10" />

          {/* Text content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="max-w-4xl px-4 text-center">
              <AnimatedTitle
                text={activeSlide.title}
                slideIndex={current}
                current={current}
              />
              <AnimatedSubtitle
                text={activeSlide.subtitle}
                slideIndex={current}
                current={current}
              />
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full border border-emerald-300 transition-all ${
                index === current
                  ? "bg-emerald-400 scale-110"
                  : "bg-white/40 hover:bg-emerald-200"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Storytelling Sections */}

      {/* Section 1 - Quality for Trust */}
      <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <span className="text-blue-800 font-bold text-sm sm:text-base lg:text-lg">
                  Our Foundation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                QUALITY.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FOR TRUST.
                </span>
              </h2>

              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
                Consistency that builds long-term partnerships.
              </p>

              <div className="space-y-4">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Since 2015, Sardar Global Trading Co. Ltd. has delivered
                  products that meet international standards across
                  humanitarian, industrial, agricultural, and commercial
                  sectors. We ensure every item — from relief materials to
                  laboratory equipment — is sourced responsibly, inspected
                  thoroughly, and delivered reliably.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 italic border-l-4 border-blue-600 pl-4 sm:pl-6">
                  Quality is not just a requirement.
                  <br />
                  It is our promise.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={section1}
                  alt="Quality for Trust"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Supply for Impact */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left - Image (on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={section2}
                  alt="Supply for Impact"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Right - Content (on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <span className="text-green-800 font-bold text-sm sm:text-base lg:text-lg">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                SUPPLY.{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  FOR IMPACT.
                </span>
              </h2>

              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-600">
                Delivering essential goods where they matter most.
              </p>

              <div className="space-y-4">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  From refugee support operations in Cox's Bazar to NGO and UN
                  procurement programs, we supply lifesaving materials including
                  shelter kits, mosquito nets, jerry cans, food and non-food
                  relief items, and search and rescue equipment.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 italic border-l-4 border-green-600 pl-4 sm:pl-6">
                  Our supply chain is built to respond fast —<br />
                  because lives depend on it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Commitment for Future */}
      <section className="w-full bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                <span className="text-purple-800 font-bold text-sm sm:text-base lg:text-lg">
                  Our Vision
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                COMMITMENT.{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FOR FUTURE.
                </span>
              </h2>

              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-600">
                Sustainable, ethical, responsible supply chain.
              </p>

              <div className="space-y-4">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  From eco-conscious sourcing to responsible partnerships, SGTCL
                  is committed to sustainability in every step of our
                  operations. We work with global manufacturers who follow
                  environmental standards, and we promote long-term solutions
                  that respect people, communities, and the planet.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 italic border-l-4 border-purple-600 pl-4 sm:pl-6">
                  Our work today is an investment in tomorrow.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={section5}
                  alt="Commitment for Future"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
