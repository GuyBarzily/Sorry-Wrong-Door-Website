import "./App.css";
import LayOutContainer from "./containers/LayOutContainer";
import MainSection from "./sections/MainSection";
import AboutUsSection from "./sections/AboutUsSection";
import SocialSection from "./sections/SocialSection";
import ClosedBetaSection from "./sections/ClosedBetaSection";
import GallerySection from "./sections/GallerySection";

function App() {
  return (
    <div className="App">
      <LayOutContainer />
      <MainSection />
      <AboutUsSection />
      <SocialSection />
      <ClosedBetaSection />
      <GallerySection />
    </div>
  );
}

export default App;
