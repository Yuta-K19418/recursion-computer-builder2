import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComputerPart, SelectStorageBrandAction, Storage } from "../types";

export interface StorageState {
    data: ComputerPart[]
    type: string[],
    storageCapacity: string[],
    brands: string[]
    models: string[]
}

const initialState: StorageState = {
    data: [],
    type: [Storage.hdd, Storage.ssd],
    storageCapacity: [],
    brands: [],
    models: [],
}

export const storageSlice = createSlice({
    name: "storage",
    initialState,
    reducers: {
        clearData: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.data = []
            // eslint-disable-next-line no-param-reassign
            state.type = [Storage.hdd, Storage.ssd]
            // eslint-disable-next-line no-param-reassign
            state.storageCapacity = []
            // eslint-disable-next-line no-param-reassign
            state.brands = []
            // eslint-disable-next-line no-param-reassign
            state.models = []
        },
        setStorageCapacities: (state, action: PayloadAction<string>) => {
            const capacities: string[] = [];
            state.data
                .map(storage => {
                    const pattern = /[0-9]{1,3}[MGT]B/g;
                    const capacity = storage.Model.match(pattern);
                    if (capacity !== null
                        && capacity.length > 0
                        && action.payload === storage.Type
                        && capacities.indexOf(capacity[0]) === -1) {
                        capacities.push(capacity[0]);
                    }
                    return storage;
                })
            // eslint-disable-next-line no-param-reassign
            state.storageCapacity = capacities.sort();
            // eslint-disable-next-line no-param-reassign
            state.brands = []
            // eslint-disable-next-line no-param-reassign
            state.models = []
        },
        setBrands: (state, action: PayloadAction<string>) => {
            const brands: string[] = [];
            state.data
                .map(storage => {
                    if (storage.Model.includes(action.payload) && brands.indexOf(storage.Brand) === -1) {
                        brands.push(storage.Brand);
                    }
                    return storage;
                });
            brands.sort();
            // eslint-disable-next-line no-param-reassign
            state.brands = brands;
        },
        setModels: (state, action: PayloadAction<SelectStorageBrandAction>) => {
            const models: string[] = [];
            state.data
                .filter(storage => storage.Brand === action.payload.brand)
                .map(storage => {
                    if (storage.Model.includes(action.payload.storageCapacity) && models.indexOf(storage.Model) === -1) {
                        models.push(storage.Model);
                    }
                    return storage;
                });
            models.sort();
            // eslint-disable-next-line no-param-reassign
            state.models = models;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStorageDataAsync.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
        })

    }
})

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
)

export const {
    clearData,
    setStorageCapacities,
    setBrands,
    setModels
} = storageSlice.actions;

export default storageSlice.reducer;