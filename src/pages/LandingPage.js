import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Products from "../components/Products";

const LandingPage = ({ DB }) => {
	return (
		<div>
			<Navbar></Navbar>
			<Main></Main>
			<Products DB={DB}></Products>
		</div>
	);
};

export default LandingPage;
