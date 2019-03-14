import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import diMaria from "../../img/DIMARIA.jpg";
import { Link } from "react-router-dom";

function DemoList(props) {
	return (
		<ul>
			<Context.Consumer>
				{({ store, actions }) => {
					return store.blogs2.map((item, index) => {
						return (
							<div key={index} className={"card " + item.style}>
								<Link to="/Blog">
									<img
										src={item.image}
										className="card-img"
										alt="..."
									/>
								</Link>
								<div className="card-img-overlay d-flex flex-column">
									<div className="col 3">
										<a
											href="#"
											className={
												store.blogs2[0].liked
													? "float-right text-danger"
													: "float-right text-white"
											}
											onClick={
												store.blogs2[0].liked
													? () =>
															actions.featuredLikeClicked2(
																0
															)
													: () =>
															actions.featuredLikeClicked2(
																0
															)
											}>
											{store.blogs2[0].liked ? (
												<i className="fas fa-heart" />
											) : (
												<i className="far fa-heart" />
											)}
										</a>
									</div>
									<p className="card-text  text-white   mt-auto font-weight-bold rounded secondCardText">
										{item.description}
									</p>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</ul>
	);
}

DemoList.propTypes = {
	items: PropTypes.array
};

export default DemoList;
