import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notice from "./Notice";
import "./Products.scss";

const Product = ({ data }) => {
	return (
		<Link to={`/detail/${data.id}`}>
			<div className="col-md product">
				<img src={data.image} alt="" style={{ width: "100px" }} />
				<h3>{data.title}</h3>
				<p className="content">{data.content}</p>
				<p className="price">{data.price}</p>
			</div>
		</Link>
	);
};

const Products = ({ DB }) => {
	const [alarm, setAlarm] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			console.log("몇번 실행되는가");
			setAlarm((prev) => false);
		}, 5000);
	}, []);
	return (
		<div className="container">
			{alarm ? (
				<Notice>White and Black Series is almost out of stock! </Notice>
			) : null}

			<div className="row">
				{DB.map((data) => (
					<Product data={data} key={data.id}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
