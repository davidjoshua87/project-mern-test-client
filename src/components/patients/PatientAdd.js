import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function PatientAdd(props) {
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
		prescription: ""
	};
	const [patient, setPatient] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		async function postPatient() {
			try {
				const response = await post(`${baseUrl}/api/patients/add`, patient);
				if (response.status === 200) {
					alert(response.data.message);
					navigate(`/patients/${response.data.data._id}`);
				}
			} catch (error) {
				alert(error.message);
				console.error(error);
			}
		}
		postPatient();
	}

	function handleChange(event) {
		setPatient({ ...patient, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/patients/table-view");
	}

	return (
		<div className="container" style={{ maxWidth: "520px", marginTop: "60px" }}>
			<div className="card card-header" style={{ marginBottom: "10px" }}>
				<h1 className="text-center">Create Patient</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group mb-2">
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
				<div className="form-group mb-2">
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
				<div className="form-group mb-2">
					<label>Gender</label>
					<br/>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleChange}/>
						<label className="form-check-label" to="male">
							Male
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleChange}/>
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
				<div className="form-group mb-2">
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
				<div className="form-group mb-2">
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
				<div className="form-group mb-2">
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
				<div className="form-group mb-2">
					<label>Allergy Status</label>
					<br/>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="allergy" id="yes" value="yes" onChange={handleChange}/>
						<label className="form-check-label" to="yes">
							YES
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="allergy" id="no" value="no" onChange={handleChange}/>
						<label className="form-check-label" to="no">
							NO
						</label>
					</div>
				</div>
				<div className="form-group mb-2">
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
				<div className="btn-group mb-2">
					<input type="submit" value="Submit" className="btn btn-primary" />
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

export default PatientAdd;
