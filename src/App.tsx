import './App.css'
import Head from './assets/components/head'

function App() {


  return (
    <>
      <Head />
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-80">
        <div className="bg-gray-800 rounded-md h-6 mb-4"></div>

        <div className="relative bg-gray-700 rounded-md h-48 mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)0px,rgba(255,255,255,0.05)10px,transparent_10px,transparent_20px)]"></div>
        </div>
        <div className="bg-gray-800 rounded-md h-6"></div>
      </div>
    </>
  )
}

export default App
