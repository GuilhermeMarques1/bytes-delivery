import { Button, Flex, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { AddressBox } from '../components/AddressBox'

import { Address } from '../types/IAddress'

const addresses: Address[] = [
  {
    type: 'terra',
    name: 'Endereço 1',
    description: 'Rua exemplo, 123',
    city: 'São Paulo',
    country: 'Brazil',
    phoneNumber: '(16) 1234-5678',
    state: 'SP',
    zipCode: '12456-789',
  },
  {
    type: 'marte',
    name: 'Endereço 2',
    phoneNumber: '(11) 1234-6789',
    lote: '1234',
  },
]

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

        <Flex direction="column">
          {addresses.map((address) => (
            <AddressBox key={address.name} address={address} />
          ))}
        </Flex>
      </Flex>
    </>
  )
}
