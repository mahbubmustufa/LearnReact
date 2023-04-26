import React from "react";
import "./App.css";

import Header from "./Header";
import DisplayContact from "./displayContact";

const demoContact = [
	{
		name: "mahbub",
		email: "email",
		id: 1,
	},
	{
		name: "mustufa",
		email: "email",
		id: 2,
	},
	{
		name: "nusrat",
		email: "email",
		id: 3,
	},
];

const contactForDispaly = () => {
	console.log(contact);
};

function App() {
	return (
		<div className="ui container">
			<Header />
			<DisplayContact contactForDispaly={demoContact} />
		</div>
	);
}

export default App;
