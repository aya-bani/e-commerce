export const Overview = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Overview</h2>
          <select className="border rounded-lg p-2">
            <option>Quarterly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className="mt-4">
          <div className="relative">
            <div className="h-40 grid grid-cols-12 gap-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div
                    className={`h-${index === 7 ? "40" : "24"} w-4 bg-${index === 7 ? "purple-600" : "gray-300"} rounded-lg`}
                  ></div>
                  <p className="text-xs mt-1">{month}</p>
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md">
              35%
            </div>
          </div>
        </div>
      </div>
    );
  };
  