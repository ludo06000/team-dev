import { div } from 'three/examples/jsm/nodes/Nodes.js';
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [page, setPage] = useState('preHome');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage('home'); // Nom de la page que vous souhaitez afficher après 2 secondes
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {page == 'preHome' &&
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="basis-11/12 flex flex-col justify-center items-center">
              <div className="text-red-700 font-black text-5xl tracking-widest capitalize flex justify-center md:text-7xl">
                <p>T</p>
                <p>E</p>
                <p>A</p>
                <p>M</p>
                <p>&nbsp;</p>
                <p>D</p>
                <p>E</p>
                <p>V</p>
              </div>
              <div className="text-red-300 font-black text-base tracking-widest flex justify-center md:text-lg">
                <p className="mr-2">With</p>
                <p className="animate-heartbeat">💙</p>
                <p className="ml-2 mb-7">by Jerome & Ludo</p>
              </div>
            </div>
            <div className="basis-1/12 ">💌 : <a href="mailto:contact@team-dev.fr">contact@team-dev.fr</a></div>
        </div>
      }
      {page == 'home' &&
        <div>Bienvenue chez team dev</div>
      }
    </>
  )
}

export default App
