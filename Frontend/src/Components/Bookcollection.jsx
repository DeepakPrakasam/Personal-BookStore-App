import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Bookcollection() {
  const [book, setBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  // Filter books based on the search query
  const filteredBooks = book.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl text-violet-400">
            Book{" "}
            <span className="text-purple-500">Are A</span> Uniquely{" "}
            <span className="text-purple-500">Portable</span> Magic...
          </h1>
        </div>

        <div className="flex justify-center mt-9 ">
          <img
            src="book6.webp"
            alt="book"
            style={{ height: "555px", width: "444px" }}
          />
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <button className="mt-9 bg-violet-200 px-4 py-2 hover:bg-violet-300 rounded-md">
              Back
            </button>
          </Link>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search by name or category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4">
          {filteredBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookcollection;
