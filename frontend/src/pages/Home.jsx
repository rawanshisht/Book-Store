/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import Navbar from "../components/Navbar";
function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showType, setShowType] = useState("card");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5555/api/books")
      .then((res) => {
        setBooks(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-slate-50	w-full min-h-screen">
      {/* <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-600"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-600"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div> */}
      <div className="flex justify-between items-center mx-2">
        <h1 className="text-xl my-8 text-teal-900 px-4">Browse Books</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-teal-900 text-4xl" />
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) : showType === "table" ? (
        ""
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}

export default Home;
