import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Blog extends React.Component {
	render() {
		return (
			<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
				<div className="col-md-6 px-0">
					<h1 className="display-4 font-italic">
						Title of a longer featured blog post
					</h1>
					<p className="lead my-3">
						{
							"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents"
						}
					</p>
					<p className="lead mb-0">
						<a href="#" className="text-white font-weight-bold">
							{"Continue reading..."}
						</a>
					</p>
				</div>
				<div className="row mb-2">
					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{"New!"}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{"Blog Post"}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 11"}
								</div>
								<p className="card-text text-dark mb-auto">
									{
										"Kids and how to deal with them. A safe guide."
									}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="http://www.fondazioneprada.org/wp-content/uploads/The-Prada-Double-Club-Miami_1-2-959x640.jpg"
								data-holder-rendered="true"
							/>
						</div>
					</div>

					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{"Blog Post"}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 10"}
								</div>
								<p className="card-text text-dark mb-auto">
									{"How dancing can spice up your life"}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="http://www.fondazioneprada.org/wp-content/uploads/The-Prada-Double-Club-Miami_1-2-959x640.jpg"
								data-holder-rendered="true"
							/>
						</div>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{"Blog Post"}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 9"}
								</div>
								<p className="card-text text-dark mb-auto">
									{
										"A guide to incorporate dance in your busy schedule"
									}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="http://www.fondazioneprada.org/wp-content/uploads/The-Prada-Double-Club-Miami_1-2-959x640.jpg"
								data-holder-rendered="true"
							/>
						</div>
					</div>

					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{"Blog Post"}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 8"}
								</div>
								<p className="card-text text-dark mb-auto">
									{"Healthy eating on the go"}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="http://www.fondazioneprada.org/wp-content/uploads/The-Prada-Double-Club-Miami_1-2-959x640.jpg"
								data-holder-rendered="true"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
