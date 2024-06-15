import {
  Paper,
  Stack,
  Avatar,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import juliusomo from "/src/images/avatars/image-juliusomo.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { motion, AnimatePresence } from "framer-motion";

function CommentBoxMobile({
  data,
  setData,
  inputValue,
  setInputValue,
  editComment,
  setEditComment,
}) {
  const timeAgo = (timestamp) => {
    const now = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = now - commentTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago `;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hr" : "hrs"} ago `;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "min" : "mins"} ago `;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago `;
    }
  };

  const sendComment = () => {
    const timestamp = new Date().toISOString();
    const newItem = {
      text: inputValue,
      likes: 0,
      timestamp: timestamp,
    };
    setData([...data, newItem]);
    setInputValue("");
  };

  const deleteHandler = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const editHandler = (index) => {
    setEditComment({ index, text: data[index].text });
  };

  const updateHandler = (index) => {
    const newData = [...data];
    newData[index].text = editComment.text;
    setData(newData);
    setEditComment(null);
  };

  return (
    <Box id="mobile">
      <AnimatePresence>
        {data.map((comment, index) => (
          <Paper
            elevation={10}
            sx={{ marginBottom: 3, padding: "18px" }}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 12,
              x: -20,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Stack spacing={2}>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                }}
                spacing={3}
              >
                <Avatar src={juliusomo} />
                <Typography>
                  <b>juliusomo</b>
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "hsl(234, 38%, 49%)",
                    color: "white",
                    padding: "4px",
                  }}
                >
                  <Typography variant="subtitle2">
                    <b>you</b>
                  </Typography>
                </Box>
                <Typography> {timeAgo(comment.timestamp)}</Typography>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  padding: "15px",
                }}
              >
                {editComment && editComment.index === index ? (
                  <TextField
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                    value={editComment.text}
                    onChange={(e) =>
                      setEditComment({ ...editComment, text: e.target.value })
                    }
                  />
                ) : (
                  <Typography sx={{ textAlign: "justify" }}>
                    {comment.text}
                  </Typography>
                )}
              </Box>
              {editComment && editComment.index === index && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "15px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "hsl(234, 38%, 49%)",
                      "&:hover": {
                        backgroundColor: "hsl(240, 71%, 45%)",
                      },
                    }}
                    onClick={() => updateHandler(index)}
                  >
                    <b>Update</b>
                  </Button>
                </Box>
              )}

              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    backgroundColor: "hsl(225, 55%, 97%)",
                    borderRadius: "15px",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={() =>
                      setData((prevData) => {
                        const newData = [...prevData];
                        newData[index].likes++;
                        return newData;
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                  <Typography>{comment.likes ? comment.likes : 0}</Typography>
                  <IconButton
                    onClick={() =>
                      setData((prevData) => {
                        const newData = [...prevData];
                        newData[index].likes = Math.max(
                          0,
                          newData[index].likes - 1
                        );
                        return newData;
                      })
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button
                    onClick={() => deleteHandler(index)}
                    startIcon={<DeleteIcon />}
                    sx={{
                      color: "hsl(357, 100%, 68%)",
                      textTransform: "none",
                    }}
                  >
                    <b>Delete</b>
                  </Button>
                  <Button
                    onClick={() => editHandler(index)}
                    startIcon={<EditIcon />}
                    sx={{
                      color: "hsl(237, 36%, 52%)",
                      textTransform: "none",
                    }}
                  >
                    <b> Edit</b>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </AnimatePresence>

      <Paper sx={{ padding: "18px" }} id="mobile-commentBox">
        <Stack spacing={2}>
          <TextField
            multiline
            rows={4}
            placeholder="Add a comment"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Avatar src={juliusomo} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "hsl(234, 38%, 49%)",
                "&:hover": {
                  backgroundColor: "hsl(240, 71%, 45%)",
                },
              }}
              onClick={sendComment}
            >
              <b>Send</b>
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

export default CommentBoxMobile;
