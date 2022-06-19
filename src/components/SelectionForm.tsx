import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchCpuDataAsync } from "../features/cpuSilce";
import CpuForm from "./CpuForm";

const SelectionForm = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // eslint-disable-next-line no-console
        dispatch(fetchCpuDataAsync()).catch((e) => console.log(e));
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
                // onSubmit={() => console.log("")}
                >
                    <CpuForm />
                </form>
            </div>
        </div>
    );
};

export default SelectionForm;