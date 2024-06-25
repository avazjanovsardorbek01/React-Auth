import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Link,
  Typography,
  Container,
} from "@mui/material";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 1,
          p: 6,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontSize: 30, mb: 2 }}>
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{ mt: 2, width: "100%" }}
        >
          <TextField
            type="email"
            required
            fullWidth
            id="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            value={email}
            placeholder="email"
            name="email"
            margin="normal"
          />
          <TextField
            type="password"
            required
            id="password"
            label="Password"
            fullWidth
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Link href="/sign-up" sx={{ textDecoration: "none" }}>
              Register
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                p: 1.5,
                fontSize: 16,
                bgcolor: "#0d47a1",
                ":hover": {
                  bgcolor: "#083b82",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Forgot your password?
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
