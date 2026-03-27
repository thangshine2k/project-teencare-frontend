'use client';

import { Stack, Typography, IconButton, Box, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StudentForm from "../components/students/StudentForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Stack spacing={4} alignItems="stretch">
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => router.back()} aria-label="Back">
            <ArrowBackIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="h1"
            textAlign="center"
            sx={{ flexGrow: 1 }}
          >
            Students
          </Typography>
        </Box>

        {/* Form */}
        <Box>
          <StudentForm />
        </Box>
      </Stack>
    </Container>
  );
}