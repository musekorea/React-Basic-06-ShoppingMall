import React, { useState } from "react";
import st from "./Products.module.css";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
	return (
		<Link to={`/detail/${data.id}`}>
			<div className={`col-md ${st.product}`}>
				<img src={data.image} alt="" style={{ width: "100px" }} />
				<h3>{data.title}</h3>
				<p className={st.content}>{data.content}</p>
				<p className={st.price}>{data.price}</p>
			</div>
		</Link>
	);
};

const Products = ({ DB }) => {
	return (
		<div className="container">
			<div className="row">
				{DB.map((data) => (
					<Product data={data} key={data.id}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
