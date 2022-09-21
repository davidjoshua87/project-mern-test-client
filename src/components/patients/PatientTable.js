import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientTable() {
	const baseUrl = process.env.REACT_APP_BASEURL;
	const [patients, setPatients] = useState([]);

	useEffect(function () {
		async function getPatients() {
			try {
				const response = await axios.get(`${baseUrl}/api/patients`);
				if (response) {
					setPatients(response.data.data);
				}
			} catch (error) {
				alert(error.message);
				console.error(error);
			}
		}
		getPatients();
	}, [baseUrl]);

	return (
		<div className="container" style={{ marginTop: "60px" }}>
			<div>
				<h2>
					Patient - Table View
					<p>
						<Link to="/patients/new" className="btn btn-primary float-right">
							Create Patient
						</Link>
					</p>
				</h2>
			</div>
			<hr />
			<div className="mt-5">
				<div className="table-responsive rounded">
					<table className="table riped table-hover table-bordered container">
						<thead className="table-dark">
							<tr>
								<th>Name</th>
								<th>Age</th>
								<th>Gender</th>
								<th>Phone</th>
								<th>Email</th>
								<th>Address</th>
								<th>Problem</th>
								<th>Allergy</th>
								<th>Prescription</th>
								<th>View</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{patients &&
								patients.map((patient) => {
									return (
										<tr key={patient._id}>
											<td>
												<Link to={`/patients/${patient._id}`} className="link-line">
													{patient.name}
												</Link>
											</td>
											<td>{patient.age}</td>
											<td>{patient.gender}</td>
											<td>{patient.phone}</td>
											<td>{patient.email}</td>
											<td>{patient.address}</td>
											<td>{patient.problem}</td>
											<td>{patient.allergy}</td>
											<td>{patient.prescription}</td>
											<td>
												<Link to={`/patients/${patient._id}`} className="btn btn-success">
													View
												</Link>
											</td>
											<td>
												<Link
													to={`/patients/${patient._id}/edit`}
													className="btn btn-warning"
												>
													Edit
												</Link>
											</td>
											<td>
												<Link
													to={`/patients/${patient._id}/delete`}
													className="btn btn-danger"
												>
													Delete
												</Link>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default PatientTable;
