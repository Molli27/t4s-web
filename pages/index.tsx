import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Value from "../components/Value";
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

{/* SEO optimisation */}
<Head>
  <title>t4s – Technology for Solutions</title>
  <meta name="description" content="Intelligente Produktionsüberwachung für KMU" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>


export default function HomePage() {
  return (
    <div className="wrapper">
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

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Value */}
      <section id="value">
        <Value />
      </section>

      {/* Business Cases */}
      <section id="business-cases">
        <BusinessCases />
      </section>

      {/* Technology Approach */}
      <section id="tech-approach">
        <TechApproach />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* About us Section */}
      <section id="about-us">
        <AboutUs />
      </section>

      {/* Footer Section */}
      <footer id="footer">
        <Footer />
      </footer>
      

    </div>
  );
}
