"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

const routes = [
  {
    from: "Delhi",
    to: "Manali",
    price: "From ₹899",
  },

  {
    from: "Noida",
    to: "Dehradun",
    price: "From ₹499",
  },

  {
    from: "Gurgaon",
    to: "Jaipur",
    price: "From ₹699",
  },

  {
    from: "Delhi",
    to: "Rishikesh",
    price: "From ₹549",
  },
];

export default function PopularRoutes() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#050816]">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

            🔥 Popular Routes

          </span>

          <h2 className="mt-7 text-5xl md:text-7xl font-black text-white">

            Trending

            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

              {" "}Destinations

            </span>

          </h2>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

            Explore India's most booked routes with affordable pricing,
            verified journeys and premium travel experiences.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {routes.map((route, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              transition={{ duration: 0.3 }}
              className="
              bg-white/5
              backdrop-blur-2xl
              rounded-[36px]
              p-8
              border
              border-white/10
              hover:border-cyan-500/40
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">

                <FaMapMarkedAlt className="text-white text-2xl" />

              </div>

              <p className="mt-7 text-slate-400 text-sm">

                {route.from}

              </p>

              <h3 className="mt-2 text-4xl font-black text-white">

                {route.to}

              </h3>

              <p className="mt-7 text-cyan-400 text-xl font-bold">

                {route.price}

              </p>

              <button className="mt-10 w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-105 transition duration-300 flex items-center justify-center gap-3">

                Explore Route

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

