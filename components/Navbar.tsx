import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    const offset = 100;

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Image src="/images/logo_white.png" alt="t4s Logo" width={120} height={80} />
        </div>
        <h1>technology for solutions</h1>
        <ul className="nav-links">
          {[
            
            ["services", "Leistungen"],
            ["business-cases", "Anwendungen"],
            ["tech-approach", "Technologie"],
            ["contact", "Kontakt"],
            ["about-us", "Über uns"]
          ].map(([id, label]) => (
            <li key={id}>
              <button onClick={() => handleScroll(id as string)}>{label}</button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
