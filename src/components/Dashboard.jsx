import { Sidebar } from "lucide-react";
import { useContext } from "react";
import {AppContext} from "../context/AppContext";
import Menubar from "../components/Menubar";

const Dashboard = ({ children, activeMenu }) => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <Menubar activeMenu={activeMenu} />
      {user && (
        <div className="flex">
        <div className="max-[1000px]:hidden">
                <Sidebar activeMenu={activeMenu} />
                </div>
                <div className="grow max-5">{children}</div>
        </div>)}
    </div>
  );
};

export default Dashboard;
