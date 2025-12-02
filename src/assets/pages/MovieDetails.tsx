// Movie details page displaying detailed information about a selected movie
import { getMovies } from "../data/movie";
import { useParams } from "react-router";
import type { Imovie } from "../interfaces/Imovie";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const MovieDetails = () => {
    const [movies, setMovies] = useState<Imovie[]>([]);
    
      useEffect(() => {
        const getTMDBMovies = async () => {
          const moviesTMDB = await getMovies();
          setMovies(moviesTMDB);
        };
        getTMDBMovies();
      }, []);

    const { id } = useParams();
    const movie: Imovie | undefined = movies.find((movie) => movie.id === Number(id));
    console.log(movie);
    if (!movie) {
        return <div className="text-center">Movie not found</div>;
    }
    return (
        <div className="flex-1 flex flex-col gap-3">
            <div>
                <Link to="/" className="p-2 m-2 rounded-base bg-gray-800 hover:bg-gray-700 hover:text-white text-black">Back to Home</Link>
            </div>
            <div className="flex-1 flex justify-evenly items-center">
                <div>
                    <img className="flex m-auto object-cover rounded-base w-auto h-96" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.original_title} />
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-7xl text-center">{movie?.original_title}</h1>
                    <h2 className="text-3xl text-center mt-4">Résumé</h2>
                    <p className="text-xl text-center mx-10">{movie?.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;