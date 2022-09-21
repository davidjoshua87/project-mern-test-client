import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function PatientEdit(props) {
	const baseUrl = process.env.REACT_APP_BASEURL;
	const initialState = {
		name: "",
		age: "",
		gender: "",
		phone: "",
		email: "",
		address: "",
		problem: "",
		allergy: "",
		prescription: "",
	};
	const [patient, setPatient] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updatePatient() {
				try {
					const response = await get(`${baseUrl}/api/patients/${_id}`);
					if (response) {
						setPatient(response.data.data);
					}
				} catch (error) {
					alert(error.message);
					console.error(error);
				}
			}
			updatePatient();
		},
		[_id, baseUrl, props]
	);

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await get(`${baseUrl}/api/patients/${_id}`);
			let currentData = response.data.data;

			if (currentData.__v === patient.__v) {
				async function updatePatient() {
					try {
						const response = await patch(`${baseUrl}/api/patients/${patient._id}`, patient);
						if (response.status === 200) {
							alert(response.data.message);
							navigate(`/patients/${patient._id}`);
						}
					} catch (error) {
						alert(error.message);
						console.error(error);
					}
				}
				updatePatient();
			} else {
				alert('Request failed with status code 412: Precondition Failed');
				navigate(`/patients/table-view`);
			}
		} catch (error) {
			console.log(error);
		}
	}

	function handleChange(event) {
		setPatient({ ...patient, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/patients/table-view`);
	}

	return (
		<div className="container" style={{ maxWidth: "520px", marginTop: "60px" }}>
			<div className="card card-header" style={{ marginBottom: "10px" }}>
				<h1 className="text-center">Edit {patient.name}</h1>
			</div>
			<form onSubmit={handleSubmit}>
			<div className="form-group mt-2">
					<label>Name</label>
					<input
						name="name"
						type="text"
						required
						value={patient.name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mt-2">
					<label>Age</label>
					<input
						name="age"
						type="text"
						required
						value={patient.age}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mt-2">
					<label>Gender</label>
					<br/>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="gender" id="male" checked={patient.gender === "male"} value="male" onChange={handleChange}/>
						<label className="form-check-label" to="male">
							Male
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="gender" id="female" checked={patient.gender === "female"} value="female" onChange={handleChange}/>
						<label className="form-check-label" to="female">
							Female
						</label>
					</div>
				</div>
				<div className="form-group mb-2">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="08[0-9]{9,10}"
						required
						value={patient.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: 081234567890</small>
				</div>
				<div className="form-group mt-2">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={patient.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mt-2">
					<label>Address</label>
					<input
						name="address"
						type="text"
						required
						value={patient.address}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mt-2">
					<label>Problem</label>
					<textarea
						name="problem"
						row="10"
						required
						value={patient.problem}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group mt-2">
					<label>Allergy Status</label>
					<br/>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="allergy" id="yes" checked={patient.allergy === "yes"} value="yes" onChange={handleChange}/>
						<label className="form-check-label" to="yes">
							YES
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="allergy" id="no" checked={patient.allergy === "no"} value="no" onChange={handleChange}/>
						<label className="form-check-label" to="no">
							NO
						</label>
					</div>
				</div>
				<div className="form-group mt-2">
					<label>Prescription</label>
					<textarea
						name="prescription"
						row="10"
						required
						value={patient.prescription}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<br/>
				<div className="btn-group">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default PatientEdit;
