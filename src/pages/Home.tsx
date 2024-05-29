import { Flex, Heading } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { AddressBox } from '../components/AddressBox'

export function Home() {
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
        <Heading as="h1" size="lg" marginBottom="3rem">
          Endereços
        </Heading>

        <Flex>
          <AddressBox />
        </Flex>
      </Flex>
    </>
  )
}
