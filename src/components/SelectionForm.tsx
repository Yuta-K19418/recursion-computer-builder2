import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchCpuDataAsync } from "../features/cpuSilce";
import { fetchGpuDataAsync } from "../features/gpuSlice";
import { fetchRamDataAsync } from "../features/ramSlice";
import { addSelectedPC } from "../features/selectionFormSlice";
import { fetchStorageDataAsync } from "../features/storageSlice";
import AddPCButton from "./AddPCButton";
import CpuForm from "./CpuForm";
import GpuForm from "./GpuForm";
import RamForm from "./RamForm";
import StorageForm from "./StorageForm";

const SelectionForm = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    /* eslint-disable no-console */
    dispatch(fetchCpuDataAsync()).catch((e) => console.log(e));
    dispatch(fetchGpuDataAsync()).catch((e) => console.log(e));
    dispatch(fetchRamDataAsync()).catch((e) => console.log(e));
    dispatch(fetchStorageDataAsync()).catch((e) => console.log(e));
    /* eslint-enable no-console */
  }, [dispatch]);

  const handleAddPC = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addSelectedPC());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50%",
        margin: 2,
        padding: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "75%",
          height: "70%",
          marginTop: 5,
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleAddPC(event)}
        >
          <CpuForm />
          <GpuForm />
          <RamForm />
          <StorageForm />
          <AddPCButton />
        </form>
      </div>
    </div>
  );
};

export default SelectionForm;
