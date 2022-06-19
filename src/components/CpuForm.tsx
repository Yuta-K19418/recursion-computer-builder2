import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { selectCpuBrands, selectCpuModels, selectFormValue } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCpuBrand, selectCpuModel } from "../features/selectionFormSlice";
import { setModels } from "../features/cpuSilce";

const CpuComboBox = () => {
    const cpuBrands = useAppSelector(selectCpuBrands)
    const cpuModels = useAppSelector(selectCpuModels)
    const formValue = useAppSelector(selectFormValue);
    const dispatch = useAppDispatch();

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%" }}>
                <Typography variant="h6" sx={{ marginTop: 5 }}>
                    Step1: Select Your CPU
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
                        value={formValue.cpu.brand}
                        onChange={(event: SelectChangeEvent<string>) => {
                            dispatch(selectCpuBrand(event.target.value));
                            dispatch(setModels(event.target.value));
                        }}
                    >
                        {!!cpuBrands &&
                            cpuBrands.length > 0 &&
                            cpuBrands.map((cpuBrand: string) => (
                                <MenuItem key={cpuBrand} value={cpuBrand}>
                                    {cpuBrand}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ marginTop: 3, width: "45%" }}>
                    <InputLabel>Model</InputLabel>
                    <Select
                        value={formValue.cpu.model}
                        onChange={(event: SelectChangeEvent<string>) => dispatch(selectCpuModel(event.target.value))}
                    >
                        {!!cpuModels &&
                            cpuModels.length > 0 &&
                            cpuModels.map((cpuModel: string) => (
                                <MenuItem key={cpuModel} value={cpuModel}>
                                    {cpuModel}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default CpuComboBox;