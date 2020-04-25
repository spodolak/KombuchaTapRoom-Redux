import React from "react";
import KegImgButton from "./buttons/KegImageButton.js";
import AddPintButton from "./buttons/AddPintButton.js";
import SellPintButton from "./buttons/SellPintButton.js";

function KegThumbnail() {
	return (
		<React.Fragment>
			<KegImgButton />
			<AddPintButton />
			<SellPintButton />
		</React.Fragment>
	);
}

export default KegThumbnail;