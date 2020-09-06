import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Posts from "./Components/Post/Posts";
import ContextProvider from "./Components/ContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RenderPostComment from "./Components/Post-Comment/RenderPostComment";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import Home from "./Components/Home/Home";
import NoRoute from "./Components/NoRoute/NoRoute";

function App() {
	const theme = createMuiTheme({
		palette: {
			type: "dark",
		},
		overrides: { MuiAppBar: { colorPrimary: { backgroundColor: "#3e2723" } } },
	});
	return (
		<Router>

		<ThemeProvider theme={theme}>
			<Paper style={{ height: "auto", minHeight: "100vh" }}>
				
					<div className="App">
						<Navbar />
						<ContextProvider>
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>

								<Route exact path="/posts">
									<Posts />
								</Route>
								<Route path="/posts/:id">
									<RenderPostComment />
								</Route>

								<Route path="*">
									<NoRoute />
								</Route>
							</Switch>
						</ContextProvider>
					</div>
			
			</Paper>
		</ThemeProvider>
		</Router>
	);
}

export default App;
