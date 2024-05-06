import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null); // Fixed the syntax

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());


  useEffect(() => {
    // This useEffect hook runs when the component mounts due to the empty dependency array [].
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data));


    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }


  }, []);



  const addToCart = (itemIdno) => {
    setCartItems((prev) => ({ ...prev, [itemIdno]: prev[itemIdno] + 1 }));


    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json', // Corrected 'Accept' header
          'auth-token': `${localStorage.getItem('auth-token')}`, // Corrected auth-token formatting
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemIdno }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error)); // Handle any errors
    }

  }



  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json', // Corrected 'Accept' header
          'auth-token': `${localStorage.getItem('auth-token')}`, // Corrected auth-token formatting
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error)); // Handle any errors
    }


  }



  const getTotelCartAmount = () => {
    let totelAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totelAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totelAmount;
  }

  const getTotelCartItems = () => {
    let totelCartItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totelCartItems += cartItems[item]
      }
    }
    return totelCartItems;
  }

  const contextValue = { getTotelCartItems, getTotelCartAmount, all_product, cartItems, addToCart, removeFromCart }; // Fixed the syntax
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
