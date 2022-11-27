import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ClosedBetaInput = () => {
  const [email, setEmail] = React.useState("");
  const handleClick = () => {
    console.log(email);
    setEmail("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "inline-flex",
        marginTop: "2vh",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Email"
        value={email}
        onChange={handleChange}
        color="secondary"
        sx={{ backgroundColor: "white" }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{
          width: "30ch",
          marginTop: "1vh",
          backgroundColor: "wheat",
          color: "black",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "wheat",
          },
        }}
        onClick={handleClick}
      >
        Sign Up
      </Button>
    </Box>
  );
};
export default ClosedBetaInput;
