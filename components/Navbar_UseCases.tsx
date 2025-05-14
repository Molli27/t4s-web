import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar_Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#141B4D] shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 space-y-2 sm:space-y-0">
        
        {/* Top: Logo + Title */}
        <div className="flex items-center justify-between sm:justify-start sm:space-x-4 w-full">
          <div className="flex items-center space-x-4 overflow-hidden">
            <Image src="/images/logo_white.png" alt="t4s Logo" width={100} height={60} />
            <h1 className="text-white font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
              technology for solutions
            </h1>
          </div>

          {/* Toggle Button on Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
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

        {/* Mobile Nav Dropdown (below logo/title) */}
        {isOpen && (
          <ul className="sm:hidden flex flex-col items-end w-full text-white pt-2 space-y-2 text-base">
            {[
              ["/#services", "Home"],
              ["/#contact", "Kontakt xx"],
            ].map(([href, label]) => (
              <li key={label} className="w-full">
                <Link href={href} onClick={() => setIsOpen(false)}>
                  <span className="block w-full text-right bg-blue-cyan text-blue-dark px-4 py-2 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar_Services;
// This component is a responsive navigation bar for a website. It includes a logo, title, and navigation links.