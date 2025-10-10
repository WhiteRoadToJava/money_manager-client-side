import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { prepareIncomeLineChartData } from "../util/utol.js";
import CustomLineChart from "../components/CustomLineChart.jsx";



const ExpenseOverview = ({transactions, onExpenseIncome}) => {
        const [chartData, setChartData] = useState([]);

        useEffect(() => {
                const result = prepareIncomeLineChartData(transactions);
                setChartData(result);
                return () => {};
        }, [transactions]);



        return (
                <div className="card">
                        <div className="flex items-center jusitfy-between">
                                <div className="">
                                        <h5 className="text-lg">Expense Overview</h5>
                                        <p className="text-xs text-gray-500 mt-0 5">Track your sending trends over time and gain insights into where your money goes.</p>
                                </div>
                                <button className="add-btn" onClick={onExpenseIncome}>
                                        <Plus size={16} className="text-lg" /> Add Expense
                                </button>
                        </div>

                        <div className="mt-10">
                                <CustomLineChart data={chartData} />
                        </div>
                </div>
        )
        };

        export default ExpenseOverview;