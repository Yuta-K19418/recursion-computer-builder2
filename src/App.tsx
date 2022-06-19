import React from "react";
import AppBar from "./components/AppBar";
import SelectionForm from "./components/SelectionForm";

const App = () => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
        }}
    >
        <AppBar />
        <SelectionForm />
    </div>
);

export default App;
