"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="logo"
            width={52}
            height={52}
          />

          <div>

            <h1 className="text-3xl font-black text-white">
              RideSphere
            </h1>

            <p className="text-sm text-blue-400 font-semibold">
              by Budgetree
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10 font-semibold text-white">

          <Link href="/find-ride" className="hover:text-cyan-400">
            Find Ride
          </Link>

          <Link href="/offer-ride" className="hover:text-cyan-400">
            Offer Ride
          </Link>

          <Link href="/hire-driver" className="hover:text-cyan-400">
            Hire Driver
          </Link>

          <Link href="/safety" className="hover:text-cyan-400">
            Safety
          </Link>

          <Link href="/contact" className="hover:text-cyan-400">
            Contact
          </Link>

        </nav>

        {/* Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            href="/login"
            className="px-7 py-3 rounded-full border border-white/20 text-white hover:bg-white/10"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-105 duration-300"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden text-4xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {open && (

        <div className="lg:hidden bg-black/95 backdrop-blur-xl p-8 space-y-5 text-white">

          <Link href="/find-ride" className="block">
            Find Ride
          </Link>

          <Link href="/offer-ride" className="block">
            Offer Ride
          </Link>

          <Link href="/hire-driver" className="block">
            Hire Driver
          </Link>

          <Link href="/safety" className="block">
            Safety
          </Link>

          <Link href="/contact" className="block">
            Contact
          </Link>

        </div>

      )}
    </header>
  );
}
