import Head from "next/head";
import { useEffect } from "react";
import EasybankGoals from "../components/easybank/EasybankGoals";
import EasybankHero from "../components/easybank/EasybankHero";
import EasybankLessons from "../components/easybank/EasybankLessons";
import EasybankOtherProjects from "../components/easybank/EasybankOtherProjects";
import EasybankSpotlight from "../components/easybank/EasybankSpotlight";
import EasybankWebStack from "../components/easybank/EasybankWebStack";
import SectionComingSoon from "../components/SectionComingSoon";
import SectionContact from "../components/SectionContact";

const Easybank = () => {
  // if (typeof window !== "undefined") {
  //   // your code with access to window or document object here
  //   }
  // To give this page it's unique colours
  useEffect(() => {
    document.body.classList.add("easybank-colors");
    document.body.classList.remove("bargaintravels-colors");
    document.body.classList.remove("animestudio-colors");
  });
  return (
    <>
      <Head>
        <title>DG | Easybank Details</title>
        <meta
          name="description"
          content="Here is where you can find more information about the Easybank landing page."
        />
      </Head>
      <main>
        <EasybankHero />

        <EasybankGoals />

        <EasybankWebStack />

        <EasybankSpotlight />

        <EasybankLessons />

        <EasybankOtherProjects />

        <SectionComingSoon />

        <SectionContact />
      </main>
    </>
  );
};

export default Easybank;
