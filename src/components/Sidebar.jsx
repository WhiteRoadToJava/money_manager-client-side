import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { User } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets"

const Sidebar = ({activeMenu}) => {
    const {user} = useContext(AppContext)
    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
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
                    <a // Using <a> for navigation. Use <Link> from react-router-dom if you're using it.
                    key={`menu_${index}`}
                    href={item.path}
                    className="w-full flex items-center gap-4 text-[15px] py-3 px-4 rounded-lg mb-3 hover:bg-gray-100 transition-colors duration-200">
                        <item.icon className="text-xl"/>
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default Sidebar;