import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../features/products/productThunks'
import { addToCartApi, fetchCart } from '../features/cart/cartThunks'
import { toast } from 'react-toastify'

export default function ProductListPage() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCart())
  }, [dispatch])

  const handleAdd = (productId) => {
    dispatch(addToCartApi({ productId, quantity: 1 }))
      .then(() => {
        toast.success('Item added to cart!')
      })
      .catch(() => {
        toast.error('Failed to add item!')
      })
  }

  if (loading) return <div className="p-6">Loading products...</div>
  if (error) return <div className="p-6 text-red-600">{error}</div>

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={handleAdd} />
      ))}
    </div>
  )
}
