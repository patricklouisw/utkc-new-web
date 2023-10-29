import { draftMode } from "next/headers";

import Hero from "@/components/Home/Hero";
import Summary from "@/components/Home/Summary";
import Benefits from "@/components/Home/Benefits";
import ScheduleLocation from "@/components/Home/ScheduleLocation";
// import FAQ from "@/components/Home/FAQ";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Benefits />
      <ScheduleLocation />
    </>
  );
};

export default HomePage;
