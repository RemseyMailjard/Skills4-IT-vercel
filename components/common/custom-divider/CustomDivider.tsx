import React from "react";
import { Box, DividerProps } from "@mui/material";

export default function CustomDivider(props: DividerProps) {
  const { className = "" } = props;
  return (
    <Box
      component="hr"
      className={`border-pami-orange-default my-2 ${className}`}
    />
  );
}
