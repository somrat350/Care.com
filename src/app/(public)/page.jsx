import AboutMission from "@/components/public/home/AboutMission";
import ServicesOverview from "@/components/public/home/ServicesOverview";
import Slider from "@/components/public/home/Slider";
import TestimonialsStats from "@/components/public/home/TestimonialsStats";

export default function Home() {
  return (
    <div>
      <Slider />
      <AboutMission />
      <ServicesOverview />
      <TestimonialsStats />
    </div>
  );
}
