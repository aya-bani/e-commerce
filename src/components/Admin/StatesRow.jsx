import StatCard from "./StatCard";
import EarningsIcon from "../../assets/admin/images/earning.png"; 
import BalanceIcon from "../../assets/admin/images/balance.png";
import SalesIcon from "../../assets/admin/images/sales.png";

const StatesRow = () => {
  const stats = [
    {
      icon: { src: EarningsIcon, bgColor: "#E3FCEF" },
      title: "Earning",
      value: "$198k",
      trend: "↑ 37.8%",
      trendDescription: "this month",
      trendColor: "green",
    },
    {
      icon: { src: BalanceIcon, bgColor: "#E0F2FE" },
      title: "Balance",
      value: "$2.4k",
      trend: "↓ 2%",
      trendDescription: "this month",
      trendColor: "red",
    },
    {
      icon: { src: SalesIcon, bgColor: "#FCE7F3" },
      title: "Total Sales",
      value: "$89k",
      trend: "↑ 11%",
      trendDescription: "this week",
      trendColor: "green",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatesRow;
