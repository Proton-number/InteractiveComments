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
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function CommentBox({
  juliuLikes,
  setJulioLikes,
  data,
  setData,
  inputValue,
  setInputValue,
}) {
  const sendComment = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      input: inputValue,
    };
    setData([...data, newItem]);
  };

  return (
    <>
      {/* COMMENTS */}

      {data.map((text) => (
        <Paper elevation={10} sx={{ marginBottom: 3 }} key={text.id}>
          <Stack direction="row" sx={{ alignItems: "center", padding: "20px" }}>
            <Stack
              sx={{
                alignItems: "center",
                backgroundColor: "hsl(225, 55%, 97%)",
                borderRadius: "15px",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  setJulioLikes((prevJulioLikes) => prevJulioLikes + 1);
                }}
              >
                <AddIcon />
              </IconButton>
              <Typography>{juliuLikes}</Typography>
              <IconButton
                onClick={() => {
                  setJulioLikes((prevJulioLikes) =>
                    Math.max(0, prevJulioLikes - 1)
                  );
                }}
              >
                <RemoveIcon />
              </IconButton>
            </Stack>
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
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
                  <Typography>2 days ago</Typography>
                </Stack>
                <Stack direction="row" spacing={4}>
                  <Button
                    startIcon={<DeleteIcon />}
                    sx={{ color: "hsl(357, 100%, 68%)", textTransform: "none" }}
                  >
                    <b>Delete</b>
                  </Button>
                  <Button
                    startIcon={<EditIcon />}
                    sx={{ color: "hsl(237, 36%, 52%)", textTransform: "none" }}
                  >
                    <b> Edit</b>
                  </Button>
                </Stack>
              </Box>
              <Box
                width="600px"
                sx={{
                  display: "flex",
                  padding: "15px",
                }}
              >
                <Typography sx={{ textAlign: "justify" }}>
                  {inputValue}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Paper>
      ))}

      <Paper sx={{ padding: "18px" }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <Avatar src={juliusomo} />
          <TextField
            multiline
            rows={4}
            sx={{ width: "450px" }}
            placeholder="Add a comment"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
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
      </Paper>
    </>
  );
}

export default CommentBox;
