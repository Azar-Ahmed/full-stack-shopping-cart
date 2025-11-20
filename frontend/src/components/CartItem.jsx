import React from 'react'

export default function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center gap-4 p-3 border-b hover:bg-gray-50 transition-colors">
      <img
        src={item.product?.image}
        alt={item.product?.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <div className="font-semibold">{item.product?.name}</div>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => onDecrement(item.id)}
            className="px-2 py-1 border rounded hover:bg-gray-200 transition"
          >
            -
          </button>
          <span className="px-2 py-1 border rounded">{item.quantity}</span>
          <button
            onClick={() => onIncrement(item.id)}
            className="px-2 py-1 border rounded hover:bg-gray-200 transition"
          >
            +
          </button>
        </div>
        <div className="text-gray-700 mt-1">
          ₹ {(item.product?.price * item.quantity).toFixed(2)}
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 text-sm px-2 py-1 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"
      >
        Remove
      </button>
    </div>
  )
}
