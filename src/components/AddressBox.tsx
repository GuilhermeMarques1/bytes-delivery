import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Radio,
  Text,
} from '@chakra-ui/react'

import earthImg from '../assets/earth.png'

export function AddressBox() {
  const navigate = useNavigate()

  return (
    <Flex
      pos="relative"
      direction="row"
      border="1px solid"
      borderColor="blue.900"
      borderRadius="12px"
      p={4}
      mb="4"
    >
      <Radio value="endereco1" pos="absolute" right="18" />
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
              Terra
            </Badge>
          </Box>

          <Heading as="h2" size="xl" mb="1rem">
            Endereco1
          </Heading>
          <Text fontSize="lg">471 São Paulo, Av. Manchester Paulista</Text>
          <Text fontSize="lg" mb={1} color="gray.300">
            (16) 1234-5678
          </Text>
        </Flex>

        <Flex margin="auto">
          <Button
            onClick={() => navigate('/editaddress/1')}
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
