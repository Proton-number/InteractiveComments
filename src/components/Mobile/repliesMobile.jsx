import { Paper, Stack, Avatar, Button, TextField, Box } from "@mui/material";
import React from "react";
import juliusomo from "/src/images/avatars/image-juliusomo.png";
import { motion } from "framer-motion";

function RepliesMobile({ replyTo }) {
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
      <Paper
        sx={{ padding: "18px", width: "78%" }}
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
          <TextField multiline rows={4} defaultValue={`@${replyTo}`} />
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
            >
              <b>Reply</b>
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default RepliesMobile;
