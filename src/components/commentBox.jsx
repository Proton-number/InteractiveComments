import { Paper, Stack, Avatar, Button, TextField } from "@mui/material";
import React from "react";
import juliusomo from "/src/images/avatars/image-juliusomo.png";
import { motion } from "framer-motion";

function CommentBox() {
  return (
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
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "hsl(234, 38%, 49%)",
            "&:hover": {
              backgroundColor: "hsl(240, 71%, 45%)",
            },
          }}
        >
          <b>Send</b>
        </Button>
      </Stack>
    </Paper>
  );
}

export default CommentBox;
