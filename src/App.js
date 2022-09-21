import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import PatientAdd from "./components/patients/PatientAdd";
import PatientTable from "./components/patients/PatientTable";
import PatientListView from "./components/patients/PatientListView";
import PatientGridView from "./components/patients/PatientGridView";
import PatientDetails from "./components/patients/PatientDetails";
import PatientEdit from "./components/patients/PatientEdit";
import PatientDelete from "./components/patients/PatientDelete";
import Footer from "./components/common/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/patients/table-view" element={<PatientTable />} />					
					<Route exact path="/patients/list-view" element={<PatientListView />} />
					<Route exact path="/patients/grid-view" element={<PatientGridView />} />
					<Route exact path="/patients/new" element={<PatientAdd />} />
					<Route exact path="/patients/:_id" element={<PatientDetails />} />
					<Route exact path="/patients/:_id/edit" element={<PatientEdit />} />
					<Route exact path="/patients/:_id/delete" element={<PatientDelete />} />
				</Routes>
				
				<Footer />
			</Router>
		</div>
	);
}

export default App;
