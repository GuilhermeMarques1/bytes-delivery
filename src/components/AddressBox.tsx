import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

import earthImg from '../assets/earth.png'
import marsImg from '../assets/mars.png'

import { Address } from '../types/IAddress'

type AddressProps = {
  address: Address
}

export function AddressBox({ address }: AddressProps) {
  const navigate = useNavigate()

  return address.type === 'terra' ? (
    <Flex
      pos="relative"
      direction="row"
      border="1px solid"
      borderColor="blue.900"
      borderRadius="12px"
      p={4}
      mb="4"
    >
      <Flex mr="8">
        <Image
          boxSize="100px"
          borderRadius="12px"
          margin="2px"
          src={earthImg}
          alt="Location image"
        />
      </Flex>

      <Flex direction="column" flex="1">
        <Flex direction="column">
          <Box mb={2}>
            <Badge bg="blue.700" px="2" fontSize="sm" borderRadius="8px">
              {address.type}
            </Badge>
          </Box>

          <Heading as="h2" size="xl" mb="1rem">
            {address.name}
          </Heading>
          <Text fontSize="lg">{`${address.description} - ${address.state}, ${address.city}, ${address.country}`}</Text>
          <Text fontSize="lg" mb={1} color="gray.300">
            {address.zipCode}
          </Text>
          <Text fontSize="lg" mb={1} color="gray.300">
            {address.phoneNumber}
          </Text>
        </Flex>

        <Flex margin="auto">
          <Button
            onClick={() => navigate('/editaddress', { state: { address } })}
            border="1px solid"
            borderColor="gray.300"
            mt="2"
            mr="2"
          >
            Editar
          </Button>
          <Button border="1px solid" borderColor="gray.300" mt="2" ml="2">
            Deletar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <Flex
      pos="relative"
      direction="row"
      border="1px solid"
      borderColor="blue.900"
      borderRadius="12px"
      p={4}
      mb="4"
    >
      <Flex mr="8">
        <Image
          boxSize="100px"
          borderRadius="12px"
          margin="2px"
          src={marsImg}
          alt="Location image"
        />
      </Flex>

      <Flex direction="column" flex="1">
        <Flex direction="column">
          <Box mb={2}>
            <Badge bg="red.500" px="2" fontSize="sm" borderRadius="8px">
              {address.type}
            </Badge>
          </Box>

          <Heading as="h2" size="xl" mb="1rem">
            {address.name}
          </Heading>
          <Text fontSize="lg">Lote: {address.lote}</Text>
          <Text fontSize="lg" mb={1} color="gray.300">
            {address.phoneNumber}
          </Text>
        </Flex>

        <Flex margin="auto">
          <Button
            onClick={() => navigate('/editaddress', { state: { address } })}
            border="1px solid"
            borderColor="gray.300"
            mt="2"
            mr="2"
          >
            Editar
          </Button>
          <Button border="1px solid" borderColor="gray.300" mt="2" ml="2">
            Deletar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
