import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Storage } from "../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectFormValue,
  selectStorageBrands,
  selectStorageCapacities,
  selectStorageModels,
  selectStorageTypes,
} from "../app/store";
import { setBrands, setModels, setStorageCapacities } from "../features/storageSlice";
import {
  selectStorageBrand,
  selectStorageCapacity,
  selectStorageModel,
  selectStorageType,
} from "../features/selectionFormSlice";

const StorageForm = () => {
  const storageTypes = useAppSelector(selectStorageTypes);
  const storageCapacities = useAppSelector(selectStorageCapacities);
  const storageBrands = useAppSelector(selectStorageBrands);
  const storageModels = useAppSelector(selectStorageModels);
  const formValue = useAppSelector(selectFormValue);
  const dispatch = useAppDispatch();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%" }}>
        <Typography variant="h6" sx={{ marginTop: 5 }}>
          Step4: Select Your Storage
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
        <FormControl sx={{ marginTop: 3, width: "22%" }}>
          <InputLabel>HDD or SSD</InputLabel>
          <Select
            value={formValue.storage.type}
            onChange={(event: SelectChangeEvent<string>) => {
              const target = event.target.value;
              if (target === Storage.hdd || target === Storage.ssd) {
                dispatch(selectStorageType(target));
                // dispatch(clearData());
                dispatch(setStorageCapacities(target));
              }
            }}
            required
          >
            {!!storageTypes &&
              storageTypes.length > 0 &&
              storageTypes.map((storageType) => (
                <MenuItem key={storageType} value={storageType}>
                  {storageType}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: 3, width: "22%" }}>
          <InputLabel>Storage</InputLabel>
          <Select
            value={formValue.storage.storageCapacity}
            onChange={(event: SelectChangeEvent<string>) => {
              dispatch(selectStorageCapacity(event.target.value));
              dispatch(setBrands(event.target.value));
            }}
            required
          >
            {storageCapacities.map((capacity) => (
              <MenuItem key={capacity} value={capacity}>
                {capacity}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: 3, width: "22%" }}>
          <InputLabel>Brand</InputLabel>
          <Select
            value={formValue.storage.brand}
            onChange={(event: SelectChangeEvent<string>) => {
              dispatch(selectStorageBrand(event.target.value));
              dispatch(
                setModels({
                  storageCapacity: formValue.storage.storageCapacity,
                  brand: event.target.value,
                })
              );
            }}
            required
          >
            {storageBrands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: 3, width: "22%" }}>
          <InputLabel>Model</InputLabel>
          <Select
            value={formValue.storage.model}
            onChange={(event: SelectChangeEvent<string>) => {
              dispatch(selectStorageModel(event.target.value));
            }}
            required
          >
            {storageModels.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default StorageForm;
