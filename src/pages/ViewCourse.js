import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import SpinnerComponent from "../components/SpinnerComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

import logo from "../assets/images/logo1.png";
// import Footer from "../components/Footer";

import Enrollees from "../components/Enrollees";
import { useHistory } from "react-router";

function ViewCourse(props) {
	const history = useHistory();
	const { courseId } = props.match.params;

	const [course, setCourse] = useState(null);
	// console.log(course);

	const handleEnroll = () => {
		const token = localStorage.getItem("token");

		fetch(`https://backup-capstone-vscode.herokuapp.com/api/users/enroll`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				courseId: course._id,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				alert(data.message);
				// window.location.reload();
				history.push("/profile");
			});
	};

	useEffect(() => {
		fetch(
			`https://backup-capstone-vscode.herokuapp.com/api/courses?id=${courseId}`
		)
			.then((res) => res.json())
			.then((data) => {
				setCourse(data.course);
			});
	}, [courseId]);

	return (
		<div className="viewCourseBody">
			{course ? (
				<>
					<Jumbotron className="col-md-5 mr-auto ml-auto mt-4 p-4 viewCourseJumbo">
						<img className="logo" src={logo} alt="circle logo" />
						<h3 className="mt-4">{course.name}</h3>
						<p>{course.description}</p>
						<p>₱ {course.price}</p>
						<Button className="btn-block siteButton" onClick={handleEnroll}>
							Enroll
						</Button>
						<small
							style={{ cursor: "pointer" }}
							onClick={() => history.push("/courses")}
						>
							← back
						</small>
					</Jumbotron>

					<Enrollees enrollees={course.enrollees} />
				</>
			) : (
				<SpinnerComponent />
			)}
		</div>
	);
}

export default ViewCourse;
