import React from "react";
import LoginForm from "./LoginForm";
import { Box, Typography } from "@mui/material";
import "./LoginScreen.css";
import { CustomLink } from "@/components/common";
import Image from "next/image";
import { setCookie } from "cookies-next";
export default function LoginScreen() {
  return (
    <Box className="login-screen">
      <Box className="login-container">
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="50%"
        >
          <Typography fontWeight="bold" variant="h4">
            LOGIN - Skill4-IT
          </Typography>
          <LoginForm />
        </Box>
        <Image
          alt=""
          className="login-image"
          src="images/IT_courses.svg"
          width="400"
          height="400"
        />
      </Box>
    </Box>
  );
}
