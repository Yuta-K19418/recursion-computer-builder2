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

export const cpuSlice = createSlice({
  name: "cpu",
  initialState,
  reducers: {
    clearData: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.data = [];
      // eslint-disable-next-line no-param-reassign
      state.brands = [];
      // eslint-disable-next-line no-param-reassign
      state.models = [];
    },
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
      // eslint-disable-next-line no-param-reassign
      state.models = models;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpuDataAsync.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
      const brands: string[] = [];
      state.data.map((cpu) => {
        if (brands.indexOf(cpu.Brand) === -1) {
          brands.push(cpu.Brand);
        }
        return cpu;
      });
      brands.sort();
      // eslint-disable-next-line no-param-reassign
      state.brands = brands;
    });
  },
});

export const fetchCpuDataAsync = createAsyncThunk<ComputerPart[]>("fetchCpuData", async (): Promise<ComputerPart[]> => {
  const cpus = await fetch(`https://api.recursionist.io/builder/computers?type=cpu`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
  return cpus;
});

export const { clearData, setModels } = cpuSlice.actions;

export default cpuSlice.reducer;
