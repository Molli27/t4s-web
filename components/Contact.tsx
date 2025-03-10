import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className= "contact">
      <h1>Kontakt</h1>
      <div className="contact-container">
        
        <div className="contact-Details">
          <h2>Sie finden uns hier</h2>
          <div className= "contact-info">
            <p>technology for solution</p>
            <p>Hofstrasse 41</p>
            <p>4127 Birsfelden</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
