import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  // const [search, setSearch] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);
  // searchInputRef.current.focus() (imperativo)

  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxW={400}
      alignSelf='center'
      color='gray.200'
      position='relative'
      bg='gray.800'
      borderRadius='full'
    >
      <Input
        color='green.50'
        variant='unstyled'
        px='4'
        mr='4'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
        hef={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize='20' />
    </Flex>
  );
}
