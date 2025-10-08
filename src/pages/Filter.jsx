import Dashboard from "../components/Dashboard.jsx";
import { useUser } from "../hooks/useUser.jsx";


const Filter = () => {
        useUser();

        return <Dashboard>Filter Page</Dashboard>;
        };

export default Filter;