import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  
  colors: {
    brand: {
      lightBackground: '#f7f9fc',
      lightText: '#070707',
      darkBackground: '#121212', // Dark gray for better contrast
      darkCard: '#1e1e1e', // Slightly lighter gray for cards
      darkText: '#e0e0e0', // Off-white text
      primary: '#00A884', // Accent color for highlights (teal-green)
      secondary: '#FFD700', // Accent for lighter highlights
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'brand.lightBackground' : 'brand.darkBackground',
        color: props.colorMode === 'light' ? 'brand.lightText' : 'brand.darkText',
        fontFamily: 'Inter, sans-serif',
        lineHeight: '1.6',
      },
      a: {
        color: props.colorMode === 'light' ? 'brand.primary' : 'brand.secondary',
        _hover: {
          textDecoration: 'underline',
        },
      },
      'button, input, select, textarea': {
        borderColor: props.colorMode === 'light' ? 'brand.lightText' : 'brand.darkText',
        _focus: {
          boxShadow: `0 0 0 3px ${props.colorMode === 'light' ? 'brand.primary' : 'brand.secondary'}`,
        },
      },
    }),
  },
  components: {
    Card: {
      baseStyle: (props) => ({
        bg: props.colorMode === 'light' ? 'white' : 'brand.darkCard',
        borderRadius: 'lg',
        boxShadow: 'lg',
        padding: '6',
        color: props.colorMode === 'light' ? 'brand.lightText' : 'brand.darkText',
      }),
    },
  },
});

export default theme;