import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ç, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {fetchData, saveProductsInDb} from './js/helper.js'




const QrScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    const products = await fetchData(data);
    await saveProductsInDb(products.data);
    navigation.navigate('Items list');
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.qrScanner}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({ 
  container: { 
    height: Dimensions.get('screen').height - 80,
    width: Dimensions.get('screen').width
   },
   qrScanner: {
     flex: 1,
   }
});

export default QrScannerScreen;
