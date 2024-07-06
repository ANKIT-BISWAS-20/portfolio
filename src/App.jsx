import { useState } from 'react'
import { Button } from "@nextui-org/button";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  console.log(darkMode)
  return (
    <div className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className='h-full'>
        <Home />
      </div>
    </div>
  )
}

export default App
