"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaSearch,
  FaCarSide,
  FaUserTie,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#050816] pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

              🚀 India's Smart Mobility Platform

            </div>

            <h1 className="mt-10 text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white">

              Travel

              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

                {" "}Anywhere

              </span>

              <br />

              With RideSphere

            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-2xl">

              Find rides, offer empty seats and hire verified drivers with a premium secure experience.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/find-ride"
                className="px-9 py-5 rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold flex items-center gap-3 hover:scale-105 duration-300"
              >

                <FaSearch />

                Find Ride

              </Link>

              <Link
                href="/offer-ride"
                className="px-9 py-5 rounded-3xl border border-white/20 text-white hover:bg-white/10 flex items-center gap-3"
              >

                <FaCarSide />

                Offer Ride

              </Link>

              <Link
                href="/hire-driver"
                className="px-9 py-5 rounded-3xl border border-white/20 text-white hover:bg-white/10 flex items-center gap-3"
              >

                <FaUserTie />

                Hire Driver

              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-5xl font-black text-white">

                  50K+

                </h2>

                <p className="text-slate-400">

                  Users

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-white">

                  100K+

                </h2>

                <p className="text-slate-400">

                  Trips

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-white flex items-center gap-2">

                  4.9

                  <FaStar className="text-yellow-400 text-3xl" />

                </h2>

                <p className="text-slate-400">

                  Rating

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-end gap-8"
          >

            {/* KYC CARD */}

            <div className="w-full max-w-[380px]">

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

                <h3 className="text-3xl font-black text-white">

                  India's Smartest

                  <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">

                    Mobility Platform

                  </span>

                </h3>

                <p className="mt-5 text-slate-300 leading-8">

                  Find rides, share seats and hire verified drivers with secure KYC authentication.

                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">

                    ✓ KYC Verified

                  </span>

                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300">

                    ✓ Secure Payments

                  </span>

                  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">

                    ✓ Live Tracking

                  </span>

                </div>

              </div>

            </div>

            {/* CAR */}

            <Image
              src="/car.png"
              alt="RideSphere Car"
              width={900}
              height={700}
              priority
              quality={100}
              className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_30px_80px_rgba(59,130,246,0.55)]"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

