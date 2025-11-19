import Head from "./assets/components/Head";
import Movie from "./assets/components/Movie";

function App() {


  return (
    <>
      <Head />
      <div className="flex justify-evenly flex-wrap gap-0.5 mt-4 gap-y-5">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </>
  )
}

export default App
