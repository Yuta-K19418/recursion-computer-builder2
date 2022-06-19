import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cpuReducer from "../features/cpuSilce"
import { ComputerPart } from "../types";

export const store = configureStore({
    reducer: {
        cpu: cpuReducer,
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

export const selectCpus = (state: RootState): ComputerPart[] => state.cpu.data;