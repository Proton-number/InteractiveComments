import { Paper, Stack, Avatar, Button, TextField } from "@mui/material";
import React from "react";
import juliusomo from "/src/images/avatars/image-juliusomo.png";
import { motion } from "framer-motion";

function Replies({ replyTo }) {
  return (
    <Paper
      sx={{ padding: "18px" }}
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
      <Stack
        direction="row"
        sx={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        <Avatar src={juliusomo} />
        <TextField
          multiline
          rows={4}
          sx={{ width: "450px" }}
          defaultValue={`@${replyTo}`}
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
          <b>Reply</b>
        </Button>
      </Stack>
    </Paper>
  );
}

export default Replies;
