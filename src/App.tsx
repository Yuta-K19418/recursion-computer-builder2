import React from "react";
import AppBar from "./components/AppBar";

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
    </div>
);

export default App;
