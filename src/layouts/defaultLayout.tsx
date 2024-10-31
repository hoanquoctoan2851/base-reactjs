import { Outlet } from "react-router-dom";

function DefaultLayout() {
	return (
		<div className="default-layout">
			<Outlet></Outlet>
		</div>
	);
}

export default DefaultLayout;
