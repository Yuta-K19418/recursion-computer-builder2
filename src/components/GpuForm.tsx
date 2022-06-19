import React from "react";
import { Typography, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectGpuBrands, selectGpuModels, selectFormValue } from "../app/store";
import { setModels } from "../features/gpuSlice";
import { selectGpuBrand, selectGpuModel } from "../features/selectionFormSlice";

const GpuForm = () => {
    const gpuBrands = useAppSelector(selectGpuBrands)
    const gpuModels = useAppSelector(selectGpuModels)
    const formValue = useAppSelector(selectFormValue);
    const dispatch = useAppDispatch();
    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%" }}>
                <Typography variant="h6" sx={{ marginTop: 5 }}>
                    Step2: Select Your GPU
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
                <FormControl sx={{ marginTop: 3, width: "45%" }}>
                    <InputLabel>Brand</InputLabel>
                    <Select
                        value={formValue.gpu.brand}
                        onChange={(event: SelectChangeEvent<string>) => {
                            dispatch(selectGpuBrand(event.target.value));
                            dispatch(setModels(event.target.value));
                        }}
                    >
                        {!!gpuBrands &&
                            gpuBrands.length > 0 &&
                            gpuBrands.map((gpuBrand: string) => (
                                <MenuItem key={gpuBrand} value={gpuBrand}>
                                    {gpuBrand}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ marginTop: 3, width: "45%" }}>
                    <InputLabel>Model</InputLabel>
                    <Select
                        value={formValue.gpu.model}
                        onChange={(event: SelectChangeEvent<string>) => dispatch(selectGpuModel(event.target.value))}
                    >
                        {!!gpuModels &&
                            gpuModels.length > 0 &&
                            gpuModels.map((gpuModel: string) => (
                                <MenuItem key={gpuModel} value={gpuModel}>
                                    {gpuModel}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default GpuForm;