import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Imposta la libreria
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {

  // Se va a ejecutar una vez, cuando inicie la App
  // La funcionalidad es de React
  useEffect(() => {
    // Solicitar los permisos para usar la camara
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
    })()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hola desde React Native</Text>
      <Text>Welcome Talent</Text>

      <BarCodeScanner
        onBarCodeScanned={({ type, data }) => {
          // Que voy a hacer con la info del QR
          alert(data);
        }}
        style={StyleSheet.absoluteFillObject}
       />
 
      <StatusBar style="auto" />
    </View>
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
