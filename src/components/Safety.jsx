"use client";

import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaUserCheck,
  FaPhoneAlt,
  FaLock,
  FaFingerprint,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck className="text-4xl text-cyan-400" />,
    title: "Verified Profiles",
    desc: "Every user completes identity verification before booking rides.",
  },

  {
    icon: <FaPhoneAlt className="text-4xl text-green-400" />,
    title: "24×7 Support",
    desc: "Dedicated support team available anytime you need help.",
  },

  {
    icon: <FaLock className="text-4xl text-purple-400" />,
    title: "Secure Payments",
    desc: "End-to-end encrypted and secure transactions.",
  },

  {
    icon: <FaFingerprint className="text-4xl text-orange-400" />,
    title: "KYC Authentication",
    desc: "Government ID verification for trusted journeys.",
  },
];

export default function Safety() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#050816]">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[220px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[220px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex px-5 py-3 rounded-full bg-white/10 border border-white/10 text-blue-300 font-semibold">

            🛡️ Safety & Authentication

          </span>

          <h2 className="mt-7 text-4xl md:text-6xl font-black text-white leading-tight">

            Your Journey,

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

              {" "}Our Priority

            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">

            RideSphere keeps every journey safe with
            identity verification, KYC authentication
            and secure ride experiences.

          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8 shadow-2xl hover:border-blue-500 transition duration-300"
            >

              <div className="flex justify-center">

                {feature.icon}

              </div>

              <h3 className="mt-7 text-2xl font-bold text-white text-center">

                {feature.title}

              </h3>

              <p className="mt-5 text-slate-300 leading-8 text-center">

                {feature.desc}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Trust Box */}

        <div className="mt-24 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-12">

          <div className="flex items-center justify-center gap-4">

            <FaShieldAlt className="text-5xl text-cyan-400" />

            <h3 className="text-3xl md:text-4xl font-black text-white">

              Trusted Across India

            </h3>

          </div>

          <div className="grid md:grid-cols-4 gap-10 mt-14 text-center">

            <div>

              <h4 className="text-5xl font-black text-white">

                50K+

              </h4>

              <p className="mt-3 text-slate-300">

                Verified Users

              </p>

            </div>

            <div>

              <h4 className="text-5xl font-black text-white">

                100K+

              </h4>

              <p className="mt-3 text-slate-300">

                Safe Trips

              </p>

            </div>

            <div>

              <h4 className="text-5xl font-black text-white">

                24×7

              </h4>

              <p className="mt-3 text-slate-300">

                Support

              </p>

            </div>

            <div>

              <h4 className="text-5xl font-black text-white">

                100%

              </h4>

              <p className="mt-3 text-slate-300">

                KYC Enabled

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
