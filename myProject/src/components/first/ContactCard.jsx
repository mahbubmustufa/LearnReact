import React from "react";

const ContactCard = (props) => {
	const { item, name, email } = props.contact;
	return (
		<div className="item">
			<div className="content">
				<i className="images icon"></i>
				<div className="header upper">{name}</div>
				<div className="">{email}</div>
			</div>
			<i className="trash alternate outline icon"></i>
		</div>
	);
};

export default ContactCard;
