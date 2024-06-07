import { SlideProps } from "@mui/material";

const { useScrollTrigger, Slide } = require("@mui/material");

export function HideOnScroll(props: SlideProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
