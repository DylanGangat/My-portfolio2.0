import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

import { useEffect, useRef } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute("id", "top-of-site");
    document.documentElement.setAttribute("data-color-mode", "light");

    // Checks to see if you previously have been on the site which mode where you on by being saved to localstorage or if your system default has a mode preferrance.
    if (
      localStorage.getItem("data-color-mode") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("data-color-mode"))
    ) {
      document.documentElement.setAttribute("data-color-mode", "dark");
    }
  }, []);

  const toggleColorMode = e => {
    console.log(e.currentTarget);

    if (e.currentTarget.classList.contains("light-hidden")) {
      document.documentElement.setAttribute("data-color-mode", "light");
      localStorage.setItem("data-color-mode", "light");
    } else {
      document.documentElement.setAttribute("data-color-mode", "dark");
      localStorage.setItem("data-color-mode", "dark");
    }
  };

  return (
    <>
      <Head>
        {/* <!-- Favicon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar toggleColorMode={toggleColorMode}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
