import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComputerPart } from "../types";

export interface RamState {
  data: ComputerPart[];
  quantity: string[];
  brands: string[];
  models: string[];
}

const initialState: RamState = {
  data: [],
  quantity: ["1", "2", "3", "4"],
  brands: [],
  models: [],
};

/* eslint-disable no-param-reassign */
export const ramSlice = createSlice({
  name: "ram",
  initialState,
  reducers: {
    // clearData: (state) => {
    //   state.data = [];
    //   state.quantity = [];
    //   state.brands = [];
    //   state.models = [];
    // },
    setModels: (state, action: PayloadAction<string>) => {
      const models: string[] = [];
      state.data
        .filter((ram) => ram.Brand === action.payload)
        .map((ram) => {
          if (models.indexOf(ram.Model) === -1) {
            models.push(ram.Model);
          }
          return ram;
        });
      models.sort();
      state.models = models;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRamDataAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      const brands: string[] = [];
      state.data.map((ram) => {
        if (brands.indexOf(ram.Brand) === -1) {
          brands.push(ram.Brand);
        }
        return ram;
      });
      brands.sort();
      state.brands = brands;
    });
  },
});
/* eslint-enable no-param-reassign */

export const fetchRamDataAsync = createAsyncThunk<ComputerPart[]>("fetchRamData", async (): Promise<ComputerPart[]> => {
  const rams = await fetch(`https://api.recursionist.io/builder/computers?type=ram`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
  return rams;
});

export const { setModels } = ramSlice.actions;

export default ramSlice.reducer;
