import {
  Flex,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  VStack,
  Badge,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'
import { AddressForm } from '../components/AddressForm'

export function CreateAddress() {
  const [type, setType] = useState('terra')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [lote, setLote] = useState('')

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
          Criar novo endereço
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
                Salvar Endereço
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  )
}
