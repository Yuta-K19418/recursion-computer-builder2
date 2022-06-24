import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectionForm, Storage } from "../types";

export interface SelectionFormState {
  form: SelectionForm;
}

const initialState: SelectionFormState = {
  form: {
    cpu: {
      model: "",
      brand: "",
    },
    gpu: {
      model: "",
      brand: "",
    },
    memoryCard: {
      quantity: "",
      model: "",
      brand: "",
    },
    storage: {
      type: Storage.notSelected,
      storageCapacity: "",
      brand: "",
      model: "",
    },
  },
};

/* eslint-disable no-param-reassign */
export const selectionFormSlice = createSlice({
  name: "selectionForm",
  initialState,
  reducers: {
    resetData: (state) => {
      state = initialState;
    },
    selectCpuBrand: (state, action: PayloadAction<string>) => {
      state.form.cpu.brand = action.payload;
      state.form.cpu.model = "";
    },
    selectCpuModel: (state, action: PayloadAction<string>) => {
      state.form.cpu.model = action.payload;
    },
    selectGpuBrand: (state, action: PayloadAction<string>) => {
      state.form.gpu.brand = action.payload;
      state.form.gpu.model = "";
    },
    selectGpuModel: (state, action: PayloadAction<string>) => {
      state.form.gpu.model = action.payload;
    },
    selectMemoryCardQuantity: (state, action: PayloadAction<string>) => {
      state.form.memoryCard.quantity = action.payload;
      state.form.memoryCard.brand = "";
      state.form.memoryCard.model = "";
    },
    selectMemoryCardBrand: (state, action: PayloadAction<string>) => {
      state.form.memoryCard.brand = action.payload;
      state.form.memoryCard.model = "";
    },
    selectMemoryCardModel: (state, action: PayloadAction<string>) => {
      state.form.memoryCard.model = action.payload;
    },
    selectStorageType: (state, action: PayloadAction<Storage>) => {
      state.form.storage.type = action.payload;
      state.form.storage.storageCapacity = "";
      state.form.storage.brand = "";
      state.form.storage.model = "";
    },
    selectStorageCapacity: (state, action: PayloadAction<string>) => {
      state.form.storage.storageCapacity = action.payload;
      state.form.storage.brand = "";
      state.form.storage.model = "";
    },
    selectStorageBrand: (state, action: PayloadAction<string>) => {
      state.form.storage.brand = action.payload;
      state.form.storage.model = "";
    },
    selectStorageModel: (state, action: PayloadAction<string>) => {
      state.form.storage.model = action.payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export const {
  resetData,
  selectCpuBrand,
  selectCpuModel,
  selectGpuBrand,
  selectGpuModel,
  selectMemoryCardQuantity,
  selectMemoryCardBrand,
  selectMemoryCardModel,
  selectStorageType,
  selectStorageCapacity,
  selectStorageBrand,
  selectStorageModel,
} = selectionFormSlice.actions;

export default selectionFormSlice.reducer;
