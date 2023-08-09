import OurTeam from "@/layouts/homepage/ourTeam/ourTeam";
import Landing from "@/layouts/homepage/landing/landing";
import TopOffers from "@/layouts/homepage/topOffers/topOffers";
import AboutUs from "@/layouts/homepage/aboutUs/aboutUs";


export default function Home() {
  return (
    <main>
      <Landing />
      <TopOffers />
      <AboutUs />
      <OurTeam />
    </main>
  )
}
