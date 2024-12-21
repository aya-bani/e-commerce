export const CustomerChart = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold">Customers</h2>
        <div className="flex justify-center items-center mt-4">
          <div className="relative w-24 h-24">
            <svg className="absolute top-0 left-0 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="gray"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="purple"
                strokeWidth="10"
                fill="none"
                strokeDasharray="calc(65 * 2.5px) calc(100 * 2.5px)"
                strokeDashoffset="0"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">65%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  