"use client";

import { useState } from "react";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function OfferRidePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    aadhaar: "",
    from: "",
    to: "",
    date: "",
    time :"",
    seats: "",
    price: "",
    message: "",
  });
  const [otp, setOtp] = useState("");

const [confirmation, setConfirmation] = useState(null);

const [isVerified, setIsVerified] = useState(false);

  const location = [
  "Noida",
  "Greater Noida",
  "Delhi",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
  "Haridwar",
  "Meerut",
  "Agra",
  "Lucknow",
];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };
    const sendOtp = async () => {
  try {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {}
      );
    }

    const appVerifier = window.recaptchaVerifier;

    const result = await signInWithPhoneNumber(
      auth,
      `+91${form.phone}`,
      appVerifier
    );

    setConfirmation(result);

    alert("OTP Sent");
  } catch (error) {
    console.log(error);

    alert("OTP Failed");
  }
};

const verifyOtp = async () => {
  try {
    await confirmation.confirm(otp);

    setIsVerified(true);

    alert("Phone Verified");
  } catch (error) {
    alert("Wrong OTP");
  }
};

       const handleSubmit = async (e) => {
       e.preventDefault();
       if (!isVerified) {
        alert("Please verify phone first");
        return;
       }

    

  const aadhaarRegex = /^[2-9]{1}[0-9]{11}$/;

   if (!aadhaarRegex.test(form.aadhaar)) {
    alert("Enter a valid 12 digit Aadhaar number");
    return;
  }
       console.log("Form Data:", form);
       alert(JSON.stringify(form));
        alert("Publish succesfully");

      try {
        const res = await fetch("/api/rides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          },
         body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);

     
      alert(JSON.stringify(data));{
    }
       } catch (error) {
    console.log("ERROR:", error);
    alert("Error Aa Gayi");
      }
      };

  

 return (

<main className="relative overflow-hidden min-h-screen bg-[#050816] pt-36 pb-24">

{/* Glow */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20" />

<div className="relative max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center">

<span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

🚗 Offer Your Ride

</span>

<h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

Share

<span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

{" "}Your Journey

</span>

</h1>

<p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

Publish your ride, verify your identity and earn money by sharing empty seats.

</p>

</div>

{/* Feature Badges */}

<div className="mt-12 flex flex-wrap justify-center gap-4">

<span className="px-5 py-3 rounded-full bg-purple-500/20 text-purple-300">

✓ Aadhaar Verified

</span>

<span className="px-5 py-3 rounded-full bg-blue-500/20 text-blue-300">

✓ OTP Verified

</span>

<span className="px-5 py-3 rounded-full bg-green-500/20 text-green-300">

✓ Secure Riders

</span>

</div>

{/* Form */}

<div className="mt-16 max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10">

<form

onSubmit={handleSubmit}

className="grid md:grid-cols-2 gap-6"

>

<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your Name"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none placeholder:text-slate-500"

/>

<input

name="phone"

value={form.phone}

onChange={handleChange}

placeholder="Phone Number"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none placeholder:text-slate-500"

/>

{/* OTP */}

<div className="md:col-span-2 flex flex-wrap gap-4">

<button

type="button"

onClick={sendOtp}

className="px-6 py-4 rounded-2xl bg-green-600 text-white font-semibold"

>

Send OTP

</button>

<input

value={otp}

onChange={(e) => setOtp(e.target.value)}

placeholder="Enter OTP"

className="flex-1 min-w-[220px] bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none"

/>

<button

type="button"

onClick={verifyOtp}

className="px-6 py-4 rounded-2xl bg-blue-600 text-white font-semibold"

>

Verify OTP

</button>

</div>

<div id="recaptcha-container" className="md:col-span-2" />

<input

name="aadhaar"

maxLength={12}

value={form.aadhaar}

onChange={handleChange}

placeholder="Aadhaar Number"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<div>

<input

list="from-location"

name="from"

value={form.from}

onChange={handleChange}

placeholder="From"

className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<datalist id="from-location">

{location.map((loc)=>(

<option key={loc} value={loc} />

))}

</datalist>

</div>

<div>

<input

list="to-location"

name="to"

value={form.to}

onChange={handleChange}

placeholder="To"

className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<datalist id="to-location">

{location.map((loc)=>(

<option key={loc} value={loc} />

))}

</datalist>

</div>

<input

type="date"

name="date"

value={form.date}

onChange={handleChange}

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<input

type="time"

name="time"

value={form.time}

onChange={(e)=>

setForm({

...form,

time:e.target.value

})

}

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<input

name="seats"

value={form.seats}

onChange={handleChange}

placeholder="Available Seats"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<input

name="price"

value={form.price}

onChange={handleChange}

placeholder="Price Per Seat ₹"

className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<textarea

rows={4}

name="message"

value={form.message}

onChange={handleChange}

placeholder="Additional Message"

className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"

/>

<button

type="submit"

className="md:col-span-2 py-5 rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-lg hover:scale-[1.02] duration-300"

>

🚀 Publish Ride

</button>

</form>

</div>

</div>

</main>

);
}

