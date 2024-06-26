import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

import { AppRoutes } from './routes'

export function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  )
}
