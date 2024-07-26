import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setIsLoading(true);
    axios
      .post(`http://localhost:5555/api/books`, data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        //alert("An error occurred, Please check Console");
        console.log(err);
      });
  };
  return (
    <div className="p-4 bg-slate-50">
      <BackButton />
      <h4 className="text-3xl my-4 text-teal-900">Create Book</h4>
      {isLoading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-teal-900 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-teal-900">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 bg-gray-50 border-gray-500 px-4 py-2 w-full text-gray-900"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-teal-900">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 bg-gray-50 border-gray-500 px-4 py-2 w-full text-gray-900"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-teal-900">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 bg-gray-50 border-gray-500 px-4 py-2 w-full text-gray-900"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 bg-teal-900 m-8 rounded-lg w-1/2 text-white"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateBook;
