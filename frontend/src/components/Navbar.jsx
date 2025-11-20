import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const totalQty = useSelector((state) => state.cart.totalQty)

  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>
        <nav className="flex gap-4">
          <Link to="/">Products</Link>
          <Link to="/cart" className="relative">
            Cart
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold px-2 rounded-full">
                {totalQty}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
