import { Flex, Heading, Icon, Spacer, Text } from "@chakra-ui/react";

export const FeatureCard = ({ title, icon, description, label }: any) => {
  return (
    <Flex
      borderRadius="lg"
      bgColor="gray.900"
      p="6"
      flexDir="column"
      width="100%"
    >
      <Icon as={icon} boxSize="8" />
      <Spacer />
      <Text mb="6" mt="24" fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text variant="helper">{description}</Text>
    </Flex>
  );
};
