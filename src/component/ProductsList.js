import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductsList = ({ products}) => (
  <div className="products container-fluid" id="products">
    <div class="row justify-content-center">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </div>
);

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array,
};
