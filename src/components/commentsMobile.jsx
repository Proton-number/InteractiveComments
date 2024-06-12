import {
  Box,
  Paper,
  Stack,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import amyrobson from "../images/avatars/image-amyrobson.png";
import maxblagun from "../images/avatars/image-maxblagun.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";

const comments = [
  {
    avatar: amyrobson,
    name: "amyrobson",
    time: "1 month ago",
    text: "Impresslve! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various break oints works reall well.",
  },
  {
    avatar: maxblagun,
    name: "maxblagun",
    time: "2 weeks ago",
    text: "Woah, your project looks awesome! How long have been coding for? I'm still new, but think i want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks! ",
  },
];

function CommentsMobile({ counters, setCounters }) {
  return (
    <>
      {comments.map((comment, index) => (
        <Stack key={index} sx={{ marginBottom: 5 }} id="mobile-Comments">
          <Paper elevation={10}>
            <Stack sx={{ padding: "15px" }} spacing={1}>
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={1.4}
              >
                <Avatar src={comment.avatar} />
                <Typography>
                  <b>{comment.name}</b>
                </Typography>
                <Typography>{comment.time}</Typography>
              </Stack>
              <Box
                width="300px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "6px",
                }}
              >
                <Typography sx={{ textAlign: "justify" }}>
                  {comment.text}
                </Typography>
              </Box>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Stack
                  direction
                  sx={{
                    alignItems: "center",
                    backgroundColor: "hsl(225, 55%, 97%)",
                    borderRadius: "15px",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setCounters((prevCounters) => ({
                        ...prevCounters,
                        [comment.name]: prevCounters[comment.name] + 1,
                      }));
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                  <Typography>{counters[comment.name]}</Typography>
                  <IconButton
                    onClick={() => {
                      setCounters((prevCounters) => ({
                        ...prevCounters,
                        [comment.name]: Math.max(
                          0,
                          prevCounters[comment.name] - 1
                        ),
                      }));
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <IconButton>
                    <ReplyIcon sx={{ color: "hsl(238, 37%, 49%)" }} />
                  </IconButton>
                  <Typography
                    sx={{ color: "hsl(238, 37%, 49%)", fontWeight: 700 }}
                  >
                    Reply
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      ))}
    </>
  );
}

export default CommentsMobile;
