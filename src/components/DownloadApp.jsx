"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaApple,
  FaGooglePlay,
  FaArrowRight,
  FaMobileAlt,
  FaBell,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function DownloadApp() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#050816] via-[#1e1b4b] to-[#0f172a] text-white">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[220px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[220px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-3 rounded-full text-blue-300 font-semibold">

              📱 RideSphere Mobile App

            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Book Rides

              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

                {" "}Anywhere

              </span>

              <br />

              Anytime.

            </h2>

            <p className="mt-7 text-lg text-slate-300 max-w-2xl leading-8">

              Download RideSphere and enjoy real-time tracking,
              instant booking, verified drivers and secure payments.

            </p>

            {/* Features */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-cyan-400" />

                <p className="text-slate-300">

                  Live ride tracking

                </p>

              </div>

              <div className="flex items-center gap-4">

                <FaBell className="text-purple-400" />

                <p className="text-slate-300">

                  Instant booking updates

                </p>

              </div>

              <div className="flex items-center gap-4">

                <FaMobileAlt className="text-green-400" />

                <p className="text-slate-300">

                  Smooth mobile experience

                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#"
                className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition duration-300"
              >

                <FaApple className="text-2xl" />

                App Store

              </Link>

              <Link
                href="#"
                className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-white/20 transition duration-300"
              >

                <FaGooglePlay />

                Google Play

              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

              <div className="flex justify-between items-center">

                <h3 className="text-3xl font-black">

                  RideSphere

                </h3>

                <span className="text-green-400 font-semibold">

                  ● Live

                </span>

              </div>

              <div className="mt-10 bg-white rounded-[30px] p-8 text-slate-900">

                <p className="text-slate-500">

                  Delhi → Rishikesh

                </p>

                <h4 className="mt-3 text-4xl font-black">

                  ₹499

                </h4>

                <p className="mt-3 text-slate-500">

                  3 Seats Left

                </p>

                <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition duration-300">

                  Book Now

                  <FaArrowRight />

                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
