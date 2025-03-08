import { Box, Typography, IconButton, colors } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Loupe from "@mui/icons-material/Loupe";

import Profile from "../../assets/Profile.png";
import { getUser } from "../../utils/getUser";
export const Header = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getUser();
        setUser(res);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop
        }}
      ></div> */}
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
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          marginTop: "5px",
        }}
      >
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
            style={{
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
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
          <Typography fontWeight="bold">Your Profile</Typography>
        </div>
        {user?.map((item) => {
          return (
            <div key={item.id} style={{ textAlign: "center", margin: "10px" }}>
              <img
                src={item.avatar}
                alt={item.name}
                style={{
                  borderRadius: "50%",
                  border: "3px solid red",
                  width: "100px",
                  height: "100px",
                }}
              />

              <Typography fontWeight="bold">{item.name}</Typography>
            </div>
          );
        })}
      </div>
    </>
  );
};
