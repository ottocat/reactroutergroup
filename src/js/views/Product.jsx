import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Product extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="container-fliud">
						<div className="wrapper row">
							<div className="preview col-6">
								<div className="preview-pic tab-content">
									<div className="tab-pane active" id="pic-1">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5T4Zo0VR0_z8FtW7Blit5ZCig1kza79O2OB5FMkzuc07b_wCtQ" />
									</div>
									<div className="tab-pane" id="pic-2">
										<img src="https://target.scene7.com/is/image/Target/GUEST_c940683e-4253-445b-838a-11210e36e5f6?wid=488&hei=488&fmt=pjpeg" />
									</div>
									<div className="tab-pane" id="pic-3">
										<img src="https://sc01.alicdn.com/kf/HTB1AJXMKVXXXXb0XpXXq6xXFXXXI/most-soft-irish-dance-shoes-men-genuine.jpg_350x350.jpg" />
									</div>
									<div className="tab-pane" id="pic-4">
										<img src="https://i.pinimg.com/236x/6a/dd/1d/6add1d941228c7650c3c8ea3adbf1c0d--ballroom-dance-shoes-salsa-shoes.jpg" />
									</div>
									<div className="tab-pane" id="pic-5">
										<img src="https://images-na.ssl-images-amazon.com/images/I/614QjaLuVJL._UY395_.jpg" />
									</div>
								</div>
								<ul className="preview-thumbnail nav nav-tabs">
									<li className="active">
										<a
											data-target="#pic-1"
											data-toggle="tab">
											<img src="http://placekitten.com/200/126" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-2"
											data-toggle="tab">
											<img src="http://placekitten.com/200/126" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-3"
											data-toggle="tab">
											<img src="http://placekitten.com/200/126" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-4"
											data-toggle="tab">
											<img src="http://placekitten.com/200/126" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-5"
											data-toggle="tab">
											<img src="http://placekitten.com/200/126" />
										</a>
									</li>
								</ul>
							</div>
							<div className="details col-6">
								<h3 className="product-title">
									men&apos;s shoes fashion
								</h3>
								<div className="rating">
									<div className="stars">
										<span className="fa fa-star checked" />
										<span className="fa fa-star checked" />
										<span className="fa fa-star checked" />
										<span className="fa fa-star" />
										<span className="fa fa-star" />
									</div>
									<span className="review-no">
										41 reviews
									</span>
								</div>
								<p className="product-description">
									Suspendisse quos? Tempus cras iure
									temporibus? Eu laudantium cubilia sem sem!
									Repudiandae et! Massa senectus enim minim
									sociosqu delectus posuere.
								</p>
								<h4 className="price">
									current price: <span>$180</span>
								</h4>
								<p className="vote">
									<strong>91%</strong> of buyers enjoyed this
									product! <strong>(87 votes)</strong>
								</p>
								<h5 className="sizes">
									sizes:
									<span
										className="size"
										data-toggle="tooltip"
										title="small">
										s
									</span>
									<span
										className="size"
										data-toggle="tooltip"
										title="medium">
										m
									</span>
									<span
										className="size"
										data-toggle="tooltip"
										title="large">
										l
									</span>
									<span
										className="size"
										data-toggle="tooltip"
										title="xtra large">
										xl
									</span>
								</h5>
								<h5 className="colors">
									colors:
									<span
										className="color orange not-available"
										data-toggle="tooltip"
										title="Not In store"
									/>
									<span className="color green" />
									<span className="color blue" />
								</h5>
								<div className="action">
									<button
										className="add-to-cart btn btn-default"
										type="button">
										add to cart
									</button>
									<button
										className="like btn btn-default"
										type="button">
										<span className="fa fa-heart" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Product.propTypes = {
// 	match: PropTypes.object

// Product.propTypes = {
// 	match: PropTypes.object
// };
