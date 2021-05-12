import React from "react";

function Enrollee({ enrollee }) {
	const { lastName, firstName, emailAddress } = enrollee;
	return (
		<tr>
			<td>
				{lastName}, {firstName}
			</td>
			<td>{emailAddress}</td>
		</tr>
	);
}

export default Enrollee;
