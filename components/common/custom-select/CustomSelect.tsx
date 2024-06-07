import "./CustomSelect.css";
import {
  BaseSelectProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface CustomSelectProps extends BaseSelectProps {
  label: string;
  options: { value: any; name: string }[];
  className?: string;
  formClassName?: string;
  required?: boolean;
  name?: string;
}

export default function CustomSelect(props: CustomSelectProps) {
  const {
    label,
    options,
    formClassName = "",
    required = false,
    name = "",
  } = props;
  return (
    <FormControl
      className={`custom-select ${formClassName}`}
      variant="filled"
      fullWidth
      sx={{
        mt: 1,
        mb: 0.5,
      }}
      required={required}
    >
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select {...props} name={name}>
        {options?.map((option, index) => (
          <MenuItem key={index} value={option?.value}>
            {option?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
