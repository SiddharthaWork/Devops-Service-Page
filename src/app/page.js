import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Image from "next/image";
import End from "@/components/End";
import Things from "@/components/Things";
import Footer from "@/components/Footer";
import Benfits from "@/components/Benfits";
import Comprehensive from "@/components/Comprehensive";
import Choose from "@/components/Choose";
import Business from "@/components/Business";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero/>
      <Header/>
      <Contact/>
      <Process/>
      <Benfits/>
      <Comprehensive/>
      <Choose/>
      <Business/>
      <End/>
      <Things/>
      <Footer/>
    </div>
  );
}
 