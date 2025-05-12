import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // install with: npm install lucide-react

const Navbar_Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141B4D] shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <Image src="/images/logo_white.png" alt="t4s Logo" width={100} height={60} />
          <h1 className="text-white font-bold text-lg">technology for solutions</h1>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex space-x-6 items-center text-white text-base">
          <li>
            <Link href="/#services">
              <span className="inline-block bg-blue-cyan text-blue-dark px-4 py-1.5 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <span className="inline-block bg-blue-cyan text-blue-dark px-4 py-1.5 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                Kontakt
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center bg-[#141B4D] text-white pb-4 space-y-4 text-base">
          <li>
            <Link href="/#services" onClick={() => setIsOpen(false)}>
              <span className="inline-block bg-blue-cyan text-blue-dark px-4 py-1.5 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              <span className="inline-block bg-blue-cyan text-blue-dark px-4 py-1.5 rounded-md font-semibold hover:bg-blue-dark hover:text-white transition">
                Kontakt
              </span>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar_Services;
