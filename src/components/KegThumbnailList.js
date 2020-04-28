import React from "react";
import KegThumbnail from "./KegThumbnail.js";
import PropTypes from "prop-types";

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


function KegThumbnailList(props) {
	return (
		<React.Fragment>
			{props.kegList.map((keg) => 
        <KegThumbnail 
        whenKegClicked = { props.onKegSelection }
				name={keg.name}
				brand={keg.brand}
				price={keg.price}
				flavor={keg.flavor}
				key={keg.id}/>
			)}
		</React.Fragment>
	);
}

KegThumbnailList.propTypes = {
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
};


export default KegThumbnailList;