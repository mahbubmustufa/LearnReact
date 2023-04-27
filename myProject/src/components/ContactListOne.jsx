import React from "react";
import DisplayContact from "./displayContact";

const ContactListOne = (props) => {
	console.log(props.passToContactListObj);
	const renderContactList = props.passToContactListObj.map(
		(itchOfContactObj) => {
			return <DisplayContact contact={itchOfContactObj} />;
		}
	);
	return (
		<div>
			<h2>{renderContactList}</h2>
		</div>
	);
};

export default ContactListOne;
