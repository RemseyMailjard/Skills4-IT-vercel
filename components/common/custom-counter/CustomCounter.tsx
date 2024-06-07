import { Box, Button } from "@mui/material";
import { AddRounded, RemoveRounded } from "@mui/icons-material";

interface CustomCounterProps {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  disableDec: boolean;
}

export default function CustomCounter({
  quantity,
  handleIncrement,
  handleDecrement,
  disableDec,
}: CustomCounterProps) {
  return (
    <Box className="quantity flex items-center h-full">
      <Box className="h-full w-full aspect-square">
        <Button
          className="h-full !min-w-full"
          onClick={handleDecrement}
          disabled={disableDec}
        >
          <RemoveRounded className="color-black" />
        </Button>
      </Box>
      <span className="mx-2">{quantity}</span>
      <Box className="h-full w-full aspect-square">
        <Button className="h-full !min-w-full" onClick={handleIncrement}>
          <AddRounded />
        </Button>
      </Box>
    </Box>
  );
}
