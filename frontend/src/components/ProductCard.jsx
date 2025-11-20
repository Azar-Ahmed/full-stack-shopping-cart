export default function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-gray-700 font-medium">₹ {product.price}</span>
        <button
          onClick={() => onAdd(product.id)}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  )
}
