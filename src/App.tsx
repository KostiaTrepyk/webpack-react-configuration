import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import appRouter from "@/core/Router/router";
import theme from "@/core/theme";
import { store } from "@/store/store";

import "@/styles/index.sass";

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={appRouter}></RouterProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
