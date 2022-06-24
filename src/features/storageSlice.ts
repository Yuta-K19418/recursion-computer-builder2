import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComputerPart, SelectStorageBrandAction, Storage } from "../types";

export interface StorageState {
  data: ComputerPart[];
  type: string[];
  storageCapacity: string[];
  brands: string[];
  models: string[];
}

const initialState: StorageState = {
  data: [],
  type: [Storage.hdd, Storage.ssd],
  storageCapacity: [],
  brands: [],
  models: [],
};

/* eslint-disable no-param-reassign */
export const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    // clearData: (state) => {
    //   state.data = [];
    //   state.type = [Storage.hdd, Storage.ssd];
    //   state.storageCapacity = [];
    //   state.brands = [];
    //   state.models = [];
    // },
    setStorageCapacities: (state, action: PayloadAction<string>) => {
      const capacities: string[] = [];
      state.data.map((storage) => {
        const pattern = /[0-9]{1,3}[MGT]B/g;
        const capacity = storage.Model.match(pattern);
        if (
          capacity !== null &&
          capacity.length > 0 &&
          action.payload === storage.Type &&
          capacities.indexOf(capacity[0]) === -1
        ) {
          capacities.push(capacity[0]);
        }
        return storage;
      });
      state.storageCapacity = capacities.sort();
      state.brands = [];
      state.models = [];
    },
    setBrands: (state, action: PayloadAction<string>) => {
      const brands: string[] = [];
      state.data.map((storage) => {
        if (storage.Model.includes(action.payload) && brands.indexOf(storage.Brand) === -1) {
          brands.push(storage.Brand);
        }
        return storage;
      });
      brands.sort();
      state.brands = brands;
    },
    setModels: (state, action: PayloadAction<SelectStorageBrandAction>) => {
      const models: string[] = [];
      state.data
        .filter((storage) => storage.Brand === action.payload.brand)
        .map((storage) => {
          if (storage.Model.includes(action.payload.storageCapacity) && models.indexOf(storage.Model) === -1) {
            models.push(storage.Model);
          }
          return storage;
        });
      models.sort();
      state.models = models;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStorageDataAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
/* eslint-enable no-param-reassign */

export const fetchStorageDataAsync = createAsyncThunk<ComputerPart[]>(
  "fetchStorageData",
  async (): Promise<ComputerPart[]> => {
    const hdd = await fetch(`https://api.recursionist.io/builder/computers?type=hdd`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => response.json() as Promise<ComputerPart[]>);

    const ssd = await fetch(`https://api.recursionist.io/builder/computers?type=ssd`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
    return hdd.concat(ssd);
  }
);

export const { setStorageCapacities, setBrands, setModels } = storageSlice.actions;

export default storageSlice.reducer;
