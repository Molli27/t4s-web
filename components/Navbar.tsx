// components/Navbar.js
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    const offset = 100; // Adjust this value to change the scroll position

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <nav className="logo-container">
        <Image src="/images/logo_white.png" alt="t4s Logo" width={150} height={100} />
      </nav>
      <div className="navbar-container">
        <h1>technology for solutions</h1>
        <ul className="nav-links">
          <li>
            <button onClick={() => handleScroll("about-us")}>Über uns</button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")}>Dienstleistung</button>
          </li>
          <li>
            <button onClick={() => handleScroll("business-cases")}>Anwendungen</button>
          </li>
          <li>
            <button onClick={() => handleScroll("tech-approach")}>Technologie</button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")}>Kontakt</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
