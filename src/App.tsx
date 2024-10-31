import { RouterProvider } from "react-router-dom";
import routeElements from "./routers/useRouterModules";
function App() {
	return (
		<>
			<div>
				<RouterProvider router={routeElements} />
			</div>
		</>
	);
}

export default App;
