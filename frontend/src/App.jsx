import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
    </Routes>
  );
};

export default App;
