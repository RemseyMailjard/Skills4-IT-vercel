"use client";
import { ReactNode } from "react";
import "./IndexLayout.css";
import { Box } from "@mui/material";
import IndexLayoutHeader from "./IndexLayoutHeader";
import IndexLayoutFooter from "./IndexLayoutFooter";

export default function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <IndexLayoutHeader />
      <Box component="main" className="layout-main">
        {children}
      </Box>
      <IndexLayoutFooter />
    </>
  );
}
