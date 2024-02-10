import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  
  colors: {
    brand: {
      lightBackground: '#f7f9fc',
      lightText: '#333',
      darkBackground: '#04080f',
      darkText: '#f7f9fc',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'brand.lightBackground' : 'brand.darkBackground',
        color: props.colorMode === 'light' ? 'brand.lightText' : 'brand.darkText',
      },
    }),
  },
});

export default theme;
