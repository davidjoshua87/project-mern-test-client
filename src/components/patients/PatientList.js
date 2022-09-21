import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientList() {
	const baseUrl = process.env.REACT_APP_BASEURL;
	const [Patients, setPatients] = useState([]);

	useEffect(function () {
		async function getAllPatients() {
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
		getAllPatients();
	}, [baseUrl]);

	return (
		<div>
			<h2>
				Patients
				<p>
					<Link to="/patients/new" className="btn btn-primary float-right">
						Create Patient
					</Link>
				</p>
			</h2>
			<hr />
			{Patients.map((patient) => {
				return (
					<div key={patient._id}>
						<h4>
							<Link to={`/patients/${patient._id}`}>{patient.name}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/patients/${patient._id}/edit`} className="btn btn-primary">
								Edit
							</Link>
						</div>

						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default PatientList;
