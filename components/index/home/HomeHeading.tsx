import { Box, Typography } from "@mui/material";

interface HomeHeadingProps {
  title?: string;
  subtitle?: string;
}

export default function HomeHeading({ title, subtitle }: HomeHeadingProps) {
  return (
    <Box className="flex flex-col items-center justify-center text-[white] py-5">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
}
