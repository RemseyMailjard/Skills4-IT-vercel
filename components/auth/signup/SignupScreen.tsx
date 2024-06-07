"use client";
import {
  CustomInput,
  CustomLink,
  CustomLoadingButton,
  CustomPasswordInput,
} from "@/components/common";
import { Box, Typography } from "@mui/material";
import React from "react";
import SignupForm from "./SignupForm";
import "./SignUpScreen.css";
import Image from "next/image";
import IndexLayoutHeader from "@/components/layout/index/IndexLayoutHeader";
export default function SignupScreen() {
  return (
    <Box className="signup-screen ">
      <Box className="signup-container">
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontWeight="bold" variant="h4">
            SIGN UP - Skill4-IT
          </Typography>
          <SignupForm />
        </Box>
      </Box>
    </Box>
  );
}
