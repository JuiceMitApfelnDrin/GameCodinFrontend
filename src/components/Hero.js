import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="90vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "GameCodin",
};