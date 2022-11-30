import Title from "../components/Title";
import GalleryData from "../components/GalleryData";

const GallerySection = () => {
  const style = {};
  const galleryTitle = {
    first: "Press",
    second: "Kit",
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
      <div
        style={{
          paddingLeft: "70vw",
          paddingTop: "20vh",
          backgroundPosition: "center",
          backgroundImage: "url(images/GameLogo.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Title props={galleryTitle} />
      </div>
      <GalleryData />
    </div>
  );
};

export default GallerySection;
