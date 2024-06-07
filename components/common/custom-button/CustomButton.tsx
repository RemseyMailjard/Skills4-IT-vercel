import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { IconButton, IconButtonProps } from "@mui/material";
import "./CustomButton.css";

export function CustomLoadingButton(props: LoadingButtonProps) {
  const { className = "", children } = props;
  return (
    <LoadingButton {...props} variant="contained" className={`custom-loading-button ${className}`}>
      {children}
    </LoadingButton>
  );
}

export function CustomIconButton(props: IconButtonProps) {
  const { className = "", children } = props;
  return (
    <IconButton {...props} className={`custom-icon-button ${className}`}>
      {children}
    </IconButton>
  );
}
