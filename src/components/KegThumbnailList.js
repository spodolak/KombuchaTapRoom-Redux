import React from "react";
import KegThumbnail from "./KegThumbnail";
import PropTypes from "prop-types";

function KegThumbnailList(props) {
	return (
		<React.Fragment>
			{Object.values(props.KegThumbnailList).map((keg) => {
        return <KegThumbnail 
        whenKegClicked = { props.onKegSelection }
				name={keg.name}
				brand={keg.brand}
				price={keg.price}
				flavor={keg.flavor}
				key={keg.id}/>
      })}
		</React.Fragment>
	);
}

KegThumbnailList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};


export default KegThumbnailList;