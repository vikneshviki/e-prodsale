import React, { useState } from "react";
import { Navbar, Container, Modal, ListGroup, Badge } from "react-bootstrap";
import { useProductAuth } from "../context/productContext";

export default function Header() {
  const { productCart, handleEmptyCart } = useProductAuth();
  const [cartModal, setCartModal] = useState(false);
  console.log("header cart", productCart);
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-productSale</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => setCartModal(true)}
            >
              Cart <span class="badge badge-light">{productCart.length}</span>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={cartModal}
        fullscreen={true}
        onHide={() => setCartModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-5">
          <ListGroup as="ol" numbered>
            {productCart.map((item) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>₹{item.price}
                </div>
                <Badge bg="primary" pill>
                  {item.quantity}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="cart__footer">
            <button
              type="button"
              className="cart-item__empty"
              onClick={handleEmptyCart}
            >
              Empty
            </button>
            <button className="cart__btn-checkout">Checkout</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
