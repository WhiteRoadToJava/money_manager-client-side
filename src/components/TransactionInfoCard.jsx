import { icons, UtensilsCrossed } from "lucide-react";
import Transactions from "./Transactions";

const TransactionInfoCard = ({
  icon,
  title,
  date,
  amount,
  type, 
  hideDeleteBtn,
  ondelete,
}) => {
  const getAmountStyles = () =>
    type === "income"
      ? "bg-green-50  text-green-800"
      : "bg-red-50 text-red-800";

  return (
    <div className="card">
      <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
        <div className="w-12 h-12 flex items-center justify-center text-xl twxt-gray-800 bg-gray-100 rounded-full">
          {icon ? (
            <img src={icon} alt={title} className="h-6 w-5" />
          ) : (
            <UtensilsCrossed className="text-purple-800" />
          )}
        </div>
      </div>
    </div>
  );
};
export default TransactionInfoCard;
