import { Wallet, WalletCards } from "lucide-react";
import FinanceOverview from "../components/FinanceOverview";
import InfoCard from "../components/InfoCard";
import { useNavigate } from "react-router-dom";
import {useUser} from "../hooks/useUser.jsx";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS} from "../util/apiEndpoints";
import toast from "react-hot-toast";
import Dashboard from "../components/Dashboard.jsx";
import { addThousandsSeparator } from "../util/util.js";
import RecentTransactions from "../components/RecentTransactions.jsx";
import Transactions from "../components/Transactions.jsx";



const Home = () => {
    useUser();

    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDashboardData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axiosConfig.get(API_ENDPOINTS.DASHBOARD_DATA);
            if (response.status === 200) {
                setDashboardData(response.data);
            }
        }catch (error) {
            console.error('Something went wrong while fetching dashboard data:', error);
            toast.error('Something went wrong!');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDashboardData();
        return () => {};
    }, []);

  return (
    <Dashboard activeMenu="home">
      <div className="my-5 max-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<WalletCards />}
            lable="Total balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-purple-800"
          />

          <InfoCard
            icon={<Wallet />}
            label="Total  Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-green-800"
          />
          <InfoCard
            icon={<Wallet />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color="bg-red-800"
          />
        </div>
        <div className="grid grid-color.1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions
            transactions={dashboardData?.RecentTransactions}
            onMore={() => navigate("/expense")}
          />

          <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpense || 0}
          />

          <Transactions
            transactions={dashboardData?.RecentTransactions || []}
            onMore={() => navigate("/expense")}
            type="income"
            title="Recent Expences"
          />
          <Transactions
            transactions={dashboardData?.RecentTransactions || []}
            type="expense"
            title="Recent Income"
            onMore={() => navigate("/income")}
          />
        </div>
      </div>
    </Dashboard>
  );
};

export default Home;
