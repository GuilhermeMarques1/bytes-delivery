import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#2F43FC ',
      '800': '#6877fd',
      '700': '#b4bbfe',
    },
    black: {
      '900': '#000',
      '700': '#333',
    },
    gray: {
      '300': '#9699B0',
      '200': '#B3B5C6',
    },
    red: {
      '500': '#e25822',
    },
    white: {
      '100': '#f0f2f5',
      '50': '#EEEEF2',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'white.100',
        color: 'black.700',
      },
    },
  },
  components: {
    FormLabel: {
      baseStyle: {
        color: 'black.900',
        fontSize: 'lg',
      },
    },
  },
})
