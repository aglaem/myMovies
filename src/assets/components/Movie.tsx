const Movie = () => {
    return (
        <div>
            <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <a href="#">
                    <img className="rounded-base mx-auto" src="https://posters.movieposterdb.com/05_02/1999/0137523/l_7868_0137523_d46e33b9.jpg" alt="" />
                </a>
                <a href="#">
                    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading text-center">Fight Club</h5>
                </a>
                <p className="mb-6 text-body text-center">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
                <div className="flex justify-evenly">
                    <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Like 0
                    </a>
                    <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Add to wishlist
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Movie;