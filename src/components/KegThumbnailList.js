import React from "react";
import KegThumbnail from "./KegThumbnail";
import PropTypes from "prop-types";

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
  onKegSelection: PropTypes.func
};


export default KegThumbnailList;