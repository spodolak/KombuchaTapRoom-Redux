import React from "react";
import KegImgButton from "./buttons/KegImageButton.js";
import AddPintButton from "./buttons/AddPintButton.js";
import SellPintButton from "./buttons/SellPintButton.js";
import PropTypes from "prop-types";

function KegThumbnail(props) {
	return (
		<React.Fragment>
			<h4>{props.image}</h4>
			<h3>{props.name}</h3>
			<p>{props.currentPints}</p>
			<KegImgButton />
			<AddPintButton />
			<SellPintButton />
		</React.Fragment>
	);
}

KegThumbnail.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string, 
	currentPints: PropTypes.string,
	KegImgButton: PropTypes.object,	
	AddPintButton: PropTypes.object,	
	SellPintButton: PropTypes.object	
};

export default KegThumbnail;