import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { validateEmail } from "../util/validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import { LoaderCircle } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";
import { useContext } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSubgmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    //login api call
    try {
      if (!validateEmail(email)) {
        setError("Email is not validate format");
        setIsLoading(false);
        return;
      }
      if (!password.trim()) {
        setError("password is required");
        setIsLoading(false);
        return;
      }
      setError("");

      //login api call

      const response = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        setUser(user);
        navigate("/dashboard");
      }

      

    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        console.error("Something went wrong", err);
        toast.error("Something went wrong. Please try again later.");
      }

      setError(err.message);
    } finally {
      setIsLoading(false);
      toast.dismiss();
    }
  };
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-grow w-full relative flex items-center justify-center overflow-hidden">
        <img
          src={assets.login_bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />

        <div className="relative z-10 w-full max-w-lg px-6">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8">
            <h3 className="text-2xl font-semibold text-black text-center mb-2">
              Welcome Back
            </h3>
            <p className="text-sm text-slate-700 text-center mb-8">
              Please enter your details to login in
            </p>

            <form onSubmit={handleSubgmit} className="space-y-4">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                placeholder="name@example.com"
                type="text"
              />

              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="enter your password"
                type="password"
              />

              <p
                className={`text-red-800 text-sm text-center bg-red-50 p-2 rounded ${
                  error ? "block" : "hidden"
                }`}
              >
                {error}
              </p>

              <button
                disabled={isLoading}
                type="submit"
                className={`bg-blue-500 hover:bg-blue-800 text-white w-full py-3 text-lg font-medium flex items-center justify-center gap-2 ${
                  isLoading
                    ? "opacity-60 cursor-not-allowed"
                    : "opacity-95 cursor-pointer"
                }`}
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="animalte-spin h-5 w-5" />
                    Logging In...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <p>
                Don't have an account? Click Here
                <Link
                  to="/signup"
                  className="font-medium text-blue-500  underline hover:text-blue-800 transition-color"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
