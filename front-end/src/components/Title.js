import Box from "@mui/material/Box";

const Title = (props) => {
  const mainDivStyle = {
    display: "flex",
  };
  return (
    <div style={mainDivStyle}>
      <p
        style={{
          fontSize: "6vw",
          color: "white",
          paddingRight: "1vw",
          fontFamily: "Times",
        }}
      >
        {props.props.first}
      </p>
      <p style={{ fontSize: "6vw", color: "red", fontFamily: "Times" }}>
        {props.props.second}
      </p>
    </div>
  );
};

export default Title;
