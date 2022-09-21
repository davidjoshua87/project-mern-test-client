import React from "react";

function Home() {

	return (
		<div className="container text-center home" style={{ marginTop: "60px" }}>
			<div className="card">
				<div className="card-header" style={{ marginBottom: "20px" }}>
					<h1>Patients Data Management System</h1>
				</div>
				<p>
					<b>Front-end</b>: React.Js
				</p>
				<p>
					<b>Back-end</b>: Node.Js and Express.Js
				</p>
				<p>
					<b>Database</b>: MongoDB Atlas with Mongoose ODM
				</p>
				<p>
					<b>Deployment</b>: Vercel (Front-end) and Heroku (Back-end)
				</p>
				<p>
					<b>Developed By</b>: JDs Web Developer
				</p>
			</div>
		</div>
	);
}

export default Home;
