import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";

export const useUser = () => {
  const [user, setUser, clearUser] = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return;
    }
    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await axiosConfig.get(API_ENDPOINTS.GET_USER_INFO);
        if (isMounted) {
          setUser(response.data);
        }
      } catch (err) {
        console.log("Something went wrong while fetching user info", err);
        if (isMounted) {
          clearUser();
          navigate("/login");
        }
      }
    };
    fetchUserInfo();
    return () => {
        isMounted = false;
    }
  }, [user, setUser, clearUser, navigate]);
};

