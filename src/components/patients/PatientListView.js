import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientListView() {
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
			<h2>
				Patient - List View
				<p>
					<Link to="/patients/new" className="btn btn-primary">
						Create Patient
					</Link>
				</p>
			</h2>

			{patients.map((patient) => {
				return (
					<div
						className="card  m-auto mb-3"
						style={{ maxWidth: "975px" }}
						key={patient._id}
					>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://via.placeholder.com/325x425.png" className="rounded-start text-center" alt="patient" width={325} height={425} />
							</div>
							<div className="col-md-8">
								<div className="card-header">
									<h5 className="card-title text-center p-2">
										<Link to={`/patients/${patient._id}`} className="link-line">
											{patient.name}
										</Link>
									</h5>
								</div>
								<div className="card-body">
									<h6 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
										<a
											className="card-subtitle m-2"
											href={`tel:+${patient.phone}`}
										>
											{patient.phone}
										</a>
									</h6>
									<p className="card-text">
										<i className="bi bi-gift p-2"></i>
										Age: {patient.age}
									</p>
									<p className="card-text">
										<i className="bi bi-gender-ambiguous p-2"></i>
										Gender: {patient.gender}
									</p>
									<p className="card-text">
										<i className="bi bi-thermometer-half p-2"></i>
										Problem: {patient.problem}
									</p>
									<p className="card-text">
										<i className="bi bi-slash-circle p-2"></i>
										Allergy: {patient.allergy}
									</p>
									<p className="card-text">
										<i className="bi bi-capsule p-2"></i>
										Prescription: {patient.prescription}
									</p>
									<p className="card-text">
										<i className="bi bi-geo-alt-fill text-warning p-2"></i>
										<small className="text-muted two-liner">
											{patient.address}
										</small>
									</p>
								</div>
								<div className="card-footer mt-3 text-center">
										<Link
											to={`/patients/${patient._id}/edit`}
											className="btn btn-primary" style={{marginRight: "30px"}}
										>
											Edit
										</Link>
										<span>
											<Link to={`/patients/${patient._id}`} className="btn btn-success">
												View Detail
											</Link>
										</span>
									</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PatientListView;
