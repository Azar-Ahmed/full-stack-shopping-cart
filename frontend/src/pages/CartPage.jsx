import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import {
  fetchCart,
  addToCartApi,
  removeFromCartApi,
} from '../features/cart/cartThunks'

export default function CartPage() {
  const dispatch = useDispatch()
  const { items, totalQty, totalPrice, loading, error } = useSelector(
    (s) => s.cart,
  )

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  const handleRemove = (id) => {
    dispatch(removeFromCartApi({ id }))
  }

  const handleIncrement = (id) => {
    const item = items.find((i) => i.id === id)
    if (item) {
      dispatch(addToCartApi({ productId: item.product.id, quantity: 1 }))
    }
  }

  const handleDecrement = (id) => {
    const item = items.find((i) => i.id === id)
    if (item && item.quantity > 1) {
      dispatch(addToCartApi({ productId: item.product.id, quantity: -1 }))
    } else {
      // Remove item if quantity goes to 0
      handleRemove(id)
    }
  }

  if (loading) return <div className="p-6">Loading cart...</div>
  if (error) return <div className="p-6 text-red-600">{error}</div>

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white rounded shadow-sm p-4">
        <h3 className="font-semibold text-lg mb-4">Your Cart</h3>
        {items.length === 0 ? (
          <div className="text-gray-600">Your cart is empty.</div>
        ) : (
          items.map((it) => (
            <CartItem
              key={it.id}
              item={it}
              onRemove={handleRemove}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))
        )}
      </div>

      <div>
        <CartSummary totalQty={totalQty} totalPrice={totalPrice} />
      </div>
    </div>
  )
}
