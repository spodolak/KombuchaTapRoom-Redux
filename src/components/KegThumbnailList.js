import React from "react";
import KegThumbnail from "./KegThumbnail.js";

const masterKegList = [
	{
		image: "image.jpg",
		name: "Strawberry",
		currentPints: "140 pints"
	}
]


function KegThumbnailList() {
	return (
		<React.Fragment>
			<hr/>
			{masterKegList.map((ticket, index) => 
			<div><p>text</p>
				<KegThumbnail 
				image={KegThumbnail.image}
				name={KegThumbnail.name}
				currentPints={KegThumbnail.currentPints}/></div>
			)}
		</React.Fragment>
	);
}

export default KegThumbnailList;