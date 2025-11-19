const Movie = ({movieData}: any) => {

    console.log(movieData.titre);
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
                        <a href="#" className="inline-flex items-center text-black bg-red-700 box-border border-none hover:bg-red-500 hover:text-heading focus:ring-4 focus:bg-red-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Like 0
                        </a>
                        <a href="#" className="inline-flex items-center text-black bg-teal-700 box-border border-none hover:bg-teal-500 hover:text-heading focus:ring-4 focus:ring-teal-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Add to wishlist
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;