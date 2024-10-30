import { useEffect, useState } from "react";

function Dashboard() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(count => count + 1);
		}, 1000);
	}, []);

	return <div>Dashboard {count}</div>;
}

export default Dashboard;
