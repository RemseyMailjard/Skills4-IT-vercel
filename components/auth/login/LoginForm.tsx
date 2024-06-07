"use client";
import React, { FormEvent, useState } from "react";

import { Alert, AlertProps, Box, Snackbar } from "@mui/material";
import {
  CustomInput,
  CustomLink,
  CustomLoadingButton,
  CustomPasswordInput,
} from "@/components/common";
import axiosInstance from "@/utils/api";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
const alertInitial = {
  enable: false,
  text: "",
  severity: "info",
};
export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(alertInitial);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setAlert(alertInitial);
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const response = await axiosInstance.post(
        "/users/login",
        JSON.stringify(data)
      );
      console.log(response);
      setCookie("user-data", response)
      setAlert({
        enable: true,
        text: "Login successfull",
        severity: "success",
      });
    } catch (error: any) {
      const data = error?.response?.data;

      setAlert({
        enable: true,
        text: data?.message,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(alertInitial);
  };

  return (
    <Box component="form" onSubmit={onSubmit}>
      {alert.enable && (
        <Alert severity={alert.severity as AlertProps["severity"]}>
          {alert.text}
        </Alert>
      )}
      <Box className="login-signup">
        Already have an account?&nbsp;
        <CustomLink href="/signup">Signup</CustomLink>
      </Box>
      <CustomInput name="email" label="Email" type="email" required />
      <CustomPasswordInput name="password" label="Password" required />
      <Box className="forgot-password">
        <CustomLink>Forgot password?</CustomLink>
      </Box>
      <CustomLoadingButton
        className="login-button"
        type="submit"
        loading={loading}
      >
        LOGIN
      </CustomLoadingButton>
    </Box>
  );
}
