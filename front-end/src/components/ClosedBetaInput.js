import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";

const ClosedBetaInput = () => {
  const [email, setEmail] = useState("");
  const ref = collection(firestore, "emails");

  const handleClick = () => {
    const data = {
      email: email,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
    setEmail("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    // <div>
    //   <form onSubmit={handleSave}>
    //     <label>Enter Message</label>
    //     <input type="text" ref={messageRef} />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
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
