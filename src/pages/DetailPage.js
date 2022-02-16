import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import "./DetailPage.scss";

const DetailPage = ({ DB }) => {
	const { params } = useParams();
	const data = DB[params];
	return (
		<div className="detail">
			<Navbar></Navbar>
			<Notice>Almost out of stock ~ Order Now !!</Notice>
			<div className="product">
				<img src={data.image} alt="" />
				<h3>{data.title}</h3>
				<p className="content">{data.content}</p>
				<p className="price">{data.price}</p>
				<button className="btn btn-danger">주문하기</button>
			</div>
		</div>
	);
};

export default DetailPage;
