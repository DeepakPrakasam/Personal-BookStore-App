import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Collectionbook from "./Collection/Collectionbook";
import Signup from "./Components/Signup";
function App (){
  return(
    <>
    
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collectionbook/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App;