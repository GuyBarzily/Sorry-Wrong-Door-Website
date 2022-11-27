import GalleryAbout from "../components/GalaryAbout";
import GalleryVideos from "../components/GallaryVideos";
import Title from "../components/Title";

const GallerySection = () => {
  const galleryTitle = {
    first: "Video",
    second: "Gallery",
  };
  return (
    <div
      id="gallery-section-id"
      style={{
        backgroundImage: "url(images/GalleryBackground.jpeg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ paddingLeft: "20vw", paddingTop: "10vh" }}>
        <Title props={galleryTitle}></Title>
        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
};

export default GallerySection;
