import { useParams } from 'react-router-dom'
import { Flex, Heading } from '@chakra-ui/react'
import { BackButton } from '../components/BackButton'
import { Header } from '../components/Header'

export function EditAddress() {
  const { id } = useParams()

  console.log(id)

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
      </Flex>
    </>
  )
}
