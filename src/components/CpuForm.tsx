import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, selectCpus } from "../app/store";
import { useAppSelector } from "../app/hooks";

const CpuComboBox = () => {
    const cpuData = useAppSelector(selectCpus);
    const cpuBrands: string[] = [];
    const cpuModels: string[] = [];
    cpuData.map((cpu) => {
        if (cpuBrands.indexOf(cpu.Brand) === -1) {
            cpuBrands.push(cpu.Brand);
        }
        if (cpuModels.indexOf(cpu.Model) === -1) {
            cpuModels.push(cpu.Model);
        }
        return cpu;
    });

    cpuBrands.sort();
    cpuModels.sort();
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
                    // value={props.cpuBrandState}
                    // onChange={(event: SelectChangeEvent<string>) => props.setCpuBrandState(event.target.value)}
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
                    // value={props.cpuModelState}
                    // onChange={(event: SelectChangeEvent<string>) => props.setCpuModelState(event.target.value)}
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