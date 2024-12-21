export const ProductSell = () => {
    const products = [
      {
        name: "Abstract 3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stock: 32,
        price: 45.99,
        sales: 20,
        image: "abstract3d.jpg",
      },
      {
        name: "Sarphens Illustration",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stock: 32,
        price: 45.99,
        sales: 20,
        image: "sarphens.jpg",
      },
      // Add more products...
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Product Sell</h2>
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-lg"
          />
        </div>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr className="text-left">
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </td>
                <td>{product.stock} in stock</td>
                <td>${product.price}</td>
                <td>{product.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  