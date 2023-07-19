import "./App.css";
import Home from "./Home";
import About from "./components/About";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./assets/store";
import { Routes, Route, Navigate } from "react-router-dom";
import Offers from "./components/Offers";
import ProductDetail from "./components/ProductDetail";
import { useParams } from "react-router-dom";
import Profile from "./components/Profile";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
