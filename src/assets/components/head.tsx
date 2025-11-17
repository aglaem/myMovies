
function Head() {


    return (
        <>
            <div className='w-screen bg-[url("./assets/img/movie_bg.webp")] bg-cover p-6'>
                <div className='flex items-center'>
                    <img src="src/assets/img/movie.webp" alt="Movie" className='w-1/15 rounded-s-4xl rounded-e-4xl' />
                    <h1 className='text-amber-800 text-center text-5xl font-momo p-5 font-black'>My movies</h1>
                </div>
            </div>
        </>
    )
}

export default Head
