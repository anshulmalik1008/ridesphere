"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaCarSide,
  FaBriefcase,
  FaCrown,
  FaUserTie,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const drivers = [
  {
    icon: <FaCarSide className="text-3xl text-cyan-400" />,
    title: "Outstation Drivers",
    description: "Professional drivers for long-distance journeys.",
    rating: "4.9",
  },

  {
    icon: <FaBriefcase className="text-3xl text-green-400" />,
    title: "Corporate Drivers",
    description: "Reliable chauffeurs for business travel.",
    rating: "4.8",
  },

  {
    icon: <FaCrown className="text-3xl text-yellow-400" />,
    title: "Luxury Chauffeurs",
    description: "Premium drivers for luxury experiences.",
    rating: "5.0",
  },

  {
    icon: <FaUserTie className="text-3xl text-purple-400" />,
    title: "Daily Drivers",
    description: "Trusted drivers for everyday commuting.",
    rating: "4.9",
  },
];

export default function DriverHiring() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#050816]">

      {/* Glow */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[220px] opacity-20" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-700 rounded-full blur-[220px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex px-5 py-3 rounded-full bg-white/10 border border-white/10 text-blue-300 font-semibold">

            🚘 Verified Driver Services

          </span>

          <h2 className="mt-7 text-4xl md:text-6xl font-black text-white leading-tight">

            Hire Premium

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

              {" "}Verified Drivers

            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">

            Book professional and trusted drivers
            for business, daily commute, luxury travel
            and outstation journeys.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {drivers.map((driver, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8 shadow-2xl hover:border-blue-500 transition duration-300"
            >

              <div className="w-18 h-18 rounded-3xl bg-white/10 flex items-center justify-center">

                {driver.icon}

              </div>

              <h3 className="mt-7 text-3xl font-bold text-white">

                {driver.title}

              </h3>

              <p className="mt-4 text-slate-300 leading-8">

                {driver.description}

              </p>

              <div className="mt-6 flex items-center gap-2 text-white">

                <FaStar className="text-yellow-400" />

                {driver.rating} Rating

              </div>

              <Link
                href="/hire-driver"
                className="mt-8 inline-flex items-center gap-3 text-blue-300 font-semibold hover:text-white transition"
              >

                Book Now

                <FaArrowRight />

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
