import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'

type AddressFormProps = {
  name: string
  setName: (x: string) => void
  phoneNumber: string
  setPhoneNumber: (x: string) => void
  type: string
  description: string
  setDescription: (x: string) => void
  country: string
  setCountry: (x: string) => void
  state: string
  setState: (x: string) => void
  city: string
  setCity: (x: string) => void
  lote: string
  setLote: (x: string) => void
  zipCode: string
  setZipCode: (x: string) => void
}

export function AddressForm({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  type,
  description,
  setDescription,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  lote,
  setLote,
  zipCode,
  setZipCode,
}: AddressFormProps) {
  return (
    <>
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

      {type === 'terra' ? (
        <>
          <FormControl id="address">
            <FormLabel>Endereço:</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
        </>
      ) : (
        <Box m="auto">
          <FormControl id="lote">
            <FormLabel>Lote:</FormLabel>
            <Input
              borderRadius="8"
              type="text"
              value={lote}
              onChange={(e) => setLote(e.target.value)}
              placeholder="Infome o lote"
              maxLength={4}
              pattern="[0-9]*"
              size="sm"
            />
          </FormControl>
        </Box>
      )}
    </>
  )
}
