import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: "20px",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	h3: {
		color: "brown",
	},
	linkStyle: {
		textDecoration: "none",
	},
});

export default function RenderPosts(props) {
	const { title, body, id } = props.posts;
	const classes = useStyles();

	return (
		//showing posts
		<Grid container alignItems="center" justify="center">
			<Grid item lg={6}>
				<Card className={classes.root}>
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
              variant="body1"
						>
							
								<span className={classes.h3}>Title : </span>
								{title}
							
						</Typography>

						<Typography variant="body2" component="p">
							
								<span className={classes.h3}>Body: </span>
								{body}
							
						</Typography>
					</CardContent>
					<CardActions>
						<RouterLink to={`/posts/${id}`} className={classes.linkStyle}>
							<Button size="large" variant="contained" color="secondary">
								Click to See More
							</Button>
						</RouterLink>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
}
