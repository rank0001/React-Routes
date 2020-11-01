import React from "react";
import { makeStyles, Button, Grid, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import Image from "../../background.jpg";

const useStyles = makeStyles({
	root: {
		backgroundImage: `url(${Image})`,
		height: "750px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	linkStyle: {
		textDecoration: "none",
	},
});

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography
				variant="h3"
				color="primary"
				align="center"
				className={classes.typoStyle}
				style={{ minHeight: "20vh" }}
			>
				Welcome to the social media app
			</Typography>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: "10vh" }}
			>
				<Grid item xs={3}>
					<RouterLink to="/posts" className={classes.linkStyle}>
						<Button
							className="button"
							variant="contained"
							color="secondary"
							size="large"
							to="/posts"
						>
							Fetch Posts
						</Button>
					</RouterLink>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
