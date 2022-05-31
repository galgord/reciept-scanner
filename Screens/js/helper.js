import axios from "axios";
import { db } from "../../firebase.js";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 

export const fetchData = (url) => {
  const path = 'https://reciept-scanner-backend-suli6h6wwq-uc.a.run.app/generateproducts'
  return axios.post(path, {url})
}

export const saveProductsInDb = (products) => {
  products.forEach(async product => {
    await addDoc(collection(db, 'products'), {
      productName: product.productName,
      price: product.price
    });
  });
};


export const getProducts = async () => {
const q = query(collection(db, 'products'));
const querySnapshot = await getDocs(q);
const prodArr = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  prodArr.push({id: doc.id, ...doc.data()})
});
return prodArr
}