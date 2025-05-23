import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import BusinessCases from "../components/BusinessCases";
import TechApproach from "../components/TechApproach";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className="wrapper">
      <Head>
        <title>t4s technology for solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Your website description here." />
      </Head>
      
      {/* Background Image */}
      <div className="bg" />    
      
      {/* Navbar Section */}
      <Navbar />

      {/* Spacer to push content below the navbar */}
      <div className="navbar-spacer" />

      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <section id="intro">
        <Intro />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Business Cases */}
      <section id="business-cases">
        <BusinessCases />
      </section>

      {/* Technology Approach */}
      <section id="tech-approach">
        <TechApproach />
      </section>

      {/* About us Section */}
      <section id="about-us">
        <AboutUs />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>


      {/* Footer Section */}
      <footer id="footer">
        <Footer />
      </footer>
      

    </div>
  );
}
