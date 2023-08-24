import OurTeam from "@/layouts/landing/ourTeam/ourTeam";
import Heading from "@/layouts/landing/heading/heading";
import TopOffers from "@/layouts/landing/topOffers/topOffers";
import AboutUs from "@/layouts/landing/aboutUs/aboutUs";
import References from "@/layouts/landing/references/references";

export default function Home() {
  return (
    <main>
      <Heading />
      <TopOffers />
      <AboutUs />
      <OurTeam />
      <References />
    </main>
  )
}
