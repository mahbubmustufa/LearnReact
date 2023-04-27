import React from "react";

const DisplayContact = (props) => {
	const { id, name, email } = props.contact;
	return (
		<div className="item">
			<div className="content">
				<dvi className="header upper red">{name}</dvi>
				<div>{email}</div>
			</div>
			<i className="trash alternate icon red"></i>
			<hr />
		</div>
	);
};
export default DisplayContact;
