import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<Paper
			elevation={0}
			sx={{
				minHeight: "100dvh",
				width: "100dvw",
				overflow: "hidden",
				borderRadius: 0,
			}}
		>
			<Outlet />
		</Paper>
	);
};

export default Layout;
