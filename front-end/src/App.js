import "./App.css";
import MainSection from "./sections/MainSection";
import AboutUsSection from "./sections/AboutUsSection";
import SocialSection from "./sections/SocialSection";
import ClosedBetaSection from "./sections/ClosedBetaSection";
import GallerySection from "./sections/GallerySection";
import BasicAppBar from "./components/AppBar";
import BlackSection from "./sections/BlackSection";

function App() {
  return (
    <div className="App">
      <BasicAppBar />
      <MainSection />
      <AboutUsSection />
      <SocialSection />
      <ClosedBetaSection />
      <GallerySection />
    </div>
  );
}

export default App;
