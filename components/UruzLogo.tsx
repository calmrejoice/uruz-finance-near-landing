import { Flex, Heading, Text } from "@chakra-ui/react";
import { config } from "config";

export const UruzLogo = () => {
  return (
    <Flex as="a" href={config.landingLink} target="_blank">
      <Heading fontSize="3xl">U R U Z</Heading>
    </Flex>
  );
};
