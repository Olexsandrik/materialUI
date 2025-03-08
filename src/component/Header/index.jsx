import { Box, Typography, IconButton, colors } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Loupe from "@mui/icons-material/Loupe";

import Profile from "../../assets/Profile.png";
export const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("./../public/api/users.json")
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.log("Error:", e));
  }, []);
  console.log(user);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <div>
          <Typography variant="h2" sx={{ fontFamily: "monospace" }}>
            Instagram
          </Typography>
        </div>
        <div>
          <IconButton sx={{ fontSize: "50px" }}>
            <FavoriteBorder sx={{ fontSize: "50px" }} />
          </IconButton>

          <IconButton>
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              sx={{ fontSize: "50px" }}
            />
          </IconButton>
        </div>
      </Box>

      <div
        style={{
          textAlign: "center",
          margin: "10px",
          position: "relative",
        }}
      >
        <img
          src={Profile}
          alt="Profile"
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />

        <Loupe
          sx={{
            position: "absolute",
            bottom: "30px",
            right: "0px",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
      </div>
      <Typography variant="h2" sx={{ fontFamily: "monospace" }}>
        Instagram
      </Typography>
    </>
  );
};
