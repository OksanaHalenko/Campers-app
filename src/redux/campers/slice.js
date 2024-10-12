import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isFavorite: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.isFavorite.includes(id)) {
        state.isFavorite = state.isFavorite.filter(
          (favoriteId) => favoriteId !== id
        );
      } else {
        state.isFavorite.push(id);
      }
    },
  },
  extraReducers: (bundler) => {
    bundler
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { clearItems } = campersSlice.actions;
export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
