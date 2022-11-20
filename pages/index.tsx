import type { NextPage } from "next";
import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoScale } from "react-icons/io5";
import { GiMeepleGroup } from "react-icons/gi";

import animation from "@assets/animation.json";
import { FeatureCard } from "@components/FeatureCard";

const Home: NextPage = () => {
  return (
    <Flex mx="36" flexDir="column">
      {/* CTA */}
      <Flex height="70vh" flexDir="row">
        <Flex flex={1} flexDir="column" justifyContent="center" height="100%">
          <Spacer />
          <Heading>Decentralized borrow and lending protocol on TRON</Heading>
          <Text mt="6">
            Simple and powerful community-driven finance for everyone.
          </Text>
          <Spacer />
          <HStack mt="9" spacing="9">
            <Button
              variant="outline"
              as="a"
              href="https://app.uruz.finance"
              target="_blank"
            >
              Launch App
            </Button>
            <Badge colorScheme="green">Earn</Badge>
            <Badge colorScheme="red">Borrow</Badge>
            <Badge colorScheme="yellow">Lend</Badge>
          </HStack>
        </Flex>

        {/* Animation */}
        <Flex flex={1} flexDir="column" justifyContent="center">
          <Lottie loop={true} animationData={animation} />
        </Flex>
      </Flex>

      {/* Cards */}
      <HStack spacing="9" my="64">
        <FeatureCard
          title="Decentralized"
          description="Access an immutable money market directly on-chain."
          icon={GiMeepleGroup}
          label="decentralized"
        />
        <FeatureCard
          title="TRC-20"
          description="All Uruz Protocol assets are bound by the TRC-20 standard."
          icon={BsShieldFillCheck}
          label="trc-20"
        />
        <FeatureCard
          title="Scalable"
          description="Built on TRON for fast, secure, and low cost transactions."
          icon={IoScale}
          label="scalable"
        />
      </HStack>

      <Image src="/tron-hackathon-banner.jpg" borderRadius="xl" />
    </Flex>
  );
};

export default Home;
