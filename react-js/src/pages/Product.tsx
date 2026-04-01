import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/slice";

const Product = () => {
  const dispatch = useDispatch();
  const product = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "data:image/jpeg;base64,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",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image:
        "data:image/jpeg;base64,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",
      description: "Stylish smartwatch with heart rate monitor and GPS.",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {product.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-800 font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => dispatch(addItem(1))}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeItem(1))}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
