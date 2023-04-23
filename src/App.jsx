import { useEffect, useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";

function App() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if(isDark){
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark]);
  return (
    <div className="App font-['Nunito_Sans'] text-[14px] bg-grey-100 min-h-screen dark:bg-slate-900 duration-200">
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
      <Home />
    </div>
  );
}

export default App;
