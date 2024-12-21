import Sidebar from '../../components/admin/Sidebar'
import StatesRow from '../../components/admin/StatesRow'
import { Overview } from '../../components/admin/Overview'
import { CustomerChart } from '../../components/admin/CustomerChart'
import { ProductSell } from '../../components/admin/ProductSell'
const Dashboard = () => {
  return (
    <div className="flex bg-white h-screen">
      <Sidebar/>
      {/* Main Content */}
      <main className="flex-1 flex flex-col ">

        <header className="p-4  shadow flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md w-1/3"
          />
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-gray-500"></i> {/* FontAwesome Icon */}
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 bg-[#F2EFFF] p-8">
          <div className=" h-full flex flex-col items-center justify-center">
          <div className="p-6  min-w-full">
            <StatesRow />
          </div>
          <div className="p-8">
            <div className="grid grid-cols-3 gap-6">
              <Overview />
              <CustomerChart />
            </div>
            <ProductSell />
          </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default Dashboard
