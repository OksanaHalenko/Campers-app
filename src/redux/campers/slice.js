import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
    toggleFavorite: (state, action) => {
      const { id, favorite } = action.payload;

      const camper = state.items.find((item) => item.id === id);
      if (camper) {
        camper.favorite = favorite;
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
