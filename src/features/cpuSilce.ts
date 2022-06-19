import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ComputerPart } from "../types";

export interface CpuState {
    data: ComputerPart[]
}

const initialState: CpuState = {
    data: []
}

export const cpuSlice = createSlice({
    name: "cpu",
    initialState,
    reducers: {
        clearData: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.data = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCpuDataAsync.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
        })

    }
})

export const fetchCpuDataAsync = createAsyncThunk<ComputerPart[]>(
    "fetchCpuData",
    async (): Promise<ComputerPart[]> => {
        const cpus = await fetch(`https://api.recursionist.io/builder/computers?type=cpu`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
        return cpus;
    }
)

export const { clearData } = cpuSlice.actions;

export default cpuSlice.reducer;