import React from "react";
import PropTypes from "prop-types";

function KegThumbnail(props) {
	return (
		<React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
			<h4>{props.name}</h4>
			<h3>{props.brand}</h3>
			<p>{props.price}</p>
			<p>{props.flavor}</p>
      </div>
		</React.Fragment>
	);
}

KegThumbnail.propTypes = {
	name: PropTypes.string, 
	brand: PropTypes.string, 
	price: PropTypes.string, 
	flavor: PropTypes.string, 
};

export default KegThumbnail;