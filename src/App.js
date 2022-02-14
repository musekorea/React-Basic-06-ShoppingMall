import "./App.css";
import React, { useState } from "react";
import LandingPage from "./pages/LandingPage.js";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DB from "./db/fakeDB";

function App() {
	const [products, setProducts] = useState(DB);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage DB={DB} />}></Route>
					<Route
						path="/detail/:params"
						element={<DetailPage DB={DB} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
