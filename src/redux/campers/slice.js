import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCamperById,
  fetchCampers,
  fetchCampersByParams,
} from "./operations.js";

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
    oneCamper: null,
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
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampersByParams.pending, handlePending)
      .addCase(fetchCampersByParams.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchCampersByParams.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.oneCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { clearItems } = campersSlice.actions;
export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
