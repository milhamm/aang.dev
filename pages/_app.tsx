import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";

import "../styles/global.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
export default MyApp;
