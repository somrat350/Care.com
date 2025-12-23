import AboutMission from "@/components/public/home/AboutMission";
import ServicesOverview from "@/components/public/home/ServicesOverview";
import Slider from "@/components/public/home/Slider";
import TestimonialsStats from "@/components/public/home/TestimonialsStats";

export const metadata = {
  title: "Care.com | Home",
  description: "Book trusted caregivers for babies, elders, and sick people.",
  openGraph: {
    title: "Care.com | Home",
    description: "Book trusted caregivers for babies, elders, and sick people.",
    url: "https://localhost:3000",
    siteName: "Care.com",
    images: [
      {
        url: "/og-home.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
