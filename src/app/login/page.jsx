"use client";

import { motion } from "framer-motion";

import {
 FaMobileAlt,
 FaIdCard,
 FaAddressCard,
 FaCamera,
 FaCarSide,
 FaCheckCircle,
} from "react-icons/fa";

export default function LoginPage() {

return (

<main className="relative overflow-hidden min-h-screen bg-[#050816] pt-40 pb-24">

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

<div className="relative max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center">

<span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

🔐 Secure Login

</span>

<h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

Secure

<span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

{" "}KYC Login

</span>

</h1>

<p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

Verify your identity and unlock all RideSphere features.

</p>

</div>

{/* Progress */}

<div className="grid md:grid-cols-3 gap-8 mt-20">

<motion.div

whileHover={{ y:-10 }}

className="bg-white/5 border border-white/10 rounded-[32px] p-8"

>

<FaMobileAlt className="text-cyan-400 text-4xl"/>

<h3 className="mt-6 text-3xl font-black text-white">

Phone OTP

</h3>

<p className="mt-4 text-slate-400">

Secure mobile verification.

</p>

</motion.div>

<motion.div

whileHover={{ y:-10 }}

className="bg-white/5 border border-white/10 rounded-[32px] p-8"

>

<FaIdCard className="text-purple-400 text-4xl"/>

<h3 className="mt-6 text-3xl font-black text-white">

Aadhaar Verify

</h3>

<p className="mt-4 text-slate-400">

Identity verification.

</p>

</motion.div>

<motion.div

whileHover={{ y:-10 }}

className="bg-white/5 border border-white/10 rounded-[32px] p-8"

>

<FaCamera className="text-green-400 text-4xl"/>

<h3 className="mt-6 text-3xl font-black text-white">

Face Match

</h3>

<p className="mt-4 text-slate-400">

Selfie verification.

</p>

</motion.div>

</div>

{/* Form */}

<div className="mt-20 max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10">

<h2 className="text-4xl font-black text-white">

Complete Your KYC

</h2>

<div className="grid md:grid-cols-2 gap-6 mt-10">

<input

type="tel"

placeholder="Phone Number"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<input

type="text"

placeholder="Aadhaar Number"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<input

type="text"

placeholder="PAN Number"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<input

type="file"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white"

/>

<input

type="file"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white"

/>

<input

type="file"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white"

/>

</div>

<button

className="mt-8 w-full py-5 rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-lg"

>

Verify & Login 🚀

</button>

</div>

{/* Features */}

<div className="mt-16 flex flex-wrap justify-center gap-4">

<span className="px-5 py-3 rounded-full bg-purple-500/20 text-purple-300">

✓ Aadhaar

</span>

<span className="px-5 py-3 rounded-full bg-blue-500/20 text-blue-300">

✓ PAN

</span>

<span className="px-5 py-3 rounded-full bg-green-500/20 text-green-300">

✓ Face Match

</span>

<span className="px-5 py-3 rounded-full bg-yellow-500/20 text-yellow-300">

✓ Driving Licence

</span>

<span className="px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300">

✓ OTP Verified

</span>

</div>

</div>

</main>

);

}
