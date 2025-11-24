import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import Wishlist from "./assets/pages/Wishlist";
import Signin from "./assets/pages/Signin";
import Signup from "./assets/pages/Signup";
import Footer from "./assets/components/Footer";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );


}

export default App
