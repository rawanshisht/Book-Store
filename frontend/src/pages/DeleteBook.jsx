import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:5555/api/books/${id}`)
      .then(() => {
        setIsLoading(false);
        navigate("/home");
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
      })
      .catch((err) => {
        setIsLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4 bg-slate-50">
      <BackButton />
      <h1 className="text-3xl my-4 text-teal-900">Delete Book</h1>
      {isLoading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-gray-500 rounded-xl w-[600px] p-8 mx-auto">
        <h1 className="text-2xl text-teal-900">
          Are you sure you want to delete this book?
        </h1>
        <button
          className="p-4 bg-red-600 text-white m-8 w-1/4"
          onClick={handleDeleteBook}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
