import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function ShowBook() {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5555/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="p-4 bg-slate-50">
      <BackButton />
      <h1 className="text-3xl my-4 text-teal-900">Show Book</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-teal-900 rounded-xl w-fit p-4 mx-auto">
          <div className="my-4">
            <span className="text-xl mr-4 text-teal-900">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-teal-900">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-teal-900">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-teal-900">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-teal-900">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-teal-900">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
