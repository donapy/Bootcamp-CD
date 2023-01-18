import "./App.css";
import FormProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ProductDetail from "./pages/ProductDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Product Manager</h1>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproduct" element={<FormProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
