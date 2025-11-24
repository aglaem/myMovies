// Home page displaying movies and managing wishlist

import Header from "../components/Header";
import Movie from "../components/Movie";
import { movies } from "../data/movie";
import { useState } from "react";
import type { Imovie } from "../interfaces/Imovie";

const Home = () => {

    const [wishlist, setWishlist] = useState<Imovie[]>([]);


  const updateWishlist = (theMovie: Imovie) => {
    if (wishlist.some(movie => movie.id === theMovie.id)) {
      setWishlist(wishlist.filter((movie) => movie.id !== theMovie.id));
    } else {
      setWishlist([...wishlist, theMovie]);
    }
  };



  return (
    <div className="bg-linear-to-b from-gray-800 to-red-950">
      <Header wishlist={wishlist} updateHeadWishlist={updateWishlist} />
      <p></p>
      <div className="flex justify-evenly flex-wrap gap-0.5 pt-4 gap-y-5">
        {
          movies.length > 0 ? (
            movies.map((movie: Imovie) => (
              <div key={movie.id}>
                <Movie movieData={movie} updateMovieWishlist={updateWishlist} wishlist={wishlist} />
              </div>
            ))) : ("No movies available")
        }
      </div>

    </div>
  )
};

export default Home;