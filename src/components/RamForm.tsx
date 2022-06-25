import React, { useEffect } from "react";
import { Typography, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRamBrands, selectRamModels, selectFormValue, selectRamQuantity, selectRamBenchmark } from "../app/store";
import { setModels } from "../features/ramSlice";
import {
  putMemoryCardBenchmark,
  putMemoryCardBrand,
  putMemoryCardModel,
  putMemoryCardQuantity,
} from "../features/selectionFormSlice";

const RamForm = () => {
  const ramQuantity = useAppSelector(selectRamQuantity);
  const ramBrands = useAppSelector(selectRamBrands);
  const ramModels = useAppSelector(selectRamModels);
  const ramBenchmark = useAppSelector(selectRamBenchmark);
  const formValue = useAppSelector(selectFormValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(putMemoryCardBenchmark(ramBenchmark));
  }, [dispatch, ramBenchmark]);

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
              dispatch(putMemoryCardQuantity(event.target.value));
              dispatch(setModels(event.target.value));
            }}
            required
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
              dispatch(putMemoryCardBrand(event.target.value));
              dispatch(setModels(event.target.value));
            }}
            required
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
            onChange={(event: SelectChangeEvent<string>) => dispatch(putMemoryCardModel(event.target.value))}
            required
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
