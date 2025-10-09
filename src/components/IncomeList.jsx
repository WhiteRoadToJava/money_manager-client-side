import { Download, Mail } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard";
import moment from "moment";

const IncomeList = ({transations, onDelete}) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Sources</h5>
        <div className="flex items-center justify-end gap-2">
          <button className="card-btn" >
                <Mail size={15} calcMode="text-base" /> Email
          </button>
          <button className="card-btn">
                <Download size={15} calcMode="text-base" /> Download
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        {/* display the incomes */}
        {transations?.map((income) =>(
                <TransactionInfoCard 
                key={income.id}
                title={income.name}
                icon={income.icon}
                date={moment(income.date).format("DD-MM-YYYY")}
                amount={income.amount}
                type={income.type}
                onClick={() => onDelete(income.id)}
                />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
