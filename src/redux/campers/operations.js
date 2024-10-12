import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const defaultParams = {
  page: 1,
  limit: 4,
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (customParams = {}, thunkAPI) => {
    try {
      const params = { ...defaultParams, ...customParams };
      const { data } = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params,
        }
      );

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
