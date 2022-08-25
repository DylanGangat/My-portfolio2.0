import Head from "next/head";
import { useEffect } from "react";
import AnimestudioGoals from "../components/animestudio/AnimestudioGoals";
import AnimestudioHero from "../components/animestudio/AnimestudioHero";
import AnimestudioLessons from "../components/animestudio/AnimestudioLessons";
import AnimestudioOtherProjects from "../components/animestudio/AnimestudioOtherProjects";
import AnimestudioSpotlight from "../components/animestudio/AnimestudioSpotlight";
import AnimestudioWebStack from "../components/animestudio/AnimestudioWebStack";
import SectionComingSoon from "../components/SectionComingSoon";
import SectionContact from "../components/SectionContact";

export default function Animestudio() {
  // To give this page it's unique colours

  useEffect(() => {
    document.body.classList.add("animestudio-colors");
    document.body.classList.remove("bargaintravels-colors");
    document.body.classList.remove("easybank-colors");
  });
  return (
    <>
      <Head>
        <title>DG | Animestudio+ Details</title>
        <meta
          name="description"
          content="Here is where you can find more information about the Animestudio+ website."
        />
      </Head>
      <main>
        <AnimestudioHero />

        <AnimestudioGoals />

        <AnimestudioWebStack />

        <AnimestudioSpotlight />

        <AnimestudioLessons />

        <AnimestudioOtherProjects />

        <SectionComingSoon />

        <SectionContact />
      </main>
    </>
  );
}
