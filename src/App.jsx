import { useState } from 'react'
import { Button } from "@nextui-org/button";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  return (
    <div className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className='h-full'>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
