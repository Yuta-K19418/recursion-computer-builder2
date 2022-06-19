import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectionForm, Storage } from "../types";

export interface SelectionFormState {
    form: SelectionForm
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
        }
    }
}

export const selectionFormSlice = createSlice({
    name: "selectionForm",
    initialState,
    reducers: {
        resetData: (state) => {
            // eslint-disable-next-line no-param-reassign
            state = initialState;
        },
        selectCpuBrand: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.cpu.brand = action.payload;
            // eslint-disable-next-line no-param-reassign
            state.form.cpu.model = "";
        },
        selectCpuModel: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.cpu.model = action.payload;
        },
        selectGpuBrand: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.gpu.brand = action.payload;
            // eslint-disable-next-line no-param-reassign
            state.form.gpu.model = "";
        },
        selectGpuModel: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.gpu.model = action.payload;
        },
        selectMemoryCardQuantity: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.memoryCard.quantity = action.payload;
            // eslint-disable-next-line no-param-reassign
            state.form.memoryCard.brand = "";
            // eslint-disable-next-line no-param-reassign
            state.form.memoryCard.model = "";
        },
        selectMemoryCardBrand: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.memoryCard.brand = action.payload;
            // eslint-disable-next-line no-param-reassign
            state.form.memoryCard.model = "";
        },
        selectMemoryCardModel: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.form.memoryCard.model = action.payload;
        }
    }
})

export const {
    resetData,
    selectCpuBrand,
    selectCpuModel,
    selectGpuBrand,
    selectGpuModel,
    selectMemoryCardQuantity,
    selectMemoryCardBrand,
    selectMemoryCardModel
} = selectionFormSlice.actions;

export default selectionFormSlice.reducer;