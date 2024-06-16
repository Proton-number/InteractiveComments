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

function RepliesMobile({
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
      sx={{ justifyContent: "space-evenly" }}
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

      <Stack id="mobile">
        {(replies[index] || []).map((reply, replyIndex) => (
          <Paper
            elevation={10}
            sx={{ marginBottom: 2, width: "316px" }}
            key={replyIndex}
          >
            <Stack sx={{ padding: "15px" }} spacing={1}>
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={1.4}
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
                <Typography>{timeAgo(reply.timestamp)}</Typography>
              </Stack>
              <Box
                width="300px"
                sx={{
                  display: "flex",
                  padding: "6px",
                }}
              >
                {editComment && editComment.replyIndex === replyIndex ? (
                  <TextField
                    multiline
                    rows={4}
                    sx={{ width: "91%" }}
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
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Stack
                  direction
                  sx={{
                    alignItems: "center",
                    backgroundColor: "hsl(225, 55%, 97%)",
                    borderRadius: "15px",
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
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
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
            </Stack>
          </Paper>
        ))}

        <Paper
          sx={{ padding: "18px", width: "280px" }}
          elevation={10}
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
          <Stack spacing={3}>
            <TextField
              multiline
              rows={4}
              placeholder={`@${replyTo}`}
              value={replyValue}
              onChange={(e) => setReplyValue(e.target.value)}
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
                onClick={replyHandler}
              >
                <b>Reply</b>
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}

export default RepliesMobile;
