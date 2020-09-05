import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Posts from "./Components/Post/Posts";
import ContextProvider from "./Components/ContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RenderPostComment from "./Components/Post-Comment/RenderPostComment";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import Home from "./Components/Home/Home";

function App() {
	const theme = createMuiTheme({
		palette: {
			type: "dark",
		},
		overrides: { MuiAppBar: { colorPrimary: { backgroundColor: "#3e2723" } } },
	});

	return (
		<ThemeProvider theme={theme}>
			<Paper style={{ height: "100vh" }}>
				<Router>
					<div className="App">
						<Navbar />
						<ContextProvider>
							<Switch>
              <Route exact path="/">
									<Home/>
								</Route>

								<Route exact path="/posts">
									<Posts />
								</Route>
								<Route path="/posts/:id">
									<RenderPostComment />
								</Route>
							</Switch>
						</ContextProvider>
					</div>
				</Router>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
