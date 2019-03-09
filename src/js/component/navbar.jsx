import React from "react";
import Book from "../../img/study.png";
import { NavLink } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					<img src={Book} alt="whatever" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/Blog" className="nav-link">
								Blogs
							</NavLink>
						</li>
						<li className="nav-item active">
							<NavLink to="/Product" className="nav-link">
								Product{" "}
								<span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item active">
							<NavLink to="/Cart_Checkout" className="nav-link">
								Checkout{" "}
								<span className="sr-only">(current)</span>
							</NavLink>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
