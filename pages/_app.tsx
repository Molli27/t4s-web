import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Import Fonts
import { Montserrat } from "next/font/google";

// Load Montserrat from Google Fonts
const montserrat = Montserrat({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
// This is the main entry point for the Next.js application.
// It imports global styles and the Montserrat font from Google Fonts.