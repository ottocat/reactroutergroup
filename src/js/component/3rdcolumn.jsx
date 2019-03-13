import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import diMaria from "../../img/DIMARIA.jpg";
import { Link } from "react-router-dom";

function ThirdColumn(props) {
	return (
		<ul>
			<Context.Consumer>
				{({ store }) => {
					return store.blogs3.map((item, index) => {
						return (
							<Link key={index} to="/Blog">
								<div className={"card " + item.style}>
									<img
										src={item.image}
										className="card-img"
										alt="..."
									/>
									<div className="card-img-overlay d-flex flex-column">
										<p className="card-text  text-white   mt-auto font-weight-bold rounded secondCardText">
											{item.description}
										</p>
									</div>
								</div>
							</Link>
						);
					});
				}}
			</Context.Consumer>
		</ul>
	);
}

ThirdColumn.propTypes = {
	items: PropTypes.array
};

export default ThirdColumn;
