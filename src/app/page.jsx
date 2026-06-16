import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FindRide from "@/components/FindRide";
import DriverHiring from "@/components/DriverHiring";
import PopularRoutes from "@/components/PopularRoutes";
import Safety from "@/components/Safety";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816]">

      <Navbar />

      <main>

        <Hero />

        <div className="relative">

          {/* Purple Glow */}

          <div className="absolute top-40 left-0 w-96 h-96 bg-purple-700 rounded-full blur-[180px] opacity-10" />

          {/* Blue Glow */}

          <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-700 rounded-full blur-[180px] opacity-10" />

          <div className="relative z-10">

            <FindRide />

            <DriverHiring />

            <PopularRoutes />

            <Safety />

            <DownloadApp />

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}



