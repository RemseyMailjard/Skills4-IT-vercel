"use client";
import { CustomNavLink } from "@/components/common";
import { Box, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import theme from "@/theme";
import AuthLayoutMain from "@/components/layout/auth/AuthLayout";

const metadata: Metadata = {
  title: "Skills4-IT",
  description: "Skills4-IT",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayoutMain>{children}</AuthLayoutMain>;
}
