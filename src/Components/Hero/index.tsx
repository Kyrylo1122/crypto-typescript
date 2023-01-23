import { Box } from "../Box";
import HeroLeftSide from "./HeroLeftside";
import HeroRightside from "./HeroRightside";

export default function Hero() {
  return (
    <Box
      as="section"
      display="flex"
      pb="200px"
      textAlign="left"
      backgroundColor="white"
    >
      <HeroLeftSide />
      <HeroRightside />
    </Box>
  );
}
