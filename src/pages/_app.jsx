import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      await import("tw-elements");
    };
    use();
  }, []);

  return (
    <Component {...pageProps} />
  );
}
