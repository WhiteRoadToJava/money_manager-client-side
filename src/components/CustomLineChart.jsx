import { addThousandsSeparator } from "../util/utol";

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;

      // group items by category for the tooltip display.
      const groupdeItemsForTooltip = dataPoint.items.reduce((acc, item) => {
        const { categoryName, amount } = item;
        if (!acc[categoryName]) {
          acc[categoryName] = { categoryName, totalAmount: 0 };
        }
        acc[categoryName].totalAmount += amount;
        return acc;
      }, {});
      const categoriesInTooltip = Object.values(groupdeItemsForTooltip);

      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          {/* display the formatted date at the top of the tooltip  */}
          <p className="text-sm font-semibold text-gray-800 mb-2">{label}</p>
          <hr className="my-2 border-gray-300" />
          {/* display the total amount for the date */}
          <p className="text-sm text-gray-700 font-bold mb-2">
            Total:{" "}
            <span className="text-purple-800">
              &#8388;{addThousandsSeparator(dataPoint.totalAmount)}
            </span>
          </p>
          {/*Iterate over the newly gouped catgories for a consolidated view */}

          {categoriesInTooltip && categoriesInTooltip.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-600 mb-1">
                Details
              </p>
              {categoriesInTooltip.map((groupedItem, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-xs text-gray-700"
                >
                  <span>{groupedItem.categoryName}</span>
                  <span>
                    &#8377;{addThousandsSeparator(groupedItem.totalAmount)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return null;
  };
  return <div>
        
  </div>;
};

export default CustomLineChart;
