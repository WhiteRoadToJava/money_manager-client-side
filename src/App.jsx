import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Filter from "./pages/Filter";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
  <> { /* it called a fragment */}
  <Toaster />
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/category" element={<Category />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/filter" element={<Filter />} />
    </Routes>
  </BrowserRouter>
  </>
  )
};






export default App;