import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Cart_Checkout extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<link
								href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"
								rel="stylesheet"
								id="bootstrap-css"
							/>
							{/*---- Include the above in your HEAD tag --------*/}
							<div className="container">
								<div className="row">
									<div className="col-xs-8">
										<div className="panel panel-info">
											<div className="panel-heading">
												<div className="panel-title">
													<div className="row">
														<div className="col-xs-6">
															<h5>
																<span className="glyphicon glyphicon-shopping-cart" />{" "}
																Shopping Cart
															</h5>
														</div>
														<div className="col-xs-6">
															<Link to="/Product">
																<button
																	type="button"
																	className="btn btn-primary btn-sm btn-block">
																	<span className="glyphicon glyphicon-share-alt" />{" "}
																	Continue
																	shopping
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div className="panel-body">
												<hr />
												{store.cart.map(
													(product, index) => {
														return (
															<div
																className="row"
																key={index}>
																<div className="col-xs-2">
																	<img
																		className="img-responsive"
																		src="https://i.ebayimg.com/images/g/EW8AAOSw1NFaFPJX/s-l140.jpg"
																	/>
																</div>
																<div className="col-xs-4">
																	<h4 className="product-name">
																		<strong>
																			{
																				product.productName
																			}
																		</strong>
																	</h4>
																	<h4>
																		<small>
																			{
																				product.productDescription
																			}
																		</small>
																	</h4>
																</div>
																<div className="col-xs-6">
																	<div className="col-xs-6 text-right">
																		<h6>
																			<strong>
																				{
																					product.price
																				}
																				<span className="text-muted">
																					x
																				</span>
																			</strong>
																		</h6>
																	</div>
																	<div className="col-xs-4">
																		<input
																			type="text"
																			className="form-control input-sm"
																			defaultValue={
																				1
																			}
																		/>
																	</div>
																	<div className="col-xs-2">
																		<button
																			type="button"
																			className="btn btn-link btn-xs">
																			<span className="glyphicon glyphicon-trash">
																				{" "}
																			</span>
																		</button>
																	</div>
																</div>
															</div>
														);
													}
												)}
												<div className="row">
													<div className="text-center">
														<div className="col-xs-9">
															<h6 className="text-right">
																Added items?
															</h6>
														</div>
														<div className="col">
															<button
																type="button"
																className="btn btn-default">
																Update cart
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="panel-footer">
												<div className="row text-center">
													<div className="col-xs-9">
														<h4 className="text-right">
															Total{" "}
															<strong>
																$50.00
															</strong>
														</h4>
													</div>
													<div className="col-xs-3">
														<Link to="/Thanks">
															<button
																type="button"
																className="btn btn-success btn-block">
																Checkout
															</button>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
