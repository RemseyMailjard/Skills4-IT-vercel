"use client";
import React, { FormEvent, useState } from "react";

import { Alert, AlertProps, Box } from "@mui/material";
import {
  CustomInput,
  CustomLink,
  CustomLoadingButton,
  CustomPasswordInput,
} from "@/components/common";
import axiosInstance from "@/utils/api";
import { isGeneratorFunction } from "util/types";

const alertInitial = {
  enable: false,
  text: "",
  severity: "info",
};
export default function SignupForm() {
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
      confirm_password: formData.get("confirm_password"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      phone_num: formData.get("phone_num"),
    };
    if (data.password !== data.confirm_password) {
      setLoading(false);
      return setAlert({
        enable: true,
        text: "Password doesn't match",
        severity: "error",
      });
    }
    console.log(data);
    try {
      const response = await axiosInstance.post(
        "/users/register",
        JSON.stringify(data)
      );
      console.log(response);
      setAlert({
        enable: true,
        text: "Account has been registered",
        severity: "success",
      });
    } catch (error: any) {
      const data = error?.response?.data;
      setAlert({
        enable: true,
        severity: "error",
        text: data?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box className="signup-login">
        Already have an account?&nbsp;
        <CustomLink href="/login">Login</CustomLink>
      </Box>
      {alert.enable && (
        <Alert severity={alert.severity as AlertProps["severity"]}>
          {alert.text}
        </Alert>
      )}
      <CustomInput name="first_name" label="first name" type="text" required />
      <CustomInput name="last_name" label="last name" type="text" required />
      <CustomInput name="phone_num" label="Phone Num" type="number" required />
      <CustomInput name="email" label="Email" type="email" required />
      <CustomPasswordInput name="password" label="Password" required />
      <CustomPasswordInput
        name="confirm_password"
        label="Confirm Password"
        type="password"
        required
      />
      <CustomLoadingButton
        className="signup-button"
        type="submit"
        loading={loading}
      >
        Sign Up
      </CustomLoadingButton>
    </Box>
  );
}
