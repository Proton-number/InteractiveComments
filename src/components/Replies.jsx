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
  counters,
  setCounters,
  replies,
  setReplies,
  replyValue,
  setReplyValue,
}) {
  const replyHandler = () => {
    const timestamp = new Date().toISOString();
    const newItem = {
      text: replyValue,
      likes: 0,
      timestamp: timestamp,
    };
    setReplies([...replies, newItem]);
    setReplyValue("");
  };

  const deleteHandler = (index) => {
    const newData = [...replies];
    newData.splice(index, 1);
    setReplies(newData);
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

      <Stack>
        {replies.map((reply, index) => (
          <Paper sx={{ marginBottom: 2, padding: "10px" }} key={index}>
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
                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton>
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
                    <Typography>{/* {timeAgo(zzz.timestamp)} */}</Typography>
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
                    <Button startIcon={<EditIcon />}>
                      <b>Edit</b>
                    </Button>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    maxWidth: "600px",
                  }}
                >
                  <Typography>{reply.text}</Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        ))}

        <Paper sx={{ padding: "28px" }} elevation={10}>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <Avatar src={juliusomo} />
            <TextField
              multiline
              rows={4}
              sx={{ flexGrow: 1 }}
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
