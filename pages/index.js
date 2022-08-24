import Head from "next/head";
import styles from "../styles/components/Home.module.scss";

// Components
import SectionHero from "../components/SectionHero";
import SectionAbout from "../components/SectionAbout";
import SectionWork from "../components/SectionWork";
import SectionComingSoon from "../components/SectionComingSoon";
import SectionContact from "../components/SectionContact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.remove("easybank-colors");
    document.body.classList.remove("bargaintravels-colors");
    document.body.classList.remove("animestudio-colors");
  }, []);

  return (
    <>
      <Head>
        <title>DylanGangat | Home</title>
        <meta
          name="description"
          content="Hi, I'm Dylan a Frontend Developer and I welcome you to my home page where I introduce myself, show what skills I have to offer and showcase my projects."
        />
      </Head>

      <main>
        <SectionHero />

        <SectionAbout />

        <SectionWork />

        <SectionComingSoon />

        <SectionContact />
      </main>
    </>
  );
}
