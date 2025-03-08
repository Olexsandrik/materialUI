import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  IconButton,
} from "@mui/material";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getUser } from "../../utils/getUser";

export const BodyCom = () => {
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
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="red">{error}</Typography>
      ) : user.length > 0 ? (
        user.map((item) => (
          <Card
            key={item.id}
            sx={{
              minWidth: "85%",
              height: "auto",
              boxShadow: 3,
              p: 5,
              backgroundColor: "#000",
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src={item.avatar} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography fontWeight="bold" color="white">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.location}
                </Typography>
              </Box>
            </Box>
            <CardMedia
              component="img"
              height="300"
              image={item.photo || item.avatar}
              alt={item.name}
              sx={{ borderRadius: "10px", mt: 2 }}
            />
            <CardContent>
              <Typography variant="body1" color="white">
                {item.bio}
              </Typography>
              <Typography variant="body2" color="gray">
                Підписники: {item.followers} | Стежить за: {item.following} |
                Публікації: {item.posts}
              </Typography>
            </CardContent>

            <Box display="flex" justifyContent="flex-start" padding="10px">
              <IconButton>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ fontSize: "24px", color: "white" }}
                />
                <Typography sx={{ margin: "10px" }}>
                  {item.followers}
                </Typography>
              </IconButton>
              <IconButton>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ fontSize: "24px", color: "white" }}
                />
                <Typography sx={{ margin: "10px" }}>{item.posts}</Typography>
              </IconButton>
              <IconButton>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ fontSize: "24px", color: "white" }}
                />
                <Typography sx={{ margin: "10px" }}>
                  {item.following}
                </Typography>
              </IconButton>
            </Box>
          </Card>
        ))
      ) : (
        <Typography color="white">Немає користувачів</Typography>
      )}
    </Box>
  );
};
