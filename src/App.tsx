import reactLogo from "@/assets/react.svg";
import "@/designs/App.css";
import "@/designs/page/dashboard.scss";
import { useState } from "react";
import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import routeElements from "./routers/useRouterModules";
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
			</div>
			<div>
				<RouterProvider router={routeElements} />
			</div>
		</>
	);
}

export default App;
