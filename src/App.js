/** @format */

import { Route, Routes } from "react-router-dom";
import CompilerScreen from "./components/CodeScreen";
import Home from "./components/Home";

function App() {
	return (
		<div className="text-center">
			<Routes>
				<Route
					path="/"
					element={<Home />}></Route>
				<Route
					path="/compiler"
					element={<CompilerScreen />}></Route>
			</Routes>
		</div>
	);
}

export default App;
