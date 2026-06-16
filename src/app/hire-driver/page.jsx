"use client";

import { motion } from "framer-motion";

import {
  FaUserTie,
  FaBriefcase,
  FaCrown,
  FaCarSide,
  FaStar,
} from "react-icons/fa";

const drivers = [

  {

    icon: <FaCarSide className="text-3xl text-cyan-400" />,

    title: "Outstation Driver",

    exp: "8+ Years",

    rating: "4.9",

  },

  {

    icon: <FaBriefcase className="text-3xl text-green-400" />,

    title: "Corporate Driver",

    exp: "10+ Years",

    rating: "5.0",

  },

  {

    icon: <FaCrown className="text-3xl text-yellow-400" />,

    title: "Luxury Chauffeur",

    exp: "12+ Years",

    rating: "5.0",

  },

];

export default function HireDriverPage() {

  return (

    <main className="relative overflow-hidden min-h-screen bg-[#050816] pt-40 pb-24">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

            🚘 Hire Verified Drivers

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

            Hire

            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

              {" "}Professional Drivers

            </span>

          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

            Book trusted drivers for daily travel, outstation trips and corporate journeys.

          </p>

        </div>

        {/* Driver Suggestions */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {drivers.map((driver, index) => (

            <motion.div

              key={index}

              whileHover={{ y: -10 }}

              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8"

            >

              <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center">

                {driver.icon}

              </div>

              <h3 className="mt-6 text-3xl font-black text-white">

                {driver.title}

              </h3>

              <p className="mt-4 text-slate-400">

                Experience : {driver.exp}

              </p>

              <div className="mt-4 flex items-center gap-2 text-white">

                <FaStar className="text-yellow-400" />

                {driver.rating}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Form */}

        <div className="mt-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 max-w-5xl mx-auto">

          <h2 className="text-4xl font-black text-white">

            Request a Driver

          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <input

              type="text"

              placeholder="Full Name"

              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

            />

            <input

              type="tel"

              placeholder="Phone Number"

              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

            />

            <input

              type="text"

              placeholder="Pickup City"

              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

            />

            <select

              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

            >

              <option className="text-black">

                Select Driver Type

              </option>

              <option className="text-black">

                Outstation Driver

              </option>

              <option className="text-black">

                Daily Commute Driver

              </option>

              <option className="text-black">

                Corporate Driver

              </option>

              <option className="text-black">

                Luxury Chauffeur

              </option>

            </select>

          </div>

          <textarea

            rows={4}

            placeholder="Additional Requirements"

            className="w-full mt-6 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

          />

          <button

            className="mt-8 w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold hover:scale-105 transition duration-300"

          >

            Submit Request 🚀

          </button>

        </div>

        {/* Bottom Features */}

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          <span className="px-5 py-3 rounded-full bg-purple-500/20 text-purple-300">

            ✓ KYC Verified

          </span>

          <span className="px-5 py-3 rounded-full bg-blue-500/20 text-blue-300">

            ✓ Secure Drivers

          </span>

          <span className="px-5 py-3 rounded-full bg-green-500/20 text-green-300">

            ✓ 24×7 Support

          </span>

        </div>

      </div>

    </main>

  );

}

