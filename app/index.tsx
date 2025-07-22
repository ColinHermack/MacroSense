import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../themes';
import App from './app';

export default function Index() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
