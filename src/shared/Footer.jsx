import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  ArrowRight,
  Heart,
} from "lucide-react";
import mainLogo from "../assets/logo/mainLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "Client", path: "/clients" },
    { name: "Partner", path: "/partners" },
    { name: "Expertise", path: "/expertise" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: " Sardar Global Trading Co. Ltd. House # 11, Road # 4 Dhanmondi R/A, Dhaka 1205, Bangladesh ",
    },
    { icon: Phone, text: "+8801 71303 3888" },
    { icon: Phone, text: "+8802 9614490" },
    { icon: Mail, text: "sardar@sardarglobal.net" },
    { icon: Globe, text: "www.sardarglobal.net" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 xl:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <div className="bg-white rounded p-1 shadow-md flex-shrink-0">
                <img
                  src={mainLogo}
                  alt="Company Logo"
                  className="h-16 sm:h-18 md:h-20 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight break-words">
                  Sardar Global Trading Co. Ltd
                </h3>
                <p className="text-amber-400 text-sm sm:text-base italic leading-tight">
                  ----- Your Personal Trading Company
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 text-justify">
              SGTCL is a renowned international trading company based in
              Bangladesh, established in 2015. We specialize in various sectors
              providing quality products and services globally.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61554819345474"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8801713033888"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-amber-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:text-amber-400 transition-colors" />
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-amber-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:text-amber-400 transition-colors" />
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-base"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-amber-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <info.icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-base leading-relaxed">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950/80 border-t border-blue-800">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6">
          <div className="flex flex-col items-center gap-3">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base text-center"
            >
              © {currentYear} Sardar Global Trading Co. Ltd. All rights
              reserved.
            </motion.p>

            {/* Developer Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-base"
            >
              <span className="text-gray-300">Developed with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-gray-300">by</span>
              <a
                href="https://wa.me/8801706656622"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                @kingshukhajong
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
