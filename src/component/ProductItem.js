import React, { useState } from "react";
import PropTypes from "prop-types";
import { Badge, Modal, Row, Col } from "react-bootstrap";
import { useProductAuth } from "../context/productContext";

const ProductItem = ({ product }) => {
  const { handleAddToCart } = useProductAuth();
  const [show, setShow] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  console.log("product Item", product, product.rating.rate);
  const onAddToCart = (product) => {
    handleAddToCart(product);
  };

  return (
    <React.Fragment>
      <div
        class="card col-sm-3 g-1 mx-1 text-center"
        style={{ width: "18rem" }}
      >
        <img
          class="card-img-top"
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
        <div class="card-body">
          <h5 className="product__name">{product.title}</h5>
          <Badge bg="success">{product.rating.rate}</Badge>
          <p>({product.rating.count})</p>
          <h5 className="product__price">₹{product.price}</h5>
          <div className="product__details">
            <div className="d-flex justify-content-evenly">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  setProductDetail(product);
                  setShow(true);
                }}
              >
                VIEW
              </button>
              <button
                name="Add to cart"
                class="btn btn-warning"
                onClick={() => onAddToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-5">
          <div class="row justify-content-center">
            <div class="col-md-4">
              {" "}
              <img
                class="card-img-top"
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
            </div>
          </div>
          {/* <span><Badge bg="success">{productDetail.rating.rate}</Badge>{productDetail.rating.count}</span> */}
          <h5>{productDetail.title}</h5>
          <p>{productDetail.description}</p>
          <h3>₹{productDetail.price}</h3>
          {/* <div className="d-flex justify-content-evenly">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#productDetail"
              onClick={() => {
                setProductDetail(product);
                setShow(true);
              }}
            >
              VIEW
            </button>
            <button
              name="Add to cart"
              class="btn btn-warning"
              onClick={() => onAddToCart(product.id)}
            >
              ADD TO CART
            </button>
          </div> */}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};

export default ProductItem;
