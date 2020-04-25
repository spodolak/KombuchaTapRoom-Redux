import React from "react";
import KegThumbnail from "./KegThumbnail.js";

const masterKegList = [
	{
		image: "image.jpg",
		name: "Strawberry",
		currentPints: "140 pints"
	},
	{
		image: "image.jpg",
		name: "Banana	",
		currentPints: "140 pints"
	}
]


function KegThumbnailList() {
	return (
		<React.Fragment>
			{masterKegList.map((kegThumbnail, index) => 
				<KegThumbnail 
				image={kegThumbnail.image}
				name={kegThumbnail.name}
				currentPints={kegThumbnail.currentPints}
				key={index}/>
			)}
		</React.Fragment>
	);
}

export default KegThumbnailList;