import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 lg:px-8 pb-16 mt-[100px]"
      style={{
        background: "linear-gradient(to bottom, #D7D2CB, #FFFFFF)",
      }}
    >
      <div className="max-w-2xl mx-auto space-y-8 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-dark">Kontakt</h1>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Sie finden uns hier</h2>
          <div className="space-y-1 text-justify">
            <p className="text-base">technology for solution</p>
            <p className="text-base">Hofstrasse 41</p>
            <p className="text-base">4127 Birsfelden</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
