import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cpuReducer from "../features/cpuSilce"
import selectionFormReducer from "../features/selectionFormSlice"
import { SelectionForm } from "../types";

export const store = configureStore({
    reducer: {
        cpu: cpuReducer,
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
export const selectFormValue = (state: RootState): SelectionForm => state.form.form;