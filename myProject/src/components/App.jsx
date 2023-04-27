import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";
import AddContact from "./AddContactOne";
import ContactListOne from "./ContactListOne";
function App() {
	const LOCAL_STORAGE_KYE = "contact";
	const [demoContact, setContact] = useState([]);
	const addContactHandler = (contact) => {
		console.log(contact);
		setContact([...demoContact, contact]);
	};

	useEffect(() => {
		const retrifi = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KYE));
		if (retrifi) setContact(retrifi);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KYE, JSON.stringify(demoContact));
	}, [demoContact]);
	return (
		<div className="ui container">
			<Header />
			<AddContact addContactHandler={addContactHandler} />
			<ContactListOne passToContactListObj={demoContact} />
		</div>
	);
}

export default App;
