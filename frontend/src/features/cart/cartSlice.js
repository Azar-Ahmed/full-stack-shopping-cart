import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCartApi, removeFromCartApi } from "./cartThunks";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // { id, productId, product: {id,name,price,image}, quantity }
    totalQty: 0,
    totalPrice: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items || [];
        state.totalQty = action.payload.totalQty || 0;
        state.totalPrice = action.payload.totalPrice || 0;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch cart";
      })
      .addCase(addToCartApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartApi.fulfilled, (state, action) => {
        state.loading = false;
        // server returns updated cart
        const data = action.payload;
        if (data.items) {
          state.items = data.items;
          state.totalQty = data.totalQty;
          state.totalPrice = data.totalPrice;
        }
      })
      .addCase(addToCartApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add to cart";
      })
      .addCase(removeFromCartApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCartApi.fulfilled, (state, action) => {
        state.loading = false;
        // optimistic: remove locally
        state.items = state.items.filter((i) => i.id !== action.payload.id);
        state.totalQty = state.items.reduce((s, it) => s + it.quantity, 0);
        state.totalPrice = state.items.reduce(
          (s, it) => s + it.quantity * (it.product?.price || 0),
          0
        );
      })
      .addCase(removeFromCartApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to remove item";
      });
  },
});

export default cartSlice.reducer;
