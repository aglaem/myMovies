import { useState } from "react";
import { LuCross } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";


const Movie = ({ movieData, addMovieApp, wishlist }: any) => {

    const [isWishlisted, setIsWishlisted] = useState<boolean>(wishlist.includes(movieData.titre));
    const movieWishlist = () => {
        setIsWishlisted(!isWishlisted);
        isWishlisted || wishlist.includes(movieData.titre) ? "Ce film est déjà ajouté" : addMovieApp(movieData, isWishlisted);
    }

    const [count, setCount] = useState<number>(0);

    // Function to handle like button click

    const countLike = () => {
        setCount(count + 1);
    }

    const formatMinutes = (minutes: number): string => {
        const heures = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${heures}h${mins.toString().padStart(2, '0')}`;
    }

    return (
        <div>
            <div className="bg-gray-700 block max-w-sm p-6 border-none rounded-base relative w-64 group overflow-hidden shadow-lg">
                <img className="rounded-base mx-auto object-cover transition-opacity duration-300 group-hover:opacity-40 h-70" src={movieData.poster} alt={movieData.titre} />
                <div
                    className="absolute inset-0 flex items-center justify-center text-white opacity-0 translate-y-100 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-900 ease-out bg-black flex-col"
                >
                    <h5 className="mb-5 text-2xl font-semibold tracking-tight text-white text-center">{movieData.titre}</h5>
                    <p className="mb-1 text-white text-center">{formatMinutes(movieData.durée)}</p>
                    <p className="mb-3 text-white text-center">{movieData.acteur.join(', ')}</p>
                    <p className="mb-6 text-white text-center">{movieData.résumé.slice(0, 100)}...</p>
                    <div className="flex justify-evenly gap-2">
                        <div>
                            <button onClick={() => countLike()} className="inline-flex items-center text-black bg-red-700 box-border border-none hover:bg-red-500 hover:text-heading focus:ring-4 focus:bg-red-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                Like {count}
                            </button>
                        </div>
                        <div>
                            <button onClick={() => movieWishlist()} className="inline-flex items-center text-black bg-teal-700 box-border border-none hover:bg-teal-500 hover:text-heading focus:ring-4 focus:ring-teal-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none hover:cursor-pointer">
                                Add to wishlist {isWishlisted ? <FaCheck className="size-5 ml-2" /> : <LuCross className="size-5 ml-2" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;