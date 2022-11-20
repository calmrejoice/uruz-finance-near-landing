import {
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

import { SocialIcon } from "./SocialIcon";
import { UruzLogo } from "./UruzLogo";

export const Header = () => {
  const { setColorMode } = useColorMode();
  return (
    <Flex flexDir="row" my="12" mx="36">
      <UruzLogo />
      <Spacer />
      <HStack mr="6" spacing="6">
        <SocialIcon icon={SiGitbook} label="documents" />
        <SocialIcon icon={FaGithub} label="github" />
        <SocialIcon icon={FaDiscord} label="discord" />
        <SocialIcon icon={FaTelegram} label="telegram" />
        {/* <Button onClick={() => setColorMode("dark")}>Dark</Button> */}
      </HStack>
      <Button as="a" href="https://app.uruz.finance" target="_blank">
        Launch App
      </Button>
    </Flex>
  );
};
