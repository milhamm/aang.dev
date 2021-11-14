import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
