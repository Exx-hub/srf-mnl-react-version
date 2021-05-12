import React from "react";
import { Table } from "react-bootstrap";
import Enrollee from "./Enrollee";

function Enrollees({ enrollees }) {
	console.log(enrollees);
	return (
		<div>
			<h5 className="text-center my-3">List of Current Enrollees</h5>
			<Table
				striped
				borderless
				hover
				className="col-md-5 mr-auto ml-auto text-center enrolleeTable"
			>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{enrollees.map((enrollee) => {
						return <Enrollee key={enrollee._id} enrollee={enrollee} />;
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default Enrollees;
