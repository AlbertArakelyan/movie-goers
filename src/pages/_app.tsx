import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import theme from '@/styles/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {wrapper} from '@/store';

function App({Component, pageProps}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(pageProps);

  return <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Component {...props} />
    </ChakraProvider>
  </Provider>
}

export default App;
