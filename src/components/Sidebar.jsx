import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { User } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({activeMenu}) => {
    const {user} = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20"> {/* top-[61px] is the height of the Menubar */}
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                {user?.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt="profile image" className="w-20 h-20 bg-slate-400 rounded-full object-cover"/>
                ): (
                    <User className="w-20 h-20 text-xl" />
                )}
                <h2 className="font-semibold text-lg">{user?.fullName || 'Guest'}</h2>
            </div>
            {/* Sidebar navigation items */}
            <nav>
                {SIDE_BAR_DATA.map((item, index) => (
                    <button
                    key={`menu_${index}`}
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-4 text-[15px] py-3 px-4 rounded-lg mb-3 ${activeMenu === item.label ? 'text-white bg-purple-800' : ''} `}>
                        <item.icon className="text-xl"/>
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default Sidebar;