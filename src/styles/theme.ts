import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#2F43FC ',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#f0f2f5',
      '50': '#EEEEF2',
    },
    black: {
      '900': '#000',
      '700': '#333',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'blue.100',
        color: 'black.700',
      },
    },
  },
})
