import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComputerPart } from "../types";

export interface RamState {
    data: ComputerPart[]
    quantity: string[]
    brands: string[]
    models: string[]
}

const initialState: RamState = {
    data: [],
    quantity: ["1", "2", "3", "4"],
    brands: [],
    models: [],
}

export const ramSlice = createSlice({
    name: "ram",
    initialState,
    reducers: {
        clearData: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.data = []
            // eslint-disable-next-line no-param-reassign
            state.quantity = []
            // eslint-disable-next-line no-param-reassign
            state.brands = []
            // eslint-disable-next-line no-param-reassign
            state.models = []
        },
        setModels: (state, action: PayloadAction<string>) => {
            const models: string[] = [];
            state.data
                .filter(ram => ram.Brand === action.payload)
                .map(ram => {
                    if (models.indexOf(ram.Model) === -1) {
                        models.push(ram.Model);
                    }
                    return ram;
                });
            models.sort();
            // eslint-disable-next-line no-param-reassign
            state.models = models;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRamDataAsync.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
            const brands: string[] = [];
            state.data
                .map(ram => {
                    if (brands.indexOf(ram.Brand) === -1) {
                        brands.push(ram.Brand);
                    }
                    return ram;
                });
            brands.sort();
            // eslint-disable-next-line no-param-reassign
            state.brands = brands;
        })

    }
})

export const fetchRamDataAsync = createAsyncThunk<ComputerPart[]>(
    "fetchRamData",
    async (): Promise<ComputerPart[]> => {
        const rams = await fetch(`https://api.recursionist.io/builder/computers?type=ram`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response: Response) => response.json() as Promise<ComputerPart[]>);
        return rams;
    }
)

export const { clearData, setModels } = ramSlice.actions;

export default ramSlice.reducer;