import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import theme from '@/styles/theme';
import {ChakraProvider} from '@chakra-ui/react';
import store, {wrapper} from '@/store';

 function App({Component, pageProps}: AppProps) {

  return <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
}

export default wrapper.withRedux(App);
