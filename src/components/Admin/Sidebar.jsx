
const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <aside className="w-64 min-h-screen text-purple-500 flex flex-col border-r border-gray-200">
        {/* Logo */}
        <div className="p-4 flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <span className="text-purple-600 font-bold">W</span> {/* Replace with your logo */}
          </div>
          <span className="text-xl font-semibold">Brand</span>
        </div>

        {/* Menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center text-white px-4 py-2 bg-purple-700 rounded-md"
              >
                <i className="fas fa-home mr-3"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500  hover:text-white rounded-md"
              >
                <i className="fas fa-users mr-3"></i>
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white  rounded-md"
              >
                <i className="fas fa-folder mr-3"></i>
                Customers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white  rounded-md"
              >
                <i className="fas fa-calendar mr-3"></i>
                Income
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white  rounded-md"
              >
                <i className="fas fa-file mr-3"></i>
                Promote
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white rounded-md"
              >
                <i className="fas fa-chart-line mr-3"></i>
                Help
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar
