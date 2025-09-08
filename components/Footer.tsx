import Link from "next/link";


const Footer: React.FC = () => {
  
  return (
    <footer className="footer">
  <div className="footer-container">
    <p className="footer-legal">
      © 2025 t4s. Alle Rechte vorbehalten. 
      Diese Website dient ausschliesslich Informationszwecken und stellt keine rechtliche Beratung dar.
    </p>
    <p className="footer-legal">
  <a href="/privacy" className="footer-link">Datenschutzerklärung</a> ·{" "}
  <a href="/impressum" className="footer-link">Impressum</a>
</p>
  </div>
</footer>

  );
};

export default Footer;
