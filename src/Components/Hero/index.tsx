import { Box } from "../Box";
import HeroLeftSide from "./HeroLeftside";
import HeroRightside from "./HeroRightside";

export default function Hero() {
  return (
    <Box
      as="section"
      display="flex"
      p="300px 0 "
      textAlign="left"
      backgroundColor="white"
    >
      <HeroLeftSide />
      <HeroRightside />
    </Box>
  );
}
