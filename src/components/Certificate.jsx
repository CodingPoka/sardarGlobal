import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  CheckCircle2,
  FileCheck,
  Building2,
  Globe2,
  TrendingUp,
} from "lucide-react";
import certificateHero from "../assets/certificate/banner3.jpg";
import certificatePreview1 from "../assets/certificate/certificate2.jpg";
import certificatePreview2 from "../assets/certificate/certificate3.jpg";
import certificatePreview3 from "../assets/certificate/certificate1.jpg";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificateImages = [
    certificatePreview1,
    certificatePreview2,
    certificatePreview3,
  ];

  // Auto-advance slideshow every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === certificateImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [certificateImages.length]);

  const coreCertificates = [
    {
      type: "Company Registration",
      title: "Establishment & Incorporation",
      code: "Established in 2015",
      details:
        "Registered under the Government of the People's Republic of Bangladesh, THE COMPANIES ACT, 1994 (ACT XVIII OF 1994) as a Private Limited Company.",
      extra: "Certificate of Incorporation No. C-126394/2015",
      icon: Building2,
      color: "blue",
    },
    {
      type: "Import & Trade License",
      title: "Import Registration Certificate (IRC)",
      code: "IRC No. 260326110735619",
      details:
        "Registered as Importer under the Chief Controller of Imports and Exports Control Office, Government of the People's Republic of Bangladesh.",
      extra: "Validity: 2024–2025",
      icon: Globe2,
      color: "indigo",
    },
    {
      type: "Indenting & Procurement",
      title: "Indentors Registration Certificate (IRC)",
      code: "IRC No. 260326230081524",
      details:
        "Registered as Indentor under the Chief Controller of Imports and Exports Control Office, Government of the People's Republic of Bangladesh.",
      extra: "Validity: 2024–2025",
      icon: FileCheck,
      color: "purple",
    },
    {
      type: "Export Compliance",
      title: "Export Registration Certificate (ERC)",
      code: "ERC No. 260326210886824",
      details:
        "Registered as Exporter under the Chief Controller of Imports and Exports Control Office, Government of the People's Republic of Bangladesh.",
      extra: "Validity: 2024–2025",
      icon: TrendingUp,
      color: "teal",
    },
    {
      type: "Local Business License",
      title: "Trade License",
      code: "TRAD/DSCC/241906/2019",
      details:
        "Updated Trade License issued by Dhaka South City Corporation (DSCC).",
      extra: "Validity: 2025–2026",
      icon: Award,
      color: "amber",
    },
    {
      type: "Tax Compliance",
      title: "Taxpayer Identification (TIN)",
      code: "TIN: 694663564792",
      details:
        "Taxpayer's Identification Number Certificate issued by the National Board of Revenue (NBR), Government of the People's Republic of Bangladesh.",
      extra: "",
      icon: CheckCircle2,
      color: "green",
    },
    {
      type: "VAT & Regulatory",
      title: "Business Identification Number (BIN)",
      code: "BIN: 001909432-0201",
      details:
        "VAT Registration No. 19151086270 under the Government of the People's Republic of Bangladesh, Dhaka South City Corporation, Dhanmondi.",
      extra: "",
      icon: Shield,
      color: "emerald",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-700 bg-blue-50 border-blue-200 text-blue-700",
      indigo:
        "from-indigo-500 to-indigo-700 bg-indigo-50 border-indigo-200 text-indigo-700",
      purple:
        "from-purple-500 to-purple-700 bg-purple-50 border-purple-200 text-purple-700",
      teal: "from-teal-500 to-teal-700 bg-teal-50 border-teal-200 text-teal-700",
      amber:
        "from-amber-500 to-amber-700 bg-amber-50 border-amber-200 text-amber-700",
      green:
        "from-green-500 to-green-700 bg-green-50 border-green-200 text-green-700",
      emerald:
        "from-emerald-500 to-emerald-700 bg-emerald-50 border-emerald-200 text-emerald-700",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[380px] lg:h-[480px] xl:h-[550px] 2xl:h-[600px] overflow-hidden">
        <img
          src={certificateHero}
          alt="Certificates Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/70 to-blue-950/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl xl:max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm md:text-base">
                Certified & Compliant Since 2015
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4">
              Certificates & Legal Compliance
            </h1>
            <p className="mt-4 text-base md:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Verified registrations and licenses that demonstrate our legal,
              tax, and regulatory compliance as a trusted international trading
              partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold text-sm">
                Fully Certified
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 leading-tight">
              Legally Registered.
              <br />
              Globally Trusted.
            </h2>
            <p className="text-gray-600 text-base md:text-lg xl:text-xl leading-relaxed">
              Sardar Global Trading Co. Ltd. operates under full legal
              registration in Bangladesh, with active Import, Export, Indenting,
              Trade License, TIN and VAT registrations. These certifications
              enable us to participate in local and international trade,
              supporting government and NGO projects reliably.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-3xl xl:text-4xl font-bold">8+</p>
                <p className="text-sm xl:text-base text-blue-100">
                  Active Certifications
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-3xl xl:text-4xl font-bold">10+</p>
                <p className="text-sm xl:text-base text-amber-100">
                  Years Compliant
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gradient-to-br from-white to-blue-50 p-8 md:p-10 xl:p-12 rounded-3xl shadow-2xl border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl">
                <Shield className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-blue-950">
                Why Our Certifications Matter
              </h3>
            </div>
            <p className="text-gray-700 text-base md:text-lg xl:text-xl leading-relaxed">
              Certifications are proof of our eligibility and accountability as
              a registered trading company. They ensure transparency and give
              our partners and clients the confidence to work with us on
              long-term projects.
            </p>
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: CheckCircle2,
                  text: "Government Compliance (NBR, DSCC, Import/Export)",
                  color: "text-green-600 bg-green-50",
                },
                {
                  icon: CheckCircle2,
                  text: "Eligibility for UN/NGO tenders",
                  color: "text-blue-600 bg-blue-50",
                },
                {
                  icon: CheckCircle2,
                  text: "Trusted Supply Partner for audits & documentation",
                  color: "text-purple-600 bg-purple-50",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-4 rounded-xl ${
                    item.color.split(" ")[1]
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 xl:w-7 xl:h-7 flex-shrink-0 mt-0.5 ${
                      item.color.split(" ")[0]
                    }`}
                  />
                  <p className="text-gray-800 font-medium text-sm md:text-base xl:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Auto-scroll Certificate Images */}
      <section className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 py-12 md:py-16 xl:py-20 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-10 xl:mb-14">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
              Our Official Certificates
            </h3>
            <p className="text-blue-200 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
              Preview of our government-issued certificates and registrations
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Certificate Images with Fade Transition */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/30 bg-white">
              {certificateImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentImageIndex === idx ? 1 : 0,
                    scale: currentImageIndex === idx ? 1 : 1.1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={img}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-full object-contain p-4 md:p-6 xl:p-8"
                  />
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {certificateImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    currentImageIndex === idx
                      ? "w-12 h-3 bg-amber-400"
                      : "w-3 h-3 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View certificate ${idx + 1}`}
                />
              ))}
            </div>

            {/* Certificate Counter */}
            <div className="text-center mt-4">
              <p className="text-white/80 text-sm md:text-base">
                Certificate {currentImageIndex + 1} of{" "}
                {certificateImages.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Certificates */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 xl:py-20">
        <div className="text-center mb-12 xl:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-5 py-2 mb-6">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <span className="text-blue-900 font-semibold text-sm md:text-base">
              Complete Documentation
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-blue-950 mb-4">
            Our Core Certificates & Registrations
          </h3>
          <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-3xl mx-auto">
            Full legal compliance ensuring trust, transparency, and reliability
            in every transaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {coreCertificates.map((cert, idx) => {
            const IconComponent = cert.icon;
            const colorClasses = getColorClasses(cert.color);
            const gradientClass =
              colorClasses.split(" ")[0] + " " + colorClasses.split(" ")[1];
            const bgClass = colorClasses.split(" ")[2];
            const borderClass = colorClasses.split(" ")[3];
            const textClass = colorClasses.split(" ")[4];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white rounded-2xl shadow-xl border-2 ${borderClass} p-6 md:p-8 xl:p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClass} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br ${gradientClass} rounded-xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
                </div>

                {/* Type badge */}
                <div
                  className={`inline-block ${bgClass} rounded-full px-4 py-1.5 mb-3`}
                >
                  <p
                    className={`text-xs md:text-sm font-bold uppercase tracking-wide ${textClass}`}
                  >
                    {cert.type}
                  </p>
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl xl:text-2xl font-bold text-blue-950 mb-3 leading-tight">
                  {cert.title}
                </h4>

                {/* Code */}
                <div className="bg-blue-50 border-l-4 border-blue-600 px-4 py-3 rounded-r-lg mb-4">
                  <p className="text-sm md:text-base xl:text-lg font-bold text-blue-900">
                    {cert.code}
                  </p>
                </div>

                {/* Details */}
                <p className="text-sm md:text-base xl:text-lg text-gray-700 leading-relaxed mb-3">
                  {cert.details}
                </p>

                {/* Extra info */}
                {cert.extra && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs md:text-sm xl:text-base text-gray-600 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {cert.extra}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 xl:mt-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 rounded-3xl p-8 md:p-12 xl:p-16 text-center shadow-2xl"
        >
          <Shield className="w-16 h-16 xl:w-20 xl:h-20 text-amber-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-4">
            Certified Excellence Since 2015
          </h3>
          <p className="text-blue-200 text-base md:text-lg xl:text-xl max-w-3xl mx-auto mb-8">
            Our commitment to legal compliance and transparency ensures that
            every partnership is built on trust and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
              <p className="text-amber-400 font-bold text-2xl xl:text-3xl">
                100%
              </p>
              <p className="text-white text-sm xl:text-base">Compliant</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
              <p className="text-amber-400 font-bold text-2xl xl:text-3xl">
                7+
              </p>
              <p className="text-white text-sm xl:text-base">Certifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
              <p className="text-amber-400 font-bold text-2xl xl:text-3xl">
                Verified
              </p>
              <p className="text-white text-sm xl:text-base">
                Government Issued
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Certificate;
