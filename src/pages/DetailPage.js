import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import st from "./DetailPage.module.css";

const DetailPage = ({ DB }) => {
	const { params } = useParams();
	const data = DB[params];
	return (
		<div>
			<Navbar></Navbar>
			<div className={st.product}>
				<img src={data.image} alt="" />
				<h3>{data.title}</h3>
				<p className={st.content}>{data.content}</p>
				<p className={st.price}>{data.price}</p>
				<button className="btn btn-danger">주문하기</button>
			</div>
		</div>
	);
};

export default DetailPage;
