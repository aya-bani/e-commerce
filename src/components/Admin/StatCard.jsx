
const StatCard = ({ icon, title, value, trend, trendDescription, trendColor }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 space-x-4">
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full"
        style={{ backgroundColor: icon.bgColor }}
      >
        <img src={icon.src} alt={title} className="w-6 h-6" />
      </div>
      {/* Content */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        <div className="flex items-baseline space-x-2">
          <p className="text-2xl font-bold">{value}</p>
          <span
            className={`text-sm font-medium ${trendColor === "green" ? "text-green-500" : "text-red-500"}`}
          >
            {trend}
          </span>
        </div>
        <p className="text-xs text-gray-400">{trendDescription}</p>
      </div>
    </div>
  );
};

export default StatCard;
