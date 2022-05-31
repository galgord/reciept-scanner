import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { getProducts } from "./js/helper";
import { SearchBar } from "@rneui/themed";


const ItemsListScreen = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cancel, setCancel] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const products = await getProducts();
      console.log("products", products);
      setProducts(products);
    };
    getData();
  }, [cancel]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredProducts);
  },[search])
  const Item = ({ productName, price }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{productName}</Text>
      <Text style={styles.price}>{"R" + price}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item productName={item.productName} price={item.price} />
  );

  return (
    <View style={{flex:1}}>
    <SafeAreaView style={styles.container}>
      <SearchBar
      platform="ios" 
      placeholder="Type Here..."
      onChangeText={setSearch}
      value={search}
      onCancel={() => setCancel(!cancel)}
      />
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  item: {
    padding: 8,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F7F7F7",
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    alignSelf: "flex-end",
  },
});

export default ItemsListScreen;
