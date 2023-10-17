import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      lightBackground: '#f7f9fc',
      lightText: '#333',
      darkBackground: '#180021',
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
