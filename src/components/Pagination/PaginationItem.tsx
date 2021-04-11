import { Button } from '@chakra-ui/react';


interface PaginationItemProps {
  number: number;
  isCurrenct?: boolean;
}

export function PaginationItem({ isCurrenct = false, number }: PaginationItemProps) {
  if (isCurrenct) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'pink.500'
      }}
    >
      {number}
    </Button>
  );
}
