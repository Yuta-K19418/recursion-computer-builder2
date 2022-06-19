import React from "react";
import { Typography, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRamBrands, selectRamModels, selectFormValue, selectRamQuantity } from "../app/store";
import { setModels } from "../features/ramSlice";
import { selectMemoryCardBrand, selectMemoryCardModel, selectMemoryCardQuantity } from "../features/selectionFormSlice";

const RamForm = () => {
    const ramQuantity = useAppSelector(selectRamQuantity);
    const ramBrands = useAppSelector(selectRamBrands);
    const ramModels = useAppSelector(selectRamModels);
    const formValue = useAppSelector(selectFormValue);
    const dispatch = useAppDispatch();

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%" }}>
                <Typography variant="h6" sx={{ marginTop: 5 }}>
                    Step3: Select Your Memory Card
                </Typography>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <FormControl sx={{ marginTop: 3, width: "20%" }}>
                    <InputLabel>How many?</InputLabel>
                    <Select
                        value={formValue.memoryCard.quantity}
                        onChange={(event: SelectChangeEvent<string>) => {
                            dispatch(selectMemoryCardQuantity(event.target.value));
                            dispatch(setModels(event.target.value));
                        }}
                    >
                        {ramQuantity.map((element: string) => (
                            <MenuItem key={element} value={element}>
                                {element}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ marginTop: 3, width: "35%" }}>
                    <InputLabel>Brand</InputLabel>
                    <Select
                        value={formValue.memoryCard.brand}
                        onChange={(event: SelectChangeEvent<string>) => {
                            dispatch(selectMemoryCardBrand(event.target.value));
                            dispatch(setModels(event.target.value));
                        }}
                    >
                        {!!ramBrands &&
                            ramBrands.length > 0 &&
                            ramBrands.map((ramBrand: string) => (
                                <MenuItem key={ramBrand} value={ramBrand}>
                                    {ramBrand}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ marginTop: 3, width: "35%" }}>
                    <InputLabel>Model</InputLabel>
                    <Select
                        value={formValue.memoryCard.model}
                        onChange={(event: SelectChangeEvent<string>) => dispatch(selectMemoryCardModel(event.target.value))}
                    >
                        {!!ramModels &&
                            ramModels.length > 0 &&
                            ramModels.map((ramModel: string) => (
                                <MenuItem key={ramModel} value={ramModel}>
                                    {ramModel}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default RamForm;