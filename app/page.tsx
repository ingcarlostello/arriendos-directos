import HeroSection from "./components/HeroSection";
import PropertiesList from "./components/PropertiesList";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PropertiesList />
    </div>
  );
}
