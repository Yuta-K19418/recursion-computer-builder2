import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { fetchCpuDataAsync } from "../features/cpuSilce";
import { fetchGpuDataAsync } from "../features/gpuSlice";
import { fetchRamDataAsync } from "../features/ramSlice";
import { fetchStorageDataAsync } from "../features/storageSlice";
import CpuForm from "./CpuForm";
import GpuForm from "./GpuForm";
import RamForm from "./RamForm";
import StorageForm from "./StorageForm";

const SelectionForm = () => {
    const { register, handleSubmit, control, reset } = useForm();
    const dispatch = useAppDispatch();
    useEffect(() => {
        // eslint-disable-next-line no-console
        dispatch(fetchCpuDataAsync()).catch((e) => console.log(e));
        // eslint-disable-next-line no-console
        dispatch(fetchGpuDataAsync()).catch((e) => console.log(e));
        // eslint-disable-next-line no-console
        dispatch(fetchRamDataAsync()).catch((e) => console.log(e));
        // eslint-disable-next-line no-console
        dispatch(fetchStorageDataAsync()).catch((e) => console.log(e));
    }, [dispatch]);

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
                    onSubmit={() => handleSubmit}
                >
                    <CpuForm />
                    <GpuForm />
                    <RamForm />
                    <StorageForm />
                </form>
            </div>
        </div>
    );
};

export default SelectionForm;