"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaStar,
  FaClock,
  FaFilter,
} from "react-icons/fa";

export default function FindRidePage() {

  const [rides, setRides] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filteredRides, setFilteredRides] = useState([]);

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  useEffect(() => {

    fetchRides();

  }, []);

  const fetchRides = async () => {

    try {

      const res = await fetch("/api/rides");

      const data = await res.json();

      setRides(data);

      setFilteredRides(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <main className="relative overflow-hidden min-h-screen bg-[#050816] pt-40 pb-24">

      {/* Background */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

            🚗 RideSphere by Budgetree

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

            Find Your

            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

              {" "}Perfect Ride

            </span>

          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

            Compare rides, choose verified drivers and travel smarter across India.

          </p>

        </div>

        {/* Search */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          className="mt-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8"

        >

          <div className="grid lg:grid-cols-5 gap-5">

            <div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-2xl px-5 py-5">

              <FaMapMarkerAlt className="text-cyan-400" />

              <input

                placeholder="From"

                value={from}

                onChange={(e) => setFrom(e.target.value)}

                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"

              />

            </div>

            <div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-2xl px-5 py-5">

              <FaMapMarkerAlt className="text-cyan-400" />

              <input

                placeholder="To"

                value={to}

                onChange={(e) => setTo(e.target.value)}

                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"

              />

            </div>

            <div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-2xl px-5 py-5">

              <FaCalendarAlt className="text-cyan-400" />

              <input

                type="date"

                className="w-full bg-transparent text-white outline-none"

              />

            </div>

            <div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-2xl px-5 py-5">

              <FaUsers className="text-cyan-400" />

              <select className="w-full bg-transparent text-white outline-none">

                <option className="text-black">1 Passenger</option>

                <option className="text-black">2 Passengers</option>

                <option className="text-black">3 Passengers</option>

                <option className="text-black">4 Passengers</option>

              </select>

            </div>

            <button

              onClick={() => {

                const filtered = rides.filter(

                  (ride) =>

                    ride.from?.toLowerCase().includes(from.toLowerCase()) &&

                    ride.to?.toLowerCase().includes(to.toLowerCase())

                );

                setFilteredRides(filtered);

              }}

              className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-2xl font-bold text-white flex items-center justify-center gap-3 hover:scale-105 duration-300"

            >

              <FaSearch />

              Search Ride

            </button>

          </div>

        </motion.div>

        {/* Filters */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full flex items-center gap-2">

            <FaFilter />

            Filters

          </button>

          <button className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full">

            Lowest Price

          </button>

          <button className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full">

            Earliest Departure

          </button>

          <button className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full">

            Highest Rated

          </button>

        </div>

        {/* Ride List */}

        <div className="space-y-8 mt-14">

          {loading ? (

            <div className="text-center text-white py-20">

              Loading rides...

            </div>

          ) : filteredRides.length === 0 ? (

            <div className="text-center text-white py-20">

              No rides available.

            </div>

          ) : (

            filteredRides.map((ride) => (

              <motion.div

                key={ride._id}

                whileHover={{ y: -6 }}

                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8"

              >

                <div className="grid lg:grid-cols-4 gap-10 items-center">

                  {/* Driver */}

                  <div>

                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">

                      {ride.name?.charAt(0)}

                    </div>

                    <h3 className="mt-5 text-2xl font-black text-white">

                      {ride.name}

                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-slate-300">

                      <FaStar className="text-yellow-400" />

                      5.0

                    </div>

                  </div>

                  {/* Route */}

                  <div>

                    <p className="text-slate-400">

                      From

                    </p>

                    <h3 className="text-3xl font-black text-white">

                      {ride.from}

                    </h3>

                    <p className="mt-5 text-slate-400">

                      To

                    </p>

                    <h3 className="text-3xl font-black text-white">

                      {ride.to}

                    </h3>

                  </div>

                  {/* Details */}

                  <div>

                    <div className="flex items-center gap-2 text-slate-300">

                      <FaClock className="text-cyan-400" />

                      <span>

                        {ride.time}

                      </span>

                    </div>

                    <p className="mt-5 text-slate-300">

                      {ride.seats} Seats Left

                    </p>

                    <p className="mt-5 text-slate-300">

                      {ride.date}

                    </p>

                  </div>

                  {/* Price */}

                  <div className="text-center lg:text-right">

                    <h2 className="text-5xl font-black text-cyan-400">

                      ₹{ride.price}

                    </h2>

                    <p className="text-slate-400">

                      per seat

                    </p>

                    <a

                      href={`tel:${ride.phone}`}

                      className="mt-6 inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold hover:scale-105 duration-300"

                    >

                      Contact Driver

                    </a>

                    <p className="mt-4 text-sm text-slate-400">

                      {ride.phone}

                    </p>

                  </div>

                </div>

              </motion.div>

            ))

          )}

        </div>

      </div>

    </main>

  );

}
