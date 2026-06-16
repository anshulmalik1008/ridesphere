"use client";

import {

ShieldCheck,

PhoneCall,

MapPin,

UserCheck,

AlertTriangle,

Siren,

} from "lucide-react";

export default function SafetyPage() {

const safetyPoints = [

{

icon:<UserCheck className="w-8 h-8"/>,

title:"Verified Users",

desc:"Always check the driver's and passenger's verified profile before starting a trip.",

},

{

icon:<MapPin className="w-8 h-8"/>,

title:"Share Trip Details",

desc:"Share your live location and ride details with trusted family members.",

},

{

icon:<ShieldCheck className="w-8 h-8"/>,

title:"Safe Pickup Points",

desc:"Always choose well-lit public locations for pickup and drop-off.",

},

{

icon:<PhoneCall className="w-8 h-8"/>,

title:"Emergency Contact",

desc:"Keep your emergency contacts active while travelling.",

},

{

icon:<AlertTriangle className="w-8 h-8"/>,

title:"Report Suspicious Activity",

desc:"Immediately report unsafe behaviour or suspicious activity.",

},

];

const emergency = [

{

name:"National Emergency",

number:"112",

},

{

name:"Police",

number:"100",

},

{

name:"Ambulance",

number:"108",

},

{

name:"Women Helpline",

number:"1091",

},

{

name:"Fire Brigade",

number:"101",

},

];

return (

<main className="relative overflow-hidden min-h-screen bg-[#050816] pt-40 pb-24">

{/* Glow */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20"/>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[180px] opacity-20"/>

<div className="relative max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center">

<span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold">

🛡 RideSphere Safety Center

</span>

<h1 className="mt-8 text-5xl md:text-7xl font-black text-white">

Travel

<span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

{" "}Safely

</span>

</h1>

<p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">

At RideSphere, passenger and driver safety is our highest priority. Every journey is designed to be secure, transparent and reliable.

</p>

</div>

{/* Safety Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

{safetyPoints.map((item,index)=>(

<div

key={index}

className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8"

>

<div className="text-cyan-400">

{item.icon}

</div>

<h3 className="mt-6 text-3xl font-black text-white">

{item.title}

</h3>

<p className="mt-5 text-slate-400 leading-8">

{item.desc}

</p>

</div>

))}

</div>

{/* SOS Section */}

<div className="mt-24">

<div className="text-center">

<h2 className="text-5xl font-black text-white flex justify-center items-center gap-4">

<Siren className="text-red-500"/>

SOS Emergency Numbers

</h2>

</div>

<div className="grid md:grid-cols-3 gap-8 mt-12">

{emergency.map((item,index)=>(

<div

key={index}

className="bg-red-500/10 border border-red-500/20 rounded-[32px] p-8 text-center"

>

<h3 className="text-3xl font-black text-white">

{item.number}

</h3>

<p className="mt-4 text-slate-300">

{item.name}

</p>

<a

href={`tel:${item.number}`}

className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold"

>

Call Now

</a>

</div>

))}

</div>

</div>

{/* Company Info */}

<div className="mt-24 bg-white/5 border border-white/10 rounded-[40px] p-10">

<h2 className="text-4xl font-black text-white">

About RideSphere

</h2>

<p className="mt-6 text-slate-400 leading-9">

RideSphere by Budgetree is an advanced mobility platform built to connect passengers and drivers across India through secure and verified journeys.

Our mission is to create a trusted travel ecosystem using KYC authentication, real-time safety tools and intelligent ride management systems.

</p>

<div className="mt-10 flex flex-wrap gap-4">

<span className="px-5 py-3 rounded-full bg-purple-500/20 text-purple-300">

✓ KYC Verified

</span>

<span className="px-5 py-3 rounded-full bg-blue-500/20 text-blue-300">

✓ Secure Payments

</span>

<span className="px-5 py-3 rounded-full bg-green-500/20 text-green-300">

✓ 24×7 Support

</span>

<span className="px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300">

✓ Live Tracking

</span>

</div>

</div>

</div>

</main>

);

}

