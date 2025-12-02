// // Home page displaying movies and managing wishlist

import { getMovies } from "../data/movie";

import Movie from "../components/Movie";

import { useEffect } from "react";
import { useState } from "react";
import type { Imovie } from "../interfaces/Imovie";

const Home = () => {

  const [movies, setMovies] = useState<Imovie[]>([]);

  useEffect(() => {
    const getTMDBMovies = async () => {
      const moviesTMDB = await getMovies();
      setMovies(moviesTMDB);
    };
    getTMDBMovies();
  }, []);

  const [wishlist, setWishlist] = useState<Imovie[]>([]);


  const updateWishlist = (theMovie: Imovie) => {
    if (wishlist.some(movie => movie.id === theMovie.id)) {
      setWishlist(wishlist.filter((movie) => movie.id !== theMovie.id));
    } else {
      setWishlist([...wishlist, theMovie]);
    }
  };



  return (
    <div className="h-max p">
      <div className="flex justify-evenly flex-wrap gap-5 pt-4 ">
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
