const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="intro-section bg-center md:bg-top bg-cover relative text-white overflow-hidden"
    >

    <div
      className="absolute inset-0 bg-center bg-cover bg-zoom-animated scale-110 z-0"
      style={{
        backgroundImage: "url('/images/shutterstock_2425623081_red2.png')",
      }}
    />

    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black bg-opacity-15 z-0" />

    <div className="relative z-10 flex flex-col items-center justify-end text-center px-6 pt-[40vh] pb-20 min-h-screen">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
      KI verändert die Industrie 
      </h1>
      <p className="text-lg md:text-3xl font-medium mb-4 text-shadow-sm max-w-2xl">
      Unsere Systeme begleiten Fertigungsunternehmen auf dem Weg zur smarten Produktion
      </p>
      <p className="text-md md:text-3xl text-shadow-sm max-w-xl">
        effizient - skalierbar - zukunftssicher
      </p>
      </div>
    </section>
  );
};

export default Intro;
