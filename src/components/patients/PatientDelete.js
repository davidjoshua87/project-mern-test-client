import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function PatientDelete(props) {
	const baseUrl = process.env.REACT_APP_BASEURL;

	const { _id } = useParams();
	const navigate = useNavigate();

	async function handleDelete() {
		try {
			const response = await axios.delete(`${baseUrl}/api/patients/${_id}`);
			if (response.status === 200) {
				alert(response.data.message);
				navigate("/patients/table-view");
			}
		} catch (error) {
			alert(error.message);
			console.error(error);
		}
	}

	return (
		<div className="container" style={{ maxWidth: "440px", marginTop: "60px" }}>
			<div className="card" style={{padding: "20px"}}>
				<h4 className="text-center">Are You Sure Delete This Data</h4>
				<div className="btn-group d-flex w-50 m-auto pb-4">
					<button onClick={handleDelete} className="btn btn-danger">
						Delete
					</button>
					<Link to="/patients/table-view" className="btn btn-secondary">
						Cancel{" "}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PatientDelete;
