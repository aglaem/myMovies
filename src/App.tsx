import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Wishlist from "./assets/pages/Wishlist";
import Signin from "./assets/pages/Signin";
import Signup from "./assets/pages/Signup";
import Footer from "./assets/components/Footer";
import MovieDetails from "./assets/pages/MovieDetails";


function App() {



  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );


}

export default App
