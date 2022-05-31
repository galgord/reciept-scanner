import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView} from 'react-native';
import { getProducts } from './js/helper';
const ItemsListScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const products = await getProducts();
      console.log('products', products);
      setProducts(products);
    }
    getData()
  },[])
  
  return (
    <ScrollView style={styles.container}>
      {products.map((item, index) => {
        return (
          <SafeAreaView>
            <Text key={item.id}>{item.productName}</Text>
          </SafeAreaView>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create(
  {
    container: {}
  }
)

export default ItemsListScreen