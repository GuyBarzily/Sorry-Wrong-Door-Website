import MainSection from "./sections/MainSection";
import AboutUsSection from "./sections/AboutUsSection";
import SocialSection from "./sections/SocialSection";
import ClosedBetaSection from "./sections/ClosedBetaSection";
import GallerySection from "./sections/GallerySection";
import MobileAppBar from "./components/MobileAppBar";

function App() {
  return (
    <div>
      <MobileAppBar />
      <MainSection />
      <AboutUsSection />
      <SocialSection />
      <ClosedBetaSection />
      <GallerySection />
    </div>
  );
}

export default App;
