"use client";

import { useState } from "react";
import { createParent } from "@/app/service/student.service";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";

export default function ParentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!name || !phone) {
      setError("Please fill in required fields");
      return;
    }

    try {
      await createParent({ name, phone, email });
      setSuccess("Parent created successfully!");
      setName("");
      setPhone("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Failed to create parent");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Create Parent
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Create Parent
      </Button>
    </Box>
  );
}
