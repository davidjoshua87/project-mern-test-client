import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function PatientDetail(props) {
	const baseUrl = process.env.REACT_APP_BASEURL;
	const [patient, setPatient] = useState({});

	const { _id } = useParams();

	useEffect(
		function () {
			async function getPatientByid() {
				try {
					const response = await axios.get(`${baseUrl}/api/patients/${_id}`);
					if (response) {
						setPatient(response.data.data);
					}
				} catch (error) {
					alert(error.message);
					console.error(error);
				}
			}
			getPatientByid();
		},
		[_id, baseUrl, props]
	);

	return (
		<div className="container" style={{ marginTop: "60px" }}>
			<div className="card">
				<div className="card-header">
					<h2 className="text-center p-2">
						{patient.name}
					</h2>
				</div>
				<div className="row g-0">
					<div className="col-md-8">
						<div className="card-body" style={{ padding: "30px", paddingBottom: "0px" }}>
						<div>
								<small>
									<b>version</b>: {patient.__v}
								</small>
							</div>
							<div>
								<small>
									<b>ID</b>: {patient._id}
								</small>
							</div>
							<div>
								<b>Age</b>: <p align="justify">{patient.age}</p>
							</div>
							<div>
								<b>Gender</b>: <p align="justify">{patient.gender}</p>
							</div>
							<div>
								<b>Phone</b>: <p align="justify"><a href={`tel:+${patient.phone}`}>{patient.phone}</a></p>
							</div>
							<div>
								<b>Email</b>: <p align="justify">{patient.email}</p>
							</div>
							<div>
								<b>Address</b>: <p align="justify">{patient.address}</p>
							</div>
							<div>
								<b>Allergy</b>: <p align="justify">{patient.allergy}</p>
							</div>
							<div>
								<b>Problem</b>: <p align="justify">{patient.problem}</p>
							</div>
							<div>
								<b>Prescription</b>: <p align="justify">{patient.prescription}</p>
							</div>
						</div>
						<div className="btn-group d-flex w-50 m-auto pb-4">
							<Link to={`/patients/${patient._id}/edit`} className="btn btn-primary">
								Edit
							</Link>
							<Link to={`/patients/${patient._id}/delete`} className="btn btn-danger">
								Delete
							</Link>
							<Link to="/patients/table-view" className="btn btn-secondary">
								Close
							</Link>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card-body d-flex justify-content-center m-auto" style={{ padding: "30px"}}>
							<img src="https://via.placeholder.com/345x465.png" className="rounded" alt="patient" width={345} height={465} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatientDetail;
