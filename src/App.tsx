import React  from 'react';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  return (
    <ChakraProvider>
      <p>Hello world</p>
    </ChakraProvider>
  );
}

export default App;
