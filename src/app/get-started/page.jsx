"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  FaUserPlus,
  FaIdCard,
  FaCarSide,
  FaArrowRight,
} from "react-icons/fa";

export default function GetStartedPage() {

  return (

    <main className="relative overflow-hidden min-h-screen bg-[#050816] pt-40 pb-24">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

            🚀 RideSphere by Budgetree

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

            Get

            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

              {" "}Started

            </span>

          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

            Create your account, complete KYC verification and start travelling smarter.

          </p>

        </div>

        {/* Steps */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Step 1 */}

          <motion.div

            whileHover={{ y: -10 }}

            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10"

          >

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">

              <FaUserPlus className="text-white text-3xl" />

            </div>

            <h3 className="mt-8 text-3xl font-black text-white">

              Create Account

            </h3>

            <p className="mt-5 text-slate-400 leading-8">

              Sign up and securely create your RideSphere account.

            </p>

          </motion.div>

          {/* Step 2 */}

          <motion.div

            whileHover={{ y: -10 }}

            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10"

          >

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

              <FaIdCard className="text-white text-3xl" />

            </div>

            <h3 className="mt-8 text-3xl font-black text-white">

              Complete KYC

            </h3>

            <p className="mt-5 text-slate-400 leading-8">

              Verify Aadhaar and identity to unlock all features.

            </p>

          </motion.div>

          {/* Step 3 */}

          <motion.div

            whileHover={{ y: -10 }}

            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10"

          >

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">

              <FaCarSide className="text-white text-3xl" />

            </div>

            <h3 className="mt-8 text-3xl font-black text-white">

              Start Travelling

            </h3>

            <p className="mt-5 text-slate-400 leading-8">

              Find rides, offer seats and hire verified drivers.

            </p>

          </motion.div>

        </div>

        {/* CTA Buttons */}

        <div className="mt-20 flex flex-wrap justify-center gap-5">

          <Link

            href="/find-ride"

            className="px-10 py-5 rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold flex items-center gap-3 hover:scale-105 duration-300"

          >

            Find Ride

            <FaArrowRight />

          </Link>

          <Link

            href="/offer-ride"

            className="px-10 py-5 rounded-3xl border border-white/10 bg-white/5 text-white hover:bg-white/10 duration-300"

          >

            Offer Ride

          </Link>

        </div>

        {/* Bottom Badges */}

        <div className="mt-20 flex flex-wrap justify-center gap-4">

          <span className="px-5 py-3 rounded-full bg-purple-500/20 text-purple-300">

            ✓ KYC Verified

          </span>

          <span className="px-5 py-3 rounded-full bg-blue-500/20 text-blue-300">

            ✓ Secure Payments

          </span>

          <span className="px-5 py-3 rounded-full bg-green-500/20 text-green-300">

            ✓ Live Tracking

          </span>

        </div>

      </div>

    </main>

  );

}

