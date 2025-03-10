import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Import Fonts //
import "@/styles/globals.css"; // Keep the CSS import
import { Montserrat } from "next/font/google";

// Load Montserrat from Google Fonts
const montserrat = Montserrat({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
