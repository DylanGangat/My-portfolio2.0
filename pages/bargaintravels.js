import Head from "next/head";
import BargaintravelsHero from "../components/Bargaintravels/bargaintravelsHero";
import BargaintravelsGoals from "../components/Bargaintravels/bargaintravelsGoals";
import BargaintravelsWebStack from "../components/bargaintravels/BargaintravelsWebStack";
import BargaintravelsSpotlight from "../components/bargaintravels/BargaintravelsSpotlight";
import BargaintravelsLessons from "../components/bargaintravels/BargaintravelsLessons";
import BargaintravelsOtherProjects from "../components/bargaintravels/BargaintravelsOtherProjects";

import SectionComingSoon from "../components/SectionComingSoon";
import SectionContact from "../components/SectionContact";

export default function bargaintravels() {
  return (
    <>
      <Head>
        <title>DG | BargainTravels Details </title>
        <meta
          name="description"
          content="Here is where you can find more information about the BargainTravels website."
        />
      </Head>
      <main>
        <BargaintravelsHero />

        <BargaintravelsGoals />

        <BargaintravelsWebStack />

        <BargaintravelsSpotlight />

        <BargaintravelsLessons />

        <BargaintravelsOtherProjects />

        <SectionComingSoon />

        <SectionContact />
      </main>
    </>
  );
}
