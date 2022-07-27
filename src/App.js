import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Children from "./Components/Children";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="men-shoes" element={<Men />} />
          <Route path="women-shoes" element={<Women />} />
          <Route path="children-shoes" element={<Children />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
