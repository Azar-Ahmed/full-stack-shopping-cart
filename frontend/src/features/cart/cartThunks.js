import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosClient.get("/cart");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const addToCartApi = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity = 1 }, { rejectWithValue }) => {
    try {
      const res = await axiosClient.post("/cart", { productId, quantity });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const removeFromCartApi = createAsyncThunk(
  "cart/removeFromCart",
  async ({ id }, { rejectWithValue }) => {
    try {
      await axiosClient.delete(`/cart/${id}`);
      return { id };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);
