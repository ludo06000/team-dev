import './App.css'
import { useEffect, useState } from 'react'
import { PreHome } from './pages/PreHome';
import { HomePage } from './pages/HomePage';

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
      {page == 'preHome' && <PreHome />}
      {page == 'home' && <HomePage />}
    </>
  )
}

export default App
