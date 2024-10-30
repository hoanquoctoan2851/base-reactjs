import { Outlet } from "react-router-dom";

function DefaultLayout() {
	return (
		<div style={{ height: "400px", background: "red", width: "100%", display: "flex" }}>
			<div style={{ margin: "auto" }}>
				<Outlet></Outlet>
			</div>
		</div>
	);
}

export default DefaultLayout;
