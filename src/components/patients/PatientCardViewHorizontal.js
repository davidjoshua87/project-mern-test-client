import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientCardViewHorizontal() {
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
		<div className="container">
			<h2>
				Patient - Row Card View
				<p>
					<Link to="/patients/new" className="btn btn-primary">
						Create Patient
					</Link>
				</p>
			</h2>
			<hr />

			{patients.map((patient) => {
				return (
					<div
						className="card mb-3"
						style={{ maxWidth: "800px" }}
						key={patient._id}
					>
						<div className="row g-0">
							<div className="col-md-4 pl-5">
								<img src="https://via.placeholder.com/265x425.png" className="img-fluid rounded-start text-center" alt="patient" height={425} width={265} />
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
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PatientCardViewHorizontal;
