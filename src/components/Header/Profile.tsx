import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Rodrigo Magalhaes</Text>
          <Text color='gray.300' fontSize='small'>
            rodrigo.magalhaes@email.com
          </Text>
        </Box>
      )}
      <Avatar size='md' name='Rodrigo Magalhaes' src='https://avatars.githubusercontent.com/u/28880955?v=4' />
    </Flex>
  );
}
