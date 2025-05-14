import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar_Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141B4D] shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <Image src="/images/logo_white.png" alt="t4s Logo" width={100} height={60} />
          <h1 className="text-white font-bold text-lg whitespace-nowrap">
            technology for solutions
          </h1>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex space-x-6 items-center text-white text-base">
          {[
            ["/#services", "Home"],
            ["/#contact", "Kontakt"],
          ].map(([href, label]) => (
            <li key={label}>
              <Link href={href}>
                <span className="inline-block bg-blue-cyan text-blue-dark px-4 py-1.5 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center bg-[#141B4D] text-white py-4 space-y-3 text-base">
          {[
            ["/#services", "Home"],
            ["/#contact", "Kontakt"],
          ].map(([href, label]) => (
            <li key={label} className="w-full px-4">
              <Link href={href} onClick={() => setIsOpen(false)}>
                <span className="block w-full text-center bg-blue-cyan text-blue-dark px-4 py-2 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar_Services;
