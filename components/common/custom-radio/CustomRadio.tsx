import "./CustomRadio.css";
import { Radio, RadioProps } from "@mui/material";

export default function CustomRadio(props: RadioProps) {
  return <Radio {...props} className="custom-radio" />;
}
