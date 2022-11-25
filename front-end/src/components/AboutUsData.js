const AboutUsData = () => {
  const content = `Angel Game Studio is an indie games studio that works ti give players the
          best experience.  `;
  const content1 = `We are worikking on "Sorry, wrong door".
            Sorry, wrong door is procedurally generated horror game where you get stuck in a haunted mansion        
            `;
  const content2 = `Play with your friends in an online co-op, Explore the enviroment, Fight for your life and escape at any cost.`;

  return (
    <div style={{ width: "50vw" }}>
      <p style={{ fontSize: "1.5vw", color: "white", textAlign: "left" }}>
        {content}
      </p>
      <p style={{ fontSize: "1.5vw", color: "white", textAlign: "left" }}>
        {content1}
      </p>
      <p style={{ fontSize: "1.5vw", color: "white", textAlign: "left" }}>
        {content2}
      </p>
    </div>
  );
};
export default AboutUsData;
