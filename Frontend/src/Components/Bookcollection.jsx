import React from "react";
import list from "../../src/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom";
function Bookcollection (){
  return(
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl text-violet-400">Book{" "} <span className="text-purple-500">Are A</span> Uniquely <span className="text-purple-500">Portable</span> Magic...</h1>
      </div>
      <div className="flex justify-center mt-9">
          <img
            src="book6.webp"
            alt="book"
            style={{ height: "555px", width: "444px" }}
            className=""
          />
      </div>
      <div className="flex justify-center">
        <Link to="/">
        <button  className=" mt-9 bg-violet-200 px-4 py-2 hover:bg-violet-300 rounded-md">Back</button> 
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Bookcollection ;