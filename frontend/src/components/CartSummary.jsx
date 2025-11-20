import React from 'react'

export default function CartSummary({ totalQty, totalPrice }) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h4 className="font-semibold mb-2">Cart Summary</h4>
      <div className="flex justify-between mb-1">
        <span>Total items</span>
        <span>{totalQty}</span>
      </div>
      <div className="flex justify-between font-medium text-lg">
        <span>Total</span>
        <span>₹ {totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}
