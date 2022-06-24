import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComputerPart } from "../types";

export interface CpuState {
  data: ComputerPart[];
  brands: string[];
  models: string[];
}

const initialState: CpuState = {
  data: [],
  brands: [],
  models: [],
};

/* eslint-disable no-param-reassign */
export const cpuSlice = createSlice({
  name: "cpu",
  initialState,
  reducers: {
    // clearData: (state) => {
    //   state.data = [];
    //   state.brands = [];
    //   state.models = [];
    // },
    setModels: (state, action: PayloadAction<string>) => {
      const models: string[] = [];
      state.data
        .filter((cpu) => cpu.Brand === action.payload)
        .map((cpu) => {
          if (models.indexOf(cpu.Model) === -1) {
            models.push(cpu.Model);
          }
          return cpu;
        });
      models.sort();
      state.models = models;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpuDataAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      const brands: string[] = [];
      state.data.map((cpu) => {
        if (brands.indexOf(cpu.Brand) === -1) {
          brands.push(cpu.Brand);
        }
        return cpu;
      });
      brands.sort();
      state.brands = brands;
    });
  },
});
/* eslint-enable no-param-reassign */

export const fetchCpuDataAsync = createAsyncThunk<ComputerPart[]>("fetchCpuData", async (): Promise<ComputerPart[]> => {
  const cpus = await fetch(`https://api.recursionist.io/builder/computers?type=cpu`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
  return cpus;
});

export const { setModels } = cpuSlice.actions;

export default cpuSlice.reducer;
