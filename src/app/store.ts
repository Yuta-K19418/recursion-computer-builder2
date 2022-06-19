import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cpuReducer from "../features/cpuSilce";
import gpuReducer from "../features/gpuSlice";
import selectionFormReducer from "../features/selectionFormSlice"
import { SelectionForm } from "../types";

export const store = configureStore({
    reducer: {
        cpu: cpuReducer,
        gpu: gpuReducer,
        form: selectionFormReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const selectCpuBrands = (state: RootState): string[] => state.cpu.brands;
export const selectCpuModels = (state: RootState): string[] => state.cpu.models;
export const selectGpuBrands = (state: RootState): string[] => state.gpu.brands;
export const selectGpuModels = (state: RootState): string[] => state.gpu.models;
export const selectFormValue = (state: RootState): SelectionForm => state.form.form;