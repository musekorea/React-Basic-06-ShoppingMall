import React, { useState } from "react";
import st from "./Products.module.css";
import fakeDB from "../db/fakeDB";

const Product = ({ data }) => {
	return (
		<div className={`col-md ${st.product}`}>
			<img src={data.image} alt="" style={{ width: "100px" }} />
			<h3>{data.title}</h3>
			<p className={st.content}>{data.content}</p>
			<p className={st.price}>{data.price}</p>
		</div>
	);
};

const Products = () => {
	const [products, setProducts] = useState(fakeDB);
	return (
		<div className="container">
			<div className="row">
				{products.map((data) => (
					<Product data={data} key={data.id}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
