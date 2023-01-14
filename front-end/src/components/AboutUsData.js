import { useEffect, useState } from "react";

const AboutUsData = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

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
  const content = `Angel Game Studio is an indie games studio that works ti give players the
          best experience.  `;
  const content1 = `We are working on "Sorry, wrong door".
            Sorry, wrong door is procedurally generated horror game where you get stuck in a haunted mansion        
            `;
  const content2 = `Play with your friends in an online co-op, Explore the enviroment, Fight for your life and escape at any cost.`;

  return (
    <div style={{ width: "80vw", top: 0 }}>
      {windowSize > 600 && (
        <>
          <p style={pStyleDeskTop}>{content}</p>
          <p style={pStyleDeskTop}>{content1}</p>
          <p style={pStyleDeskTop}>{content2}</p>
        </>
      )}
      {windowSize <= 600 && (
        <>
          <p style={pStyleMobile}>{content}</p>
          <p style={pStyleMobile}>{content1}</p>
          <p style={pStyleMobile}>{content2}</p>
        </>
      )}
    </div>
  );
};
export default AboutUsData;
