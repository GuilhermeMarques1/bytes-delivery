import { Button, Flex, Heading, RadioGroup, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { AddressBox } from '../components/AddressBox'

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Flex
        pos="relative"
        w="60%"
        direction="column"
        alignSelf="center"
        margin="auto"
        marginTop="2rem"
      >
        <Heading as="h1" size="lg" marginBottom="3rem">
          Endereços
        </Heading>

        <Button
          pos="absolute"
          right="2"
          border="1px solid"
          borderColor="blue.900"
          color="blue.900"
          onClick={() => navigate('/newaddress')}
        >
          Adicionar Endereço
        </Button>

        <RadioGroup>
          <Stack direction="column">
            <AddressBox />
            <AddressBox />
          </Stack>
        </RadioGroup>
      </Flex>
    </>
  )
}
