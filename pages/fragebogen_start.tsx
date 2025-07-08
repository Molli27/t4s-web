import Link from "next/link";
import Head from "next/head";


export default function FragebogenStart() {
  return (
    <div className="wrapper">
      <div className="bg" />
    
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
            <Head>
              <title>Fragebogen – Sprachauswahl | t4s</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta charSet="UTF-8" />
              <meta name="description" content="Wählen Sie Ihre Sprache für den t4s-Fragebogen zur Produktionsüberwachung." />
            </Head>

            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#00249C]">
              Bitte wählen Sie Ihre Sprache
            </h1>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/fragebogen_de">
                <span className="px-8 py-3 bg-[#00249C] text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition">
                  Deutsch
                </span>
              </Link>
              <Link href="/fragebogen_fr">
                <span className="px-8 py-3 bg-[#00249C] text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition">
                  Français
                </span>
              </Link>
            </div>
          </div>
        </div>
      
    </div>
  );
}

