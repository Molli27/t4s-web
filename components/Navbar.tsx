import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // optional: install lucide-react icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    const offset = 100;

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
    setIsOpen(false); // close menu on click
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141B4D] shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <Image src="/images/logo_white.png" alt="t4s Logo" width={100} height={60} />
          <h1 className="text-white font-bold text-lg">technology for solutions</h1>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden sm:flex space-x-6 items-center text-white text-base">
          {[
            ["services", "Leistungen"],
            ["business-cases", "Anwendungen"],
            ["tech-approach", "Technologie"],
            ["contact", "Kontakt"],
            ["about-us", "Über uns"],
          ].map(([id, label]) => (
            <li key={id}>
              <button onClick={() => handleScroll(id)} className="hover:text-[#009FDF] transition">
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center bg-[#141B4D] text-white pb-4 space-y-4 text-base">
          {[
            ["services", "Leistungen"],
            ["business-cases", "Anwendungen"],
            ["tech-approach", "Technologie"],
            ["contact", "Kontakt"],
            ["about-us", "Über uns"],
          ].map(([id, label]) => (
            <li key={id}>
              <button onClick={() => handleScroll(id)} className="hover:text-[#009FDF] transition">
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};


export default Navbar;
