import React from "react";
import KegImgButton from "./buttons/KegImageButton.js";
import AddPintButton from "./buttons/AddPintButton.js";
import SellPintButton from "./buttons/SellPintButton.js";
import PropTypes from "prop-types";

function KegThumbnail(props) {
	return (
		<React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
			<h4>{props.name}</h4>
			<h3>{props.brand}</h3>
			<p>{props.price}</p>
			<p>{props.flavor}</p>
			{/* <KegImgButton />
			<AddPintButton />
			<SellPintButton /> */}
      </div>
		</React.Fragment>
	);
}

KegThumbnail.propTypes = {
	name: PropTypes.string, 
	brand: PropTypes.string, 
	price: PropTypes.string, 
	flavor: PropTypes.string, 
	KegImgButton: PropTypes.object,	
	AddPintButton: PropTypes.object,	
	SellPintButton: PropTypes.object	
};

export default KegThumbnail;