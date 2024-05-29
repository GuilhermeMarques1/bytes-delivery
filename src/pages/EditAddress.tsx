import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  VStack,
} from '@chakra-ui/react'
import { BackButton } from '../components/BackButton'
import { Header } from '../components/Header'
import { AddressForm } from '../components/AddressForm'

import { Address } from '../types/IAddress'

export function EditAddress() {
  const location = useLocation()
  const address: Address = location.state?.address

  const [type, setType] = useState(address.type)
  const [name, setName] = useState(address.name)
  const [phoneNumber, setPhoneNumber] = useState(address.phoneNumber)
  const [description, setDescription] = useState(
    address.type === 'terra' ? address.description : '',
  )
  const [country, setCountry] = useState(
    address.type === 'terra' ? address.country : '',
  )
  const [state, setState] = useState(
    address.type === 'terra' ? address.state : '',
  )
  const [city, setCity] = useState(address.type === 'terra' ? address.city : '')
  const [zipCode, setZipCode] = useState(
    address.type === 'terra' ? address.zipCode : '',
  )
  const [lote, setLote] = useState(address.type === 'marte' ? address.lote : '')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setType('terra')
    setName('')
    setPhoneNumber('')
    setDescription('')
    setCountry('')
    setState('')
    setCity('')
    setZipCode('')
    setLote('')
  }

  return (
    <>
      <Header />
      <Flex
        w="60%"
        direction="column"
        alignSelf="center"
        margin="auto"
        marginTop="2rem"
      >
        <BackButton />

        <Heading as="h1" size="lg" marginBottom="2rem">
          Editar Endereço
        </Heading>

        <Box p={2} w="70%" m="auto">
          <Box mb="4">
            {type === 'terra' ? (
              <Badge bg="blue.700" px="2" fontSize="sm" borderRadius="8px">
                Terra
              </Badge>
            ) : (
              <Badge bg="red.500" px="2" fontSize="sm" borderRadius="8px">
                Marte
              </Badge>
            )}
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl id="option">
                <FormLabel>Para:</FormLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="terra">Terra</option>
                  <option value="marte">Marte</option>
                </Select>
              </FormControl>

              <AddressForm
                name={name}
                setName={setName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                type={type}
                description={description}
                setDescription={setDescription}
                country={country}
                setCountry={setCountry}
                state={state}
                setState={setState}
                city={city}
                setCity={setCity}
                lote={lote}
                setLote={setLote}
                zipCode={zipCode}
                setZipCode={setZipCode}
              />

              <Button
                mt="4rem"
                bg="blue.900"
                color="white.100"
                type="submit"
                _hover={{ bg: 'blue.800' }}
              >
                Salvar alterações
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  )
}
