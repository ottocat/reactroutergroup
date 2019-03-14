import React from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import DemoList from "../component/demoList.jsx";
import ThirdColumn from "../component/3rdcolumn.jsx";

import "../../styles/home.css";
import danceBlog from "../../img/Michelle and I hurricane social.jpeg";
import diMaria from "../../img/DIMARIA.jpg";
import GreatWall from "../../img/greatWall.jpg";
import Boris from "../../img/Coding.jpg";
import Cooks from "../../img/Cooking.jpg";
import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="row mx-auto allCards">
				{/* First Column */}
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="col-6 firstCard">
								<div className="card  ">
									<Link to="/Blog">
										<img
											src={danceBlog}
											className="card-img"
											alt="..."
										/>
									</Link>
									<div className="card-img-overlay d-flex flex-column">
										<h4 className="card-title text-white mt-2 font-weight-bold firstCardTitle">
											{store.blogs[0].title}
										</h4>
										<div className="col 3">
											<a
												href="#"
												className={
													store.blogs[0].liked
														? "float-right text-danger"
														: "float-right text-white"
												}
												onClick={
													store.blogs[0].liked
														? () =>
																actions.featuredLikeClicked(
																	0
																)
														: () =>
																actions.featuredLikeClicked(
																	0
																)
												}>
												{store.blogs[0].liked ? (
													<i className="fas fa-heart" />
												) : (
													<i className="far fa-heart" />
												)}
											</a>
										</div>
										<p className="card-text text-white mt-auto font-weight-bold firstCardText">
											{store.blogs[0].description}
										</p>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<div className="col-3 secondCol">
					<DemoList />
				</div>
				<div className="col-3 thirdCol">
					<ThirdColumn />
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

// Hard coded cards <div className="col-3 secondCol">
// 				{" "}
// 				{/* Second Column first Card */}
// 				<Link to="/Blog">
// 					<div className="card">
// 						<img src={diMaria} className="card-img" alt="..." />
// 						<div className="card-img-overlay d-flex flex-column">
// 							<p className="card-text  text-white   mt-auto font-weight-bold rounded secondCardText">
// 								{
// 									"A blog proving hindsight really is 20/20, nitpickingevery big game"
// 								}
// 							</p>
// 						</div>
// 					</div>
// 				</Link>
// 				{/* Second Column Second Card */}
// 				<div className="card   mt-3">
// 					<Link to="/Blog">
// 						<img
// 							src={GreatWall}
// 							className="card-img"
// 							alt="..."
// 						/>
// 						<div className="card-img-overlay d-flex flex-column">
// 							<p className="card-text text-white mt-auto font-weight-bold thirdCardText">
// 								{
// 									"Seeing the world, and still finding the time to code"
// 								}
// 							</p>
// 						</div>
// 					</Link>
// 				</div>
// 			</div>
// 			{/* Third Column first Card */}
// 			<div className="col-3 thirdCol">
// 				{" "}
// 				<Link to="/Blog">
// 					<div className="card  ">
// 						<img src={Cooks} className="card-img" alt="..." />
// 						<div className="card-img-overlay d-flex flex-column">
// 							<p className="card-text mt-auto text-white font-weight-bold fourthCardText">
// 								{
// 									"Cooking while coding: a comprehensive guide."
// 								}
// 							</p>
// 						</div>
// 					</div>
// 				</Link>
// 				{/* Third Column Second Card */}
// 				<div className="card   mt-3">
// 					<Link to="/Blog">
// 						<img src={Boris} className="card-img" alt="..." />
// 						<div className="card-img-overlay d-flex flex-column">
// 							<p className="card-text  text-white mt-auto font-weight-bold fifthCardText">
// 								{
// 									"A look through former bond villain and elite hacker, Boris' eyes into the world of tech from the 90s "
// 								}
// 							</p>
// 						</div>
// 					</Link>
// 				</div>
// 			</div>
