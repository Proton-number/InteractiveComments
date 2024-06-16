import {
  Paper,
  Stack,
  Avatar,
  Button,
  TextField,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import juliusomo from "/src/images/avatars/image-juliusomo.png";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Replies({
  replyTo,
  replies,
  setReplies,
  replyValue,
  setReplyValue,
  index,
  editComment,
  setEditComment,
  timeAgo,
}) {
  const replyHandler = () => {
    const timestamp = new Date().toISOString();
    const newItem = {
      text: replyValue,
      likes: 0,
      timestamp: timestamp,
    };
    setReplies((prevReplies) => {
      const newReplies = { ...prevReplies };
      if (!newReplies[index]) {
        newReplies[index] = [];
      }
      newReplies[index].push(newItem);
      return newReplies;
    });
    setReplyValue("");
  };

  const deleteHandler = (replyIndex) => {
    setReplies((prevReplies) => {
      const newReplies = { ...prevReplies };
      newReplies[index].splice(replyIndex, 1);
      return newReplies;
    });
  };
  const increaseLikes = (replyIndex) => {
    setReplies((prevReplies) => {
      const newReplies = { ...prevReplies };
      newReplies[index][replyIndex].likes += 1;
      return newReplies;
    });
  };

  const decreaseLikes = (replyIndex) => {
    setReplies((prevReplies) => {
      const newReplies = { ...prevReplies };
      newReplies[index][replyIndex].likes = Math.max(
        0,
        newReplies[index][replyIndex].likes - 1
      );
      return newReplies;
    });
  };

  const editHandler = (replyIndex) => {
    const editedComment = replies[index][replyIndex];
    setEditComment({ replyIndex, text: editedComment.text });
  };

  const updateHandler = (replyIndex) => {
    setReplies((prevReplies) => {
      const newReplies = { ...prevReplies };
      newReplies[index] = newReplies[index].map((reply, idx) =>
        idx === replyIndex ? { ...reply, text: editComment.text } : reply
      );
      return newReplies;
    });
    setEditComment(null);
  };

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-around" }}
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
      <Box
        sx={{
          height: "auto",
          border: "1px solid hsl(240, 6%, 94%)",
        }}
      />

      <Stack id="desktop">
        {(replies[index] || []).map((reply, replyIndex) => (
          <Paper sx={{ marginBottom: 2, padding: "10px" }} key={replyIndex}>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                width: "600px",
              }}
              spacing={4}
            >
              <Stack
                sx={{
                  backgroundColor: "hsl(225, 55%, 97%)",
                  borderRadius: "15px",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => increaseLikes(replyIndex)}>
                  <AddIcon />
                </IconButton>
                <Typography>{reply.likes}</Typography>
                <IconButton onClick={() => decreaseLikes(replyIndex)}>
                  <RemoveIcon />
                </IconButton>
              </Stack>
              <Stack sx={{ flexGrow: 1 }} spacing={1}>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "2px",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                  >
                    <Avatar src={juliusomo} />
                    <Typography>
                      {" "}
                      <b>juliusomo</b>
                    </Typography>
                    <Typography>{timeAgo(reply.timestamp)} </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Button
                      onClick={() => deleteHandler(replyIndex)}
                      startIcon={<DeleteIcon />}
                      sx={{
                        color: "hsl(357, 100%, 68%)",
                        textTransform: "none",
                      }}
                    >
                      <b>Delete</b>
                    </Button>
                    <Button
                      onClick={() => editHandler(replyIndex)}
                      startIcon={<EditIcon />}
                    >
                      <b>Edit</b>
                    </Button>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    maxWidth: "100%",
                    display: "flex",
                    padding: "15px",
                  }}
                >
                  {editComment && editComment.replyIndex === replyIndex ? (
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
                    <Typography>{reply.text}</Typography>
                  )}
                </Box>
                {editComment && editComment.replyIndex === replyIndex && (
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
                      onClick={() => updateHandler(replyIndex)}
                    >
                      <b>Update</b>
                    </Button>
                  </Box>
                )}
              </Stack>
            </Stack>
          </Paper>
        ))}

        <Paper sx={{ padding: "28px", maxWidth: "100%" }} elevation={10}>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <Avatar src={juliusomo} />
            <TextField
              multiline
              rows={4}
              sx={{ width: "450px" }}
              placeholder={`@${replyTo}`}
              value={replyValue}
              onChange={(e) => setReplyValue(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "hsl(234, 38%, 49%)",
                "&:hover": {
                  backgroundColor: "hsl(240, 71%, 45%)",
                },
              }}
              onClick={replyHandler}
            >
              <b>Reply</b>
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}

export default Replies;
