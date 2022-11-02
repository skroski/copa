import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Box, NativeBaseProvider, Text, VStack} from "native-base";
import { THEME } from './styles/theme';


export default function App() {
  return (
    <NativeBaseProvider theme= { THEME }>
    <VStack flex={1} bgColor="black" alignItems="center" justifyContent="center">
    <Box >Hello world</Box>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
