import "./CustomInput.css";
import {
  Box,
  TextField,
  TextFieldProps,
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/material";
import { forwardRef, useState } from "react";
import MaskedInput from "react-text-mask";

interface CustomTextareaAutosizeProps extends TextareaAutosizeProps {
  label?: string;
}

export function CustomInput(props: TextFieldProps) {
  const { className } = props;
  return (
    <TextField
      {...props}
      className={`custom-input w-44 ${className}`}
      variant="filled"
      fullWidth
      margin="dense"
    />
  );
}
export function CustomPasswordInput(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      className="custom-input"
      variant="filled"
      fullWidth
      margin="dense"
      type="password"
    />
  );
}
export function CustomTextArea(props: CustomTextareaAutosizeProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <Box className="custom-textarea">
      <label
        className={`custom-textarea-label ${
          isFocused ? "custom-textarea-label-focused" : ""
        }`}
      >
        {props.label}
      </label>
      <TextareaAutosize
        {...props}
        className={`custom-textarea-input ${
          isFocused ? "custom-textarea-input-focused" : ""
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
  );
}

export const phoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const TextMaskCustom = forwardRef((props, ref) => {
  return <MaskedInput {...props} placeholder="" mask={phoneMask} />;
});

export function CustomPhoneNumberInput(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      className="custom-input"
      variant="filled"
      fullWidth
      margin="dense"
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
    />
  );
}

// export function CustomDatePicker(props: DatePickerProps) {
//   return (
//     <DatePicker
//       {...props}
//       label="Check-in"
//       disablePast
//       slotProps={{
//         popper: {
//           className: "date-picker-popper",
//         },
//         textField: {
//           className: "custom-input",
//           margin: "dense",
//           variant: "filled",
//           fullWidth: true,
//         },
//         inputAdornment: {
//           className: "date-picker-button",
//         },
//       }}
//     />
//   );
// }
