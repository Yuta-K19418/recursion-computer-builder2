import React from "react";
import { useAppSelector } from "./app/hooks";
import { selectAddedPCs } from "./app/store";
import AppBar from "./components/AppBar";
import SelectedResult from "./components/SelectedResult";
import SelectionForm from "./components/SelectionForm";

const App = () => {
  const addedPCs = useAppSelector(selectAddedPCs);
  return (
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
      {addedPCs !== null &&
        addedPCs.length !== 0 &&
        addedPCs.map((pc, i) => <SelectedResult selectedPC={pc} index={i + 1} />)}
    </div>
  );
};

export default App;
