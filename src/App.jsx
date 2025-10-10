import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Filter from "./pages/Filter";
import { Toaster } from "react-hot-toast";
import TestComponent from "./pages/TestComponent";


const App = () => {
  return (
  <> { /* it called a fragment */}
  <Toaster />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root/>} />
      
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/category" element={<Category />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/testcomponent" element={<TestComponent />} />
    </Routes>
  </BrowserRouter>


  </>
  )
};

const Root = () => {
  const isAutenticated = !!localStorage.getItem("token");
  return isAutenticated ? (
    <Navigate to="/dashboard" />
   ) : (
    <Navigate to="/login" />
   )
}






export default App;