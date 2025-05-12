const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="intro-section bg-center md:bg-top bg-cover relative text-white overflow-hidden"
    >

      {/* Background image */}
    <div
      className="absolute inset-0 bg-center bg-cover bg-zoom-animated scale-110 z-0"
      style={{
        backgroundImage: "url('/images/shutterstock_2425623081_red2.png')",
      }}
    />

    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black bg-opacity-15 z-0" />

    <div className="relative z-10 flex flex-col items-center justify-end text-center px-4 sm:px-6 pt-[30vh] sm:pt-[35vh] pb-16 sm:pb-24 min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg leading-tight">
      KI verändert die Industrie 
      </h1>
      <p className="text-base sm:text-lg md:text-2xl font-medium mb-3 sm:mb-4 text-shadow-sm max-w-xl sm:max-w-2xl">
      Unsere Systeme begleiten Fertigungsunternehmen auf dem Weg zur smarten Produktion
      </p>
      <p className="text-sm sm:text-md md:text-xl text-shadow-sm max-w-md sm:max-w-xl">
        effizient - skalierbar - zukunftssicher
      </p>
      </div>
    </section>
  );
};

export default Intro;
