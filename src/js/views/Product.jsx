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
									{*//	<img src="https://target.scene7.com/is/image/Target/GUEST_03e31029-c4b1-437f-b0f5-fb6e2dd59c17?wid=488&hei=488&fmt=pjpeg" />
									</div>
									<div className="tab-pane" id="pic-2">
										<img src="https://target.scene7.com/is/image/Target/GUEST_c940683e-4253-445b-838a-11210e36e5f6?wid=488&hei=488&fmt=pjpeg" />
									</div>
									<div className="tab-pane" id="pic-3">
									{*//	<img src="https://sc01.alicdn.com/kf/HTB1AJXMKVXXXXb0XpXXq6xXFXXXI/most-soft-irish-dance-shoes-men-genuine.jpg_350x350.jpg" />
									</div>
									<div className="tab-pane" id="pic-4">
									{*//	<img src="https://i.pinimg.com/236x/6a/dd/1d/6add1d941228c7650c3c8ea3adbf1c0d--ballroom-dance-shoes-salsa-shoes.jpg" />
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
											<img src="https://images-na.ssl-images-amazon.com/images/I/614QjaLuVJL._UY395_.jpg" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-2"
											data-toggle="tab">
											<img src="https://i.pinimg.com/236x/6a/dd/1d/6add1d941228c7650c3c8ea3adbf1c0d--ballroom-dance-shoes-salsa-shoes.jpg" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-3"
											data-toggle="tab">
											<img src="http://www.donflamenco.com/media/catalog/product/cache/4/small_image/295x/040ec09b1e35df139433887a97daa66f/t/r/triana_sz.jpg" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-4"
											data-toggle="tab">
											<img src="http://danceshoesource.com/wp-content/uploads/2015/12/Classical-5Belt-Children-s-3cm-Low-heel-Latin-ballroom-Salsa-Practice-Dance-Shoes-EUR-Size-26.jpg" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-5"
											data-toggle="tab">
											<img src="http://charlottearthurmurray.com/wp-content/uploads/2014/05/bellydance-shoes-latindance-shoes-latin-dance-sandals-dancing-shoes-ballroom-dance-shoes-dance-accessory-300x300.jpg" />
										</a>
									</li>
								</ul>
							</div>
							<div className="details col-6">
								<h3 className="product-title">
									women&apos;s dancing shoes fashion
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
									High Quality soft leather split sole slip on
									jazz shoes. The shoes wrap the foot closely
									for professional use. Elasticity makes shoes
									easily slip on. Light and durable soft
									leather.
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
