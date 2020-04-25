import React from "react";
import Header from "./layout/Header.js";
import AddKeg from "./buttons/AddKegButton";
import KegThumbnailList from "./KegThumbnailList.js";

function App(){
  return (
    <React.Fragment>
      <Header />
      <AddKeg />
      <KegThumbnailList />
    </React.Fragment>
  );
}

export default App;