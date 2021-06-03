import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import SpinnerComponent from "./SpinnerComponent";

function Profile() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const token = localStorage.getItem("token");

		fetch(`https://backup-capstone-vscode.herokuapp.com/api/users/details/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.userDetails);
				// then do something with the user data here
				setUser(data.userDetails);
			});
	}, []);
	return (
		<div className="profile">
			<h3>Enrollment History</h3>

			{user ? (
				<div>
					<h5 className="profileHeader">
						Name: {user?.firstName} {user?.lastName}
					</h5>
					<h5 className="profileHeader aboveTable">
						Email: {user?.emailAddress}
					</h5>
					<Table size="sm" striped bordered hover responsive>
						<thead>
							<tr>
								<th>Course</th>
								<th>Enrolled On</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{user?.enrollments.map((item) => (
								<tr key={item.courseName}>
									<td className="course">{item.courseName}</td>
									<td className="date-enrolled">
										{new Date(item.enrolledOn).toLocaleString("en-PH", {
											timeZone: "Asia/Manila",
										})}
									</td>
									<td className="status">{item.status}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			) : (
				<SpinnerComponent />
			)}
		</div>
	);
}

export default Profile;
