import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Main></Main>
			<Products></Products>
		</div>
	);
}

export default App;
