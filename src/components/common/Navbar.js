import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" activeclassname="active" hrefLang="https://jds.my.id" to="/">
					JDs
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/patients/new"
							>
								Create
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/patients/table-view"
							>
								View Table
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/patients/grid-view"
							>
								View Grid
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/patients/list-view"
							>
								List View
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
