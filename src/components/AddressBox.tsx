import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

export function AddressBox() {
  return (
    <Flex
      direction="row"
      w="80vw"
      border="1px solid"
      borderColor="blue.900"
      borderRadius="12px"
      p={4}
    >
      <Flex mr="8">
        <Image
          boxSize="100px"
          borderRadius="12px"
          margin="2px"
          src="https://previews.123rf.com/images/hironicons/hironicons2005/hironicons200500085/147291149-well-organized-and-fully-editable-earth-globe-icon-map-address-location-for-any-use-like-print-media.jpg"
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
          <Button border="1px solid" borderColor="gray.300" mt="2" mr="2">
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
