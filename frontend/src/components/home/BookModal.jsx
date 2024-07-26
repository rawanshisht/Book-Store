/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h4 className="my-2 text-teal-900">{book._id}</h4>
        <h2 className="w-fit px-4 py-1 bg-teal-900 rounded-l">
          {book.publishYear}
        </h2>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-yellow-300 text-2xl" />
          <h2 className="my-1 text-teal-900">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-yellow-300 text-2xl" />
          <h2 className="my-1 text-teal-900">{book.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
