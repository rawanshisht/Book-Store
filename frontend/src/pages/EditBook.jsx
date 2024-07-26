import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5555/api/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setPublishYear(res.data.publishYear);
        setIsLoading(false);
        enqueueSnackbar("Book edited successfully", { variant: "success" });
      })
      .catch((err) => {
        setIsLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  }, []);
  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setIsLoading(true);
    axios
      .put(`http://localhost:5555/api/books/${id}`, data)
      .then(() => {
        setIsLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("An error occurred, Please check Console");
        console.log(err);
      });
  };
  return (
    <div className="p-4 bg-slate-50">
      <BackButton />
      <h1 className="text-3xl my-4 text-teal-900">Edit Book</h1>
      {isLoading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-teal-900 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-teal-900">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 bg-gray-50 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-teal-900">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 bg-gray-50 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-teal-900">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 bg-gray-50 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 bg-teal-900 m-8 rounded-lg w-1/2 text-white"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditBook;
