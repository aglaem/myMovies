// Movie details page displaying detailed information about a selected movie
import { movies } from "../data/movie";
import { useParams } from "react-router";
import type { Imovie } from "../interfaces/Imovie";
import { Link } from "react-router";

const MovieDetails = () => {
    const { id } = useParams();
    const movie: Imovie | undefined = movies.find((movie) => movie.id === Number(id));
    console.log(movie);
    if (!movie) {
        return <div className="">Movie not found</div>;
    }
    return (
        <div className="flex-1 flex flex-col gap-3">
            <div>
                <Link to="/" className="p-2 m-2 rounded-base bg-gray-800 hover:bg-gray-700 hover:text-white text-black">Back to Home</Link>
            </div>
            <div className="flex-1 flex justify-evenly items-center">
                <div>
                    <img className="flex m-auto object-cover rounded-base w-auto h-96" src={movie?.poster} alt={movie?.titre} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-7xl text-center">{movie?.titre}</h1>
                    <h2 className="text-3xl text-center mt-4">Acteurs</h2>
                    <p className="text-xl text-center">{movie?.acteur.join(', ')}</p>
                    <h2 className="text-3xl text-center mt-4">Durée</h2>
                    <p className="text-xl text-center">{Math.floor(movie?.durée / 60)}h{(movie?.durée % 60).toString().padStart(2, '0')}</p>
                    <h2 className="text-3xl text-center mt-4">Résumé</h2>
                    <p className="text-xl text-center mx-10">{movie?.résumé}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;