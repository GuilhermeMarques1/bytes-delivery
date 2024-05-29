import {
  Flex,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  VStack,
  Badge,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'

export function CreateAddress() {
  const [option, setOption] = useState('terra')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    console.log({
      option,
      name,
      phoneNumber,
      address,
      country,
      state,
      city,
      zipCode,
    })

    setOption('terra')
    setName('')
    setPhoneNumber('')
    setAddress('')
    setCountry('')
    setState('')
    setCity('')
    setZipCode('')
  }

  return (
    <>
      <Header></Header>
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
            <Badge bg="blue.700" px="2" fontSize="sm" borderRadius="8px">
              Terra
            </Badge>
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl id="option">
                <FormLabel>Para:</FormLabel>
                <Select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value="terra">Terra</option>
                  <option value="marte">Marte</option>
                </Select>
              </FormControl>

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <FormControl id="name">
                  <FormLabel>Nome do Endereço:</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="phoneNumber">
                  <FormLabel>Número de Telefone:</FormLabel>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormControl>
              </Stack>

              <FormControl id="address">
                <FormLabel>Endereço:</FormLabel>
                <Textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Digite o endereço completo"
                  size="sm"
                  resize="none"
                />
              </FormControl>

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <FormControl id="country">
                  <FormLabel>País:</FormLabel>
                  <Input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </FormControl>
                <FormControl id="state">
                  <FormLabel>Estado:</FormLabel>
                  <Input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </FormControl>
              </Stack>

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <FormControl id="city">
                  <FormLabel>Cidade:</FormLabel>
                  <Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
                <FormControl id="zipCode">
                  <FormLabel>CEP:</FormLabel>
                  <Input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </FormControl>
              </Stack>

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
