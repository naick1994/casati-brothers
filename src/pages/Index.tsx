import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import AthleteSection from "@/components/AthleteSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import lorenzoProfile from "@/assets/lorenzo-kota-trophy.jpg";
import leonardoProfile from "@/assets/mykonos-2026-champion.jpg";
// Import basati sul CONTENUTO REALE dei file
import sponsorHarlem from "@/assets/sponsor-ridesk.png";      // sponsor-ridesk.png contiene Harlem
import sponsorMobiMatter from "@/assets/sponsor-harlem.png";  // sponsor-harlem.png contiene MobiMatter
import sponsorRidesk from "@/assets/sponsor-mobimatter.png";  // sponsor-mobimatter.png contiene Ridesk
import sponsorMystic from "@/assets/sponsor-mystic.webp";
import sponsorSurfr from "@/assets/sponsor-surfr.webp";

// Lorenzo Casati Data
const lorenzoAchievements = [
  { title: "BIG AIR WORLD CHAMPION 2025", icon: "gold" as const },
  { title: "RED BULL KING OF THE AIR 2022, 2025 (2x Winner)", icon: "gold" as const },
  { title: "RED BULL MEGALOOP WINNER 2025", icon: "gold" as const },
  { title: "Best Rider of the Year 2024", icon: "gold" as const },
];

const lorenzoOtherAchievements = [
  "2nd Place Capital.com GKA Big Air World Cup Mykonos 2026",
  "3rd in the World GKA Big Air 2026",
  "2nd Place Red Bull King of the Air 2024",
  "Winner of Mystic's Move of the Day at Red Bull King Of The Air 2023",
  "Winner of Red Bull King Of The Air Qualifier 2024 Cold Hawaii",
  "Winner of Red Bull King Of The Air Qualifier 2024, 2025 Tarifa",
  "Big Air BAKL World Champion 2022",
  "Strapless Spanish Champion 2021 + 2022",
  "Wave Spanish Champion 2022",
  "2nd Place Cold Hawaii Games 2021 + 2022",
  "3rd in the World in Strapless Big Air 2022 GKA",
  "3rd in the World in Twintip Big Air 2023 GKA",
  "2nd Place GKA Hydrofoil World Cup in Sylt",
  "2nd Place GKA Strapless World Cup in Sylt",
  "2nd Place GKA Strapless World Cup Jericoacoara",
  "2nd Place GKA Twintip World Cup Jericoacoara",
  "3rd in the World in Strapless Big Air 2023 GKA",
  "2nd Place Lords of Tram GKA Twintip World Cup 2025",
  "First athlete to perform the Triple Loop",
];

const lorenzoSocials = {
  instagram: "https://www.instagram.com/lorenzo__casati",
  youtube: "https://www.youtube.com/@lorenzocasati1",
  tiktok: "https://www.tiktok.com/@lorenzo__casati",
};

const lorenzoBio = {
  birthDate: "November 25, 2005",
  birthPlace: "Como, Italy",
  basedIn: "Gran Canaria & Tarifa, Spain",
  quote: "Embrace the elements, follow your passions, unleash your full power.",
};

// Leonardo Casati Data
const leonardoAchievements = [
  { title: "GKA BIG AIR WORLD CHAMPION 2026", icon: "gold" as const },
  { title: "Winner Capital.com GKA Big Air World Cup Mykonos 2026", icon: "gold" as const },
  { title: "2nd Place RED BULL KING OF THE AIR 2025", icon: "silver" as const },
  { title: "3rd Place GKA Lords of Trams 2025", icon: "bronze" as const },
  { title: "4x Junior World Champion", icon: "gold" as const },
  { title: "3rd GKA Big Air Hydrofoil World Ranking", icon: "bronze" as const },
];

const leonardoOtherAchievements = [
  "Top 5 in the World",
  "BAKL Big Break Winner 2024",
  "Multiple Junior Podiums",
];

const leonardoSocials = {
  instagram: "https://www.instagram.com/casatileonardo",
  youtube: "https://www.youtube.com/channel/UCqWpcWZ7HObL7lRMVi-rkXg",
  tiktok: "https://www.tiktok.com/@leonardo_casati",
};

const leonardoBio = {
  birthDate: "June 10, 2009",
  birthPlace: "Como, Italy",
  basedIn: "Gran Canaria & Tarifa, Spain",
  quote: "Dream big, ride bigger.",
};

// Sponsors
// Sponsors - ORDINE DEFINITIVO
const sponsors = [
  // 1. Harlem
  { name: "Harlem", logo: sponsorHarlem, url: "https://harlemkitesurfing.com/" },
  // 2. Mystic
  { name: "Mystic", logo: sponsorMystic, url: "https://www.mysticboarding.com/" },
  // 3. Surfr
  { name: "Surfr", logo: sponsorSurfr, url: "https://www.thesurfr.app/" },
  // 4. MobiMatter
  { name: "MobiMatter", logo: sponsorMobiMatter, url: "https://mobimatter.com/it/?utm_source=casatibrothers&utm_medium=referral&utm_campaign=casatibrothers-partnership" },
  // 5. Ridesk
  { name: "Ridesk", logo: sponsorRidesk, url: "https://www.ridesk.app/" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <StorySection />
      
      <AthleteSection
        id="lorenzo"
        name="LORENZO CASATI"
        subtitle="World Champion"
        image={lorenzoProfile}
        achievements={lorenzoAchievements}
        otherAchievements={lorenzoOtherAchievements}
        socials={lorenzoSocials}
        bio={lorenzoBio}
      />
      
      <AthleteSection
        id="leonardo"
        name="LEONARDO CASATI"
        subtitle="Rising Legend"
        image={leonardoProfile}
        achievements={leonardoAchievements}
        otherAchievements={leonardoOtherAchievements}
        socials={leonardoSocials}
        bio={leonardoBio}
        reversed
      />
      
      <GallerySection />
      <SponsorsSection sponsors={sponsors} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
