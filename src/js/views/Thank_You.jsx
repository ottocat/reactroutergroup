import React from "react";
import Book from "../../img/study.png";
import { Link } from "react-router-dom";

export class Thank_You extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Thank you</h1>
					<p className="lead">
						Thank you for giving us the attention we depend on to
						continue. It means everything.
					</p>
				</div>
			</div>
		);
	}
}
