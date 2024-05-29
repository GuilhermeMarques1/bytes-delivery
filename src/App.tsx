import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

import { Header } from './components/Header'

export function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
    </ChakraProvider>
  )
}
