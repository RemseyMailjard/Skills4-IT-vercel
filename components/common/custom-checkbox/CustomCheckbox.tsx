import "./CustomCheckbox.css";
import { Checkbox, CheckboxProps } from "@mui/material";
import React from "react";

export default function CustomCheckbox(props: CheckboxProps) {
  const { className = "" } = props;
  return <Checkbox className={`custom-checkbox ${className}`} {...props} />;
}
