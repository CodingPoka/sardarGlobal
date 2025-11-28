

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import slide1 from "../assets/homeImage/slide1.jpg";
import slide2 from "../assets/homeImage/slide2.jpg";
import slide3 from "../assets/homeImage/slide3.jpeg";
import slide4 from "../assets/homeImage/slide4.jpg";

const slides = [
  {
    image: slide1,
    title: "Welcome to Sardar Global Trading Co. Ltd. (SGTCL)",
    subtitle: "Leading Trading & Supply Solutions Since 2015",
  },
  {
    image: slide2,
    title: "Import • Export • Global Sourcing",
    subtitle: "Quality, Reliability, and On-Time Delivery — Always",
  },
  {
    image: slide3,
    title: "Your Trusted Partner Across Multiple Industries",
    subtitle: "Construction | Relief | Chemicals | Agriculture | IT Solutions",
  },
  {
    image: slide4,
    title: "Supporting UN, NGOs & Government Projects",
    subtitle: "Delivering Relief Items, Lab Equipment & Technical Supplies",
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
        delayChildren: 0.05,
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
        delayChildren: 0.03,
      },
    },
  },
  // Slide 3 – bold
  {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },
  // Slide 2 – slide from left
  {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" },
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

  // Auto change slide (3.5s, no flash)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[current];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Hero Slider */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Single slide – no fade on whole slide, so no flash */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="w-full h-full object-cover"
          />

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/30" />

          {/* Text content */}
          <div className="absolute inset-0 flex items-center justify-center">
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

      {/* Intro section under hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
          Trusted Trading Partner in Bangladesh and Beyond
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Sardar Global Trading Co. Ltd. (SGTCL) is a government-registered
          private limited company established in 2015 under the Companies Act of
          1994, Bangladesh. We specialize in the supply, import, and indenting
          of a diverse range of general and technical items for government and
          semi-government organizations, UN agencies, NGOs, hospitals,
          educational institutions, and multinational companies.
        </p>
      </section>
    </div>
  );
};

export default Home;
