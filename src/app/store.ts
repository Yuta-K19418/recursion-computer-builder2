import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cpuReducer from "../features/cpuSilce";
import gpuReducer from "../features/gpuSlice";
import ramReducer from "../features/ramSlice";
import storageReducer from "../features/storageSlice";
import selectionFormReducer from "../features/selectionFormSlice";
import { SelectionForm } from "../types";

export const store = configureStore({
  reducer: {
    cpu: cpuReducer,
    gpu: gpuReducer,
    ram: ramReducer,
    storage: storageReducer,
    form: selectionFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const selectCpuBrands = (state: RootState): string[] => state.cpu.brands;
export const selectCpuModels = (state: RootState): string[] => state.cpu.models;
export const selectCpuBenchmark = (state: RootState): number =>
  state.cpu.data.filter((v) => v.Brand === state.form.form.cpu.brand && v.Model === state.form.form.cpu.model)[0]
    ?.Benchmark ?? 0;
export const selectGpuBrands = (state: RootState): string[] => state.gpu.brands;
export const selectGpuModels = (state: RootState): string[] => state.gpu.models;
export const selectGpuBenchmark = (state: RootState): number =>
  state.gpu.data.filter((v) => v.Brand === state.form.form.gpu.brand && v.Model === state.form.form.gpu.model)[0]
    ?.Benchmark ?? 0;
export const selectRamQuantity = (state: RootState): string[] => state.ram.quantity;
export const selectRamBrands = (state: RootState): string[] => state.ram.brands;
export const selectRamModels = (state: RootState): string[] => state.ram.models;
export const selectRamBenchmark = (state: RootState): number =>
  state.ram.data.filter(
    (v) => v.Brand === state.form.form.memoryCard.brand && v.Model === state.form.form.memoryCard.model
  )[0]?.Benchmark ?? 0;
export const selectStorageTypes = (state: RootState): string[] => state.storage.type;
export const selectStorageCapacities = (state: RootState): string[] => state.storage.storageCapacity;
export const selectStorageBrands = (state: RootState): string[] => state.storage.brands;
export const selectStorageModels = (state: RootState): string[] => state.storage.models;
export const selectStorageBenchmark = (state: RootState): number =>
  state.storage.data.filter(
    (v) => v.Brand === state.form.form.storage.brand && v.Model === state.form.form.storage.model
  )[0]?.Benchmark ?? 0;
export const selectFormValue = (state: RootState): SelectionForm => state.form.form;
