import { useEffect, useState } from "react";

const ClosedBetaData = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const content = `We are currently working on Sorry, wrong door - Closed Beta.
   Sign up now to get free access as soon as the beta releases. `;
  const pStyleDeskTop = {
    fontSize: "2vw",
    color: "wheat",
    textAlign: "left",
  };

  const pStyleMobile = {
    fontSize: "5vw",
    color: "wheat",
    textAlign: "left",
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <div style={{ width: "80vw" }}>
      {windowSize > 600 && <p style={pStyleDeskTop}>{content}</p>}
      {windowSize <= 600 && <p style={pStyleMobile}>{content}</p>}
    </div>
  );
};

export default ClosedBetaData;
