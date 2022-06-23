import React from "react";
import { Button } from "@mui/material";

const AddPCButton = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Button
      color="info"
      variant="contained"
      sx={{
        width: "20%",
        marginTop: 3,
      }}
      type="submit"
    >
      ADD PC
    </Button>
  </div>
);

export default AddPCButton;
