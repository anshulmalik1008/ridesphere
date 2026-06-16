"use client";

import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const rides = [
  {
    from: "Delhi",
    to: "Rishikesh",
    date: "Today",
    price: "₹499",
    time: "5h 30m",
    seats: "3 Seats Left",
    rating: "4.9",
    driver: "Rahul Sharma",
  },

  {
    from: "Noida",
    to: "Jaipur",
    date: "Tomorrow",
    price: "₹699",
    time: "4h 45m",
    seats: "2 Seats Left",
    rating: "4.8",
    driver: "Amit Verma",
  },

  {
    from: "Gurgaon",
    to: "Chandigarh",
    date: "12 Jun",
    price: "₹599",
    time: "4h",
    seats: "4 Seats Left",
    rating: "5.0",
    driver: "Rohit Singh",
  },
];

export default function FindRide() {
  return (
    <section className="relative overflow-hidden gradpy-28 bg-[#050816]">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-10" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[180px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex px-5 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-100 to-blue-100 text-blue-700">

            🚗 Find Your Perfect Ride

          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-300 leading-tight">

            Travel Anywhere
            <br />

            With RideSphere

          </h2>

          <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto leading-8">

            Discover affordable rides, verified drivers and
            comfortable journeys across India with a premium
            and secure experience.

          </p>

        </motion.div>

        {/* Search Box */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/80 backdrop-blur-2xl rounded-[36px] shadow-2xl p-8 border border-white"
        >

          <div className="grid lg:grid-cols-5 gap-5">

            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl px-5 py-5 hover:border-blue-500 hover:shadow-lg transition">

              <FaMapMarkerAlt className="text-blue-600" />

              <input
                placeholder="From"
                className="w-full outline-none bg-transparent"
              />

            </div>

            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl px-5 py-5 hover:border-blue-500 hover:shadow-lg transition">

              <FaMapMarkerAlt className="text-blue-600" />

              <input
                placeholder="To"
                className="w-full outline-none bg-transparent"
              />

            </div>

            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl px-5 py-5 hover:border-blue-500 hover:shadow-lg transition">

              <FaCalendarAlt className="text-blue-600" />

              <input
                type="date"
                className="w-full h-14 bg-transparent outline-none px-2"
              />

            </div>

            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl px-5 py-5 hover:border-blue-500 hover:shadow-lg transition">

              <FaUsers className="text-blue-600" />

              <select className="w-full h-14 outline-none bg-transparent px-2">

                <option>1 Passenger</option>

                <option>2 Passengers</option>

                <option>3 Passengers</option>

                <option>4 Passengers</option>

              </select>

            </div>

            <button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-2xl font-semibold min-h-[64px] flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition duration-300">

              <FaSearch />

              Search Ride

            </button>

          </div>

        </motion.div>

        {/* Ride Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {rides.map((ride, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[36px] p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition duration-300"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500 text-sm">

                    {ride.from}

                  </p>

                  <h3 className="text-3xl font-bold text-slate-900">

                    {ride.to}

                  </h3>

                </div>

                <FaArrowRight className="text-blue-600 text-2xl" />

              </div>

              <div className="mt-6 flex justify-between text-sm text-slate-500">

                <span>{ride.time}</span>

                <span>{ride.date}</span>

              </div>

              <div className="mt-4 flex justify-between text-sm">

                <span>{ride.seats}</span>

                <span className="flex items-center gap-2">

                  <FaStar className="text-yellow-400" />

                  {ride.rating}

                </span>

              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 flex justify-between items-center">

                <div>

                  <p className="text-sm text-slate-500">

                    Driver

                  </p>

                  <h4 className="font-semibold">

                    {ride.driver}

                  </h4>

                </div>

                <div className="text-right">

                  <h3 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">

                    {ride.price}

                  </h3>

                  <p className="text-xs text-slate-500">

                    per seat

                  </p>

                </div>

              </div>

              <button className="mt-7 w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-[1.03] transition duration-300">

                Book Now

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
