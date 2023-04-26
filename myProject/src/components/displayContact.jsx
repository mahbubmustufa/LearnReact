import React from "react";

const DisplayContact = (props) => {
	console.log(props.contactForDispaly);

	return (
		<div className="mt-3">
			<h2>{props.contactForDispaly.toString}</h2>
		</div>
	);
};

export default DisplayContact;
