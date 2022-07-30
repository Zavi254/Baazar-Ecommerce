import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="cart" element={<Cart />} />
          <Route path="men-shoes" element={<Men />} />
          <Route path="women-shoes" element={<Women />} />
          <Route path="kids-shoes" element={<Kids />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
