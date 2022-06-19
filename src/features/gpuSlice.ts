import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComputerPart } from "../types";

export interface GpuState {
    data: ComputerPart[]
    brands: string[]
    models: string[]
}

const initialState: GpuState = {
    data: [],
    brands: [],
    models: [],
}

export const gpuSlice = createSlice({
    name: "gpu",
    initialState,
    reducers: {
        clearData: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.data = []
            // eslint-disable-next-line no-param-reassign
            state.brands = []
            // eslint-disable-next-line no-param-reassign
            state.models = []
        },
        setModels: (state, action: PayloadAction<string>) => {
            const models: string[] = [];
            state.data
                .filter(gpu => gpu.Brand === action.payload)
                .map(gpu => {
                    if (models.indexOf(gpu.Model) === -1) {
                        models.push(gpu.Model);
                    }
                    return gpu;
                });
            models.sort();
            // eslint-disable-next-line no-param-reassign
            state.models = models;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGpuDataAsync.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
            const brands: string[] = [];
            state.data
                .map(gpu => {
                    if (brands.indexOf(gpu.Brand) === -1) {
                        brands.push(gpu.Brand);
                    }
                    return gpu;
                });
            brands.sort();
            // eslint-disable-next-line no-param-reassign
            state.brands = brands;
        })

    }
})

export const fetchGpuDataAsync = createAsyncThunk<ComputerPart[]>(
    "fetchGpuData",
    async (): Promise<ComputerPart[]> => {
        const gpus = await fetch(`https://api.recursionist.io/builder/computers?type=gpu`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
        return gpus;
    }
)

export const { clearData, setModels } = gpuSlice.actions;

export default gpuSlice.reducer;