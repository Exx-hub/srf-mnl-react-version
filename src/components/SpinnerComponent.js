import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function SpinnerComponent() {
	return (
		<Jumbotron className="ml-auto mr-auto col-sm-10 text-center">
			<h2>
				<span class="spinner-border text-dark mr-3"></span>
				Fetching resources...
			</h2>
		</Jumbotron>
	);
}

export default SpinnerComponent;
