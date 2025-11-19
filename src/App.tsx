import Footer from "./assets/components/Footer";
import Head from "./assets/components/Head";
import Movie from "./assets/components/Movie";
import { movies } from "./assets/data/movie";

function App() {


  return (
      <div className="bg-linear-to-b from-gray-800 to-red-950">
        <Head />
        <div className="flex justify-evenly flex-wrap gap-0.5 pt-4 gap-y-5">
          {
            movies.length > 0 ? (
              movies.map((movie: any) => (
                <div>
                  <Movie movieData={movie} />
                </div>
              ))) : ("No movies available")
          }
        </div>
        <Footer />

      </div>
  )
}

export default App
