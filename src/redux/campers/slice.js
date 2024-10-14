import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCamperById,
  fetchCampers,
  fetchMoreCampers,
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
    totalCampers: null,
    isFavorite: [],
    location: "",
    selectCheckboxes: [],
    radioValue: "",
    oneCamper: null,
    loading: false,
    error: null,
  },
  reducers: {
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
    saveLocation: (state, action) => {
      state.location = action.payload;
    },
    saveRadioValue: (state, action) => {
      state.radioValue = action.payload;
    },
    toggleCheckboxes: (state, action) => {
      const checkbox = action.payload;
      if (state.selectCheckboxes.includes(checkbox)) {
        state.selectCheckboxes = state.selectCheckboxes.filter(
          (item) => item !== checkbox
        );
      } else {
        state.selectCheckboxes.push(checkbox);
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
        state.totalCampers = action.payload.total;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchMoreCampers.pending, handlePending)
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.items];
        state.totalCampers = action.payload.total;
      })
      .addCase(fetchMoreCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.oneCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { saveLocation } = campersSlice.actions;
export const { saveRadioValue } = campersSlice.actions;
export const { toggleCheckboxes } = campersSlice.actions;
export const { toggleFavorite } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
