import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const ClosedBetaInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const ref = collection(firestore, "emails");

  function isValidEmail() {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleClick = () => {
    if (isValidEmail()) {
      const data = {
        email: email.toString(),
      };

      try {
        addDoc(ref, data);
      } catch (e) {
        console.log(e);
      }
      setEmail("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleChange = (event) => {
    setError(false);
    setEmail(event.target.value);
  };

  return (
    <div>
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
      {error && (
        <Alert sx={{ width: "10vw", marginLeft: "20vw" }} severity="error">
          Invalid Email
        </Alert>
      )}
      {success && (
        <Alert sx={{ width: "15vw", marginLeft: "15vw" }} severity="success">
          Thank you for signing up for our BETA
        </Alert>
      )}
    </div>
  );
};
export default ClosedBetaInput;
