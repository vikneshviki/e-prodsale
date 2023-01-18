
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/Productlist";
import Cart from "../pages/cart";

const AppPages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppPages;
