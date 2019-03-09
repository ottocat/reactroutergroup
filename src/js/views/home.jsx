import React from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";

import "../../styles/home.css";
import danceBlog from "../../img/Michelle and I hurricane social.jpeg";
import diMaria from "../../img/DIMARIA.jpg";
import GreatWall from "../../img/greatWall.jpg";
import Boris from "../../img/Coding.jpg";
import Cooks from "../../img/Cooking.jpg";

export class Home extends React.Component {
	render() {
		return (
			<div className="row mx-auto">
				{/* First Column */}

				<div className="col-6 firstCard">
					<Link to="/Blog">
						<div className="card bg-dark">
							<img
								src={danceBlog}
								className="card-img"
								alt="..."
							/>
							<div className="card-img-overlay d-flex flex-column">
								<h4 className="card-title text-white mt-2 font-weight-bold">
									Featured Blog
								</h4>
								<p className="card-text text-white mt-auto font-weight-bold">
									{
										"Following an introvert's journey through the Salsa Community"
									}
								</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="col-3 secondCol">
					{" "}
					{/* Second Column first Card */}
					<Link to="/Blog">
						<div className="card bg-dark">
							<img src={diMaria} className="card-img" alt="..." />
							<div className="card-img-overlay d-flex flex-column">
								<h4 className="card-title text-danger bg-dark mt-2 font-weight-bold">
									Fulltime
								</h4>
								<p className="card-text text-danger bg-dark mt-auto font-weight-bold">
									{
										"A blog proving hindsight really is 20/20, nitpickingevery big game"
									}
								</p>
							</div>
						</div>
					</Link>
					{/* Second Column Second Card */}
					<div className="card bg-dark mt-3">
						<Link to="/Blog">
							<img
								src={GreatWall}
								className="card-img"
								alt="..."
							/>
							<div className="card-img-overlay d-flex flex-column">
								<h4 className="card-title mt-2 font-weight-bold traveltitle">
									Viajando
								</h4>
								<p className="card-text mt-auto font-weight-bold travel">
									{
										"Seeing the world, and still finding the time to code"
									}
								</p>
							</div>
						</Link>
					</div>
				</div>
				{/* Third Column first Card */}
				<div className="col-3 thirdCol">
					{" "}
					<Link to="/Blog">
						<div className="card bg-dark">
							<img src={Cooks} className="card-img" alt="..." />
							<div className="card-img-overlay d-flex flex-column">
								<h4 className="card-title mt-2 font-weight-bold cooktitle">
									Food
								</h4>
								<p className="card-text mt-auto  font-weight-bold cooktext">
									{
										"Cooking while coding: a comprehensive guide."
									}
								</p>
							</div>
						</div>
					</Link>
					{/* Third Column Second Card */}
					<div className="card bg-dark mt-3">
						<Link to="/Blog">
							<img src={Boris} className="card-img" alt="..." />
							<div className="card-img-overlay d-flex flex-column">
								<h4 className="card-title text-danger bg-dark  mt-2 font-weight-bold">
									{"Boris' retro coding"}
								</h4>
								<p className="card-text text-danger bg-dark mt-auto font-weight-bold boris">
									{
										"A look through former bond villain and elite hacker, Boris' eyes into the world of tech from the 90s "
									}
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

// ReactDOM.render(
// 	<Home
// 	title1="Fulltime"
// 	text1= "A blog proving hindsight really is 20/20, nitpicking every big game"
// 	/>,
// 	);
