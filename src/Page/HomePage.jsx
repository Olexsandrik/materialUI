import React from "react";
import { Header } from "../component/Header";
import { Box } from "@mui/material";
import { BodyCom } from "../component/Body";
export const HomePage = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "auto" }}>
        {" "}
        <Header />
        <BodyCom />
      </Box>
    </>
  );
};
