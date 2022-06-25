import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BenchMarks, SelectedPC, SelectionForm, Storage } from "../types";

export interface SelectionFormState {
  form: SelectionForm;
  selectedPCs: SelectedPC[];
}

const initialState: SelectionFormState = {
  form: {
    cpu: {
      model: "",
      brand: "",
      benchmark: 0,
    },
    gpu: {
      model: "",
      brand: "",
      benchmark: 0,
    },
    memoryCard: {
      quantity: "",
      model: "",
      brand: "",
      benchmark: 0,
    },
    storage: {
      type: Storage.notSelected,
      storageCapacity: "",
      brand: "",
      model: "",
      benchmark: 0,
    },
  },
  selectedPCs: [],
};

/* eslint-disable no-param-reassign */
export const selectionFormSlice = createSlice({
  name: "selectionForm",
  initialState,
  reducers: {
    resetData: (state) => {
      state = initialState;
    },
    putCpuBrand: (state, action: PayloadAction<string>) => {
      state.form.cpu.brand = action.payload;
      state.form.cpu.model = "";
      state.form.cpu.benchmark = 0;
    },
    putCpuModel: (state, action: PayloadAction<string>) => {
      state.form.cpu.model = action.payload;
      state.form.cpu.benchmark = 0;
    },
    putCpuBenchmark: (state, action: PayloadAction<number>) => {
      state.form.cpu.benchmark = action.payload;
    },
    putGpuBrand: (state, action: PayloadAction<string>) => {
      state.form.gpu.brand = action.payload;
      state.form.gpu.model = "";
      state.form.gpu.benchmark = 0;
    },
    putGpuModel: (state, action: PayloadAction<string>) => {
      state.form.gpu.model = action.payload;
      state.form.gpu.benchmark = 0;
    },
    putGpuBenchmark: (state, action: PayloadAction<number>) => {
      state.form.gpu.benchmark = action.payload;
    },
    putMemoryCardQuantity: (state, action: PayloadAction<string>) => {
      state.form.memoryCard.quantity = action.payload;
      state.form.memoryCard.brand = "";
      state.form.memoryCard.model = "";
      state.form.memoryCard.benchmark = 0;
    },
    putMemoryCardBrand: (state, action: PayloadAction<string>) => {
      state.form.memoryCard.brand = action.payload;
      state.form.memoryCard.model = "";
      state.form.memoryCard.benchmark = 0;
    },
    putMemoryCardModel: (state, action: PayloadAction<string>) => {
      state.form.memoryCard.model = action.payload;
      state.form.memoryCard.benchmark = 0;
    },
    putMemoryCardBenchmark: (state, action: PayloadAction<number>) => {
      state.form.memoryCard.benchmark = action.payload;
    },
    putStorageType: (state, action: PayloadAction<Storage>) => {
      state.form.storage.type = action.payload;
      state.form.storage.storageCapacity = "";
      state.form.storage.brand = "";
      state.form.storage.model = "";
      state.form.storage.benchmark = 0;
    },
    putStorageCapacity: (state, action: PayloadAction<string>) => {
      state.form.storage.storageCapacity = action.payload;
      state.form.storage.brand = "";
      state.form.storage.model = "";
      state.form.storage.benchmark = 0;
    },
    putStorageBrand: (state, action: PayloadAction<string>) => {
      state.form.storage.brand = action.payload;
      state.form.storage.model = "";
      state.form.storage.benchmark = 0;
    },
    putStorageModel: (state, action: PayloadAction<string>) => {
      state.form.storage.model = action.payload;
      state.form.storage.benchmark = 0;
    },
    putStorageBenchmark: (state, action: PayloadAction<number>) => {
      state.form.storage.benchmark = action.payload;
    },
    addSelectedPC: (state) => {
      const gamingBenchMarks: BenchMarks = {
        cpuScore: Math.round(state.form.cpu.benchmark * 0.25),
        gpuScore: Math.round(state.form.gpu.benchmark * 0.6),
        memoryCardScore: Math.round(state.form.memoryCard.benchmark * 0.125),
        storageScore: Math.round(
          state.form.storage.benchmark * (state.form.storage.type === Storage.hdd ? 0.025 : 0.1)
        ),
      };
      const workBenchMarks: BenchMarks = {
        cpuScore: Math.round(state.form.cpu.benchmark * 0.6),
        gpuScore: Math.round(state.form.gpu.benchmark * 0.25),
        memoryCardScore: Math.round(state.form.memoryCard.benchmark * 0.1),
        storageScore: Math.round(state.form.storage.benchmark * 0.05),
      };
      state.selectedPCs = [
        ...state.selectedPCs,
        {
          form: state.form,
          gamingBenchMarks,
          workBenchMarks,
        },
      ];
    },
  },
});
/* eslint-enable no-param-reassign */

export const {
  resetData,
  putCpuBrand,
  putCpuModel,
  putCpuBenchmark,
  putGpuBrand,
  putGpuModel,
  putGpuBenchmark,
  putMemoryCardQuantity,
  putMemoryCardBrand,
  putMemoryCardModel,
  putMemoryCardBenchmark,
  putStorageType,
  putStorageCapacity,
  putStorageBrand,
  putStorageModel,
  putStorageBenchmark,
  addSelectedPC,
} = selectionFormSlice.actions;

export default selectionFormSlice.reducer;
