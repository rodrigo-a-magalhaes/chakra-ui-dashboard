import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='light'
      w='64'
    >
      DashGo
      <Text as='span' marginLeft='1' color='pink.500'>.</Text>
    </Text>
  );
}
