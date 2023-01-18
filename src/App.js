import React, { useState, useEffect, Suspense } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ProductsList from "./component/ProductsList";
import { useProductAuth } from "./context/productContext";
import Header from "./pages/header";
import { Spinner } from "react-bootstrap";

library.add(faShoppingBag, faTimes);

const App = () => {
  const { productCart } = useProductAuth();
  console.log("data from context", productCart);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      {!loading ? (
        <React.Fragment>
          <Header />
          <ProductsList products={products} />
        </React.Fragment>
      ) : (
        <center>
          <Spinner />
        </center>
      )}
    </Suspense>
  );
};

export default App;
