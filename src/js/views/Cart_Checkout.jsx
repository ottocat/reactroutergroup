import React from "react";
import { Link } from "react-router-dom";


export class Cart_Checkout extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
				
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
				<hr />
				<Link to="/demo">
					<button className="btn btn-primary">
						Check the Context in action
					</button>
				</Link>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		);
	}
}
