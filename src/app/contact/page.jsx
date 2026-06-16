"use client";

import { useState } from "react";

export default function ContactPage() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch("/api/contact", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        name,

        email,

        message,

      }),

    });

    const data = await res.json();

    alert(data.message);

  };

  return (

    <main className="relative overflow-hidden min-h-screen bg-[#050816] pt-40 pb-24">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

              📩 Contact RideSphere

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

              Let's

              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

                {" "}Connect

              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-9">

              Need help with rides, drivers or bookings? Our support team is available 24×7.

            </p>

            <div className="mt-12 space-y-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="text-white font-bold text-xl">

                  📞 Support

                </h3>

                <p className="mt-2 text-slate-400">

                  Available 24×7

                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="text-white font-bold text-xl">

                  📧 Email

                </h3>

                <p className="mt-2 text-slate-400">

                  support@ridesphere.in

                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="text-white font-bold text-xl">

                  📍 Location

                </h3>

                <p className="mt-2 text-slate-400">

                  India

                </p>

              </div>

            </div>

          </div>

          {/* Right Side Form */}

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10">

            <h2 className="text-3xl font-black text-white">

              Send a Message

            </h2>

            <form

              onSubmit={handleSubmit}

              className="mt-10 space-y-6"

            >

              <input

                type="text"

                placeholder="Your Name"

                value={name}

                onChange={(e) => setName(e.target.value)}

                required

                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

              />

              <input

                type="email"

                placeholder="Email Address"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                required

                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

              />

              <textarea

                rows={5}

                placeholder="Your Message"

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                required

                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

              />

              <button

                type="submit"

                className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold hover:scale-105 transition duration-300"

              >

                Send Message 🚀

              </button>

            </form>

          </div>

        </div>

      </div>

    </main>

  );

}

