import React, { createContext, useContext, useMemo, useState } from "react";

const ProCon = createContext();

export const ProductCon = (props) => {
  const [productCart, setProductCart] = useState([]);

  const handleAddToCart = (product) => {
    product.quantity = 1;
    productCart.push(product);
    setProductCart([...productCart]);
  };

  const handleRemoveFromCart = (lineItemId) => {
    console.log("product cart", lineItemId);
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    console.log(lineItemId, quantity);
  };

  const handleEmptyCart = () => {
    setProductCart([]);
  };

  const memoValue = useMemo(
    () => ({
      productCart,
      handleAddToCart,
      handleRemoveFromCart,
      handleUpdateCartQty,
      handleEmptyCart,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productCart]
  );

  return <ProCon.Provider value={memoValue}>{props.children}</ProCon.Provider>;
};

export const useProductAuth = () => {
  return useContext(ProCon);
};
