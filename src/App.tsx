import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Movie from "./assets/components/Movie";
import { movies } from "./assets/data/movie";
import { useState } from "react";

function App() {

  const [wishlist, setWishlist] = useState<string[]>([]);


  const addMovieToWishlist = (theMovie: any) => {
    wishlist.includes(theMovie.titre) ? null :
    setWishlist([...wishlist, theMovie.titre]);
  };


  return (
      <div className="bg-linear-to-b from-gray-800 to-red-950">
        <Header wishlist={wishlist}/>
        <p></p>
        <div className="flex justify-evenly flex-wrap gap-0.5 pt-4 gap-y-5">
          {
            movies.length > 0 ? (
              movies.map((movie: any) => (
                <div key={movie.id}>
                  <Movie movieData={movie} addMovieApp={addMovieToWishlist} wishlist={wishlist}/>
                </div>
              ))) : ("No movies available")
          }
        </div>
        <Footer />

      </div>
  )
}

export default App
