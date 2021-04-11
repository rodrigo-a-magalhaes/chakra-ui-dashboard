import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex w='100%' maxW={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal' >Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
            </Button>
            </Link>


          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuários</Th>

                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th></Th>}

              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='black'>Rodrigo Magalhaes</Text>
                    <Text fontSize='sm' color='gray.300'>rodrigo@email.com</Text>
                  </Box>
                </Td>

                {isWideVersion && <Td><Text>04 de Abril, 2021</Text></Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      {isWideVersion ? 'Editar' : ''}
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}