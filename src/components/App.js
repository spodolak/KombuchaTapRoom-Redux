import React from "react";
import Header from "./layout/Header.js";
import AddKeg from "./buttons/AddKegButton";

function App(){
  return (
    <React.Fragment>
      <Header />
      <AddKeg />
    </React.Fragment>
  );
}

export default App;