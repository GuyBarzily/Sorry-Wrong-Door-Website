import Title from "../components/Title";
import GalleryData from "../components/GalleryData";

const GallerySection = () => {
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
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage: "url(images/GameLogo.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10vw",
        }}
      >
        <Title props={galleryTitle} />
      </div>
      <GalleryData />
    </div>
  );
};

export default GallerySection;
