import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700 blur-[180px] opacity-20 rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 blur-[180px] opacity-20 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-14">

          {/* Company */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">

              RideSphere

            </h2>

            <p className="mt-1 font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

              by Budgetree

            </p>

            <p className="mt-8 text-slate-300 leading-8 max-w-md">

              India's trusted mobility platform helping people
              travel smarter, share rides and hire verified drivers
              with a secure and seamless experience.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <Link
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-sky-500 transition duration-300"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-blue-700 transition duration-300"
              >
                <FaLinkedinIn />
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold">

              Company

            </h3>

            <div className="mt-8 space-y-4 text-slate-300">

              <Link href="#" className="block hover:text-blue-400 transition">
                About Us
              </Link>

              <Link href="#" className="block hover:text-blue-400 transition">
                Careers
              </Link>

              <Link href="#" className="block hover:text-blue-400 transition">
                Blog
              </Link>

              <Link href="#" className="block hover:text-blue-400 transition">
                Investors
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold">

              Services

            </h3>

            <div className="mt-8 space-y-4 text-slate-300">

              <Link
                href="/find-ride"
                className="block hover:text-blue-400 transition"
              >
                Find Ride
              </Link>

              <Link
                href="/offer-ride"
                className="block hover:text-blue-400 transition"
              >
                Offer Ride
              </Link>

              <Link
                href="/hire-driver"
                className="block hover:text-blue-400 transition"
              >
                Hire Driver
              </Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-xl font-bold">

              Support

            </h3>

            <div className="mt-8 space-y-4 text-slate-300">

              <Link
                href="/safety"
                className="block hover:text-blue-400 transition"
              >
                Safety
              </Link>

              <Link
                href="/contact"
                className="block hover:text-blue-400 transition"
              >
                Contact
              </Link>

              <Link
                href="#"
                className="block hover:text-blue-400 transition"
              >
                Help Center
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-400 text-center">

            © 2026 RideSphere by Budgetree. All rights reserved.

          </p>

          <div className="flex items-center gap-5">

            <p className="text-slate-400">

              Made with ❤️ in India

            </p>

            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center hover:-translate-y-1 transition duration-300">

              <FaArrowUp />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}
