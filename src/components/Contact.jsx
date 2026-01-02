import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin as LinkedIn,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon,
  CheckCircle2,
  Loader2,
  MessageCircle,
} from "lucide-react";
import contactImage from "../assets/contactImage/contact4.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS configuration
    const serviceID = "service_n118dzo";
    const templateID = "template_xd9m48w";
    const publicKey = "0GUCw_ceUNwAdaCQy";

    // Prepare template parameters - must match EmailJS template variables exactly
    const templateParams = {
      name: formData.name, // matches {{name}}
      email: formData.email, // matches {{email}}
      title: formData.title, // matches {{title}}
      message: formData.message, // matches {{message}}
    };

    console.log("Sending with params:", templateParams); // Debug log

    // Send email using EmailJS (v3+ syntax)
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success(
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
          {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#10b981",
              color: "#fff",
              fontWeight: "500",
            },
          }
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          title: "",
          message: "",
        });
        setLoading(false);
      },
      (error) => {
        console.error("FAILED...", error);
        console.error("Error details:", error.text); // More detailed error
        toast.error(
          "Oops! Something went wrong. Please try again or contact us directly.",
          {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#ef4444",
              color: "#fff",
              fontWeight: "500",
            },
          }
        );
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Toaster />
      {/* Banner */}
      <section className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[580px] overflow-hidden">
        <img
          src={contactImage}
          alt="Contact"
          className="w-full h-full object-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/90" />

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6">
              <HeadphonesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold text-xs sm:text-sm md:text-base">
                We're Here to Help
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4">
              Get In Touch
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg xl:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
              For business inquiries, quotations, partnerships, or general
              questions — our team is ready to support you 24/7.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                  +8802 9614490
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm md:text-base break-all">
                  sardar@sardarglobal.net
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mt-16 relative z-10">
          {[
            {
              icon: MessageSquare,
              title: "Quick Response",
              desc: "We respond within 24 hours",
              color: "blue",
            },
            {
              icon: HeadphonesIcon,
              title: "Expert Support",
              desc: "Dedicated account managers",
              color: "amber",
            },
            {
              icon: CheckCircle2,
              title: "Trusted Partner",
              desc: "Serving since 2015",
              color: "green",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center hover:shadow-2xl transition-shadow border border-blue-100"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 mb-4`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wrapper after banner */}
      <section
        id="contact-form"
        className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 md:py-12 lg:py-16 xl:py-20"
      >
        {/* ROW 1 → Form + Right Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          {/* LEFT → Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-3xl shadow-2xl border-2 border-blue-100 p-6 sm:p-8 md:p-10 xl:p-12 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-32 -mt-32 opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl">
                  <Send className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-900">
                  Send Us a Message
                </h2>
              </div>
              <p className="text-gray-600 text-sm md:text-base xl:text-lg mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 md:space-y-6 xl:space-y-7"
              >
                <div>
                  <label className="text-sm md:text-base xl:text-lg font-semibold text-blue-900 mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 xl:py-4 text-sm md:text-base xl:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base xl:text-lg font-semibold text-blue-900 mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 xl:py-4 text-sm md:text-base xl:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base xl:text-lg font-semibold text-blue-900 mb-2 block">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 xl:py-4 text-sm md:text-base xl:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base xl:text-lg font-semibold text-blue-900 mb-2 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 xl:py-4 text-sm md:text-base xl:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 xl:px-10 xl:py-4 rounded-lg text-sm md:text-base xl:text-lg font-bold hover:from-blue-800 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT → Contact Info + Business Hours (stacked) */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8 xl:gap-10">
            {/* CONTACT DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl border-2 border-blue-200 p-6 sm:p-8 xl:p-10 space-y-5 md:space-y-6"
            >
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-blue-900">
                Contact Details
              </h2>

              <div className="space-y-4 md:space-y-5 xl:space-y-6 text-sm md:text-base xl:text-lg text-gray-700">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold text-blue-900">
                      Registered Address
                    </span>
                    <br />
                    <span style={{ color: "#807d7d" }}>S</span>ardar{" "}
                    <span style={{ color: "#e03131" }}>G</span>lobal{" "}
                    <span style={{ color: "#807d7d" }}>T</span>rading{" "}
                    <span style={{ color: "#807d7d" }}>C</span>o.{" "}
                    <span style={{ color: "#807d7d" }}>L</span>td.
                    <br />
                    70, Bir Uttam CR Dutta Road, 7/37-B,
                    <br />
                    Eastern Plaza Commercial Complex,
                    <br />
                    Hatirpool, Dhaka – 1205, Bangladesh
                  </p>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold text-amber-700">
                      Corporate Address
                    </span>
                    <br />
                    <span style={{ color: "#807d7d" }}>S</span>ardar{" "}
                    <span style={{ color: "#e03131" }}>G</span>lobal{" "}
                    <span style={{ color: "#807d7d" }}>T</span>rading{" "}
                    <span style={{ color: "#807d7d" }}>C</span>o.{" "}
                    <span style={{ color: "#807d7d" }}>L</span>td.
                    <br />
                    House # 11, Road # 4
                    <br />
                    Dhanmondi R/A, Dhaka 1205, Bangladesh
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <Phone className="w-6 h-6 sm:w-6 sm:h-6 xl:w-7 xl:h-7 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Telephone
                    </p>
                    <p className="font-semibold">+8802 9614490</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Smartphone className="w-6 h-6 sm:w-6 sm:h-6 xl:w-7 xl:h-7 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Mobile</p>
                    <p className="font-semibold">+8801 71303 3888</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="w-6 h-6 sm:w-6 sm:h-6 xl:w-7 xl:h-7 text-blue-600 flex-shrink-0" />
                  <a
                    href="mailto:info@sardarglobal.net"
                    className="text-blue-700 font-medium underline hover:text-blue-900"
                  >
                    sardar@sardarglobal.net
                  </a>
                </div>

                <div className="flex gap-4 items-center">
                  <Globe className="w-6 h-6 sm:w-6 sm:h-6 xl:w-7 xl:h-7 text-indigo-600 flex-shrink-0" />
                  <a
                    href="https://www.sardarglobal.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline hover:text-purple-800"
                  >
                    www.sardarglobal.net
                  </a>
                </div>
              </div>

              <div className="flex gap-5 sm:gap-6 xl:gap-8 pt-4">
                <a
                  href="https://www.facebook.com/sardarglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors hover:scale-110 transform"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-7 h-7 xl:w-9 xl:h-9" />
                </a>
                <a
                  href="https://www.instagram.com/sardarglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-colors hover:scale-110 transform"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-7 h-7 xl:w-9 xl:h-9" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sardarglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors hover:scale-110 transform"
                  aria-label="Visit our LinkedIn page"
                >
                  <LinkedIn className="w-7 h-7 xl:w-9 xl:h-9" />
                </a>
                <a
                  href="https://wa.me/8801713033888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 transition-colors hover:scale-110 transform"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-7 h-7 xl:w-9 xl:h-9" />
                </a>
              </div>
            </motion.div>

            {/* BUSINESS HOURS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-2xl border-2 border-amber-200 p-6 sm:p-8 xl:p-10 space-y-5 md:space-y-6 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-200/30 rounded-full -ml-16 -mt-16" />
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-blue-900">
                Business Hours
              </h2>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-700 text-sm md:text-base xl:text-lg">
                  <p className="mb-2">
                    <span className="font-bold text-blue-900">
                      Saturday – Thursday:
                    </span>{" "}
                    <span className="font-medium">9:00 AM – 5:00 PM</span>
                  </p>
                  <p>
                    <span className="font-bold text-red-600">Friday:</span>{" "}
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROW 2 → Full Width Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 xl:mt-16 bg-white rounded-3xl shadow-2xl border-2 border-blue-200 p-6 sm:p-8 xl:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl">
              <MapPin className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-blue-900">
              Find Us on Google Maps
            </h2>
          </div>

          <div className="w-full h-72 sm:h-80 md:h-96 xl:h-[500px] 2xl:h-[600px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps?q=Sardar%20Global%20Trading%20Co.%20Ltd.%20Hatirpool%20Dhaka&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
