import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./AuthLayout.css";
export default function AuthLayoutMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box component="header" className="auth-layout-header">
        <Box className="auth-header-main">
          <Link href="/" passHref legacyBehavior>
            <Box className="logo_text">
              Skills<Box component="span">4-</Box>IT
            </Box>
          </Link>
        </Box>
      </Box>
      <Box component="main" className="auth-layout-main">{children}</Box>
    </>
  );
}
