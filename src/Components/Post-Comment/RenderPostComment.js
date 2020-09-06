import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../ContextProvider";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import CommentsAvatar from "./CommentsAvatar";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import faker from "faker";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

const RenderPostComment = () => {
	const classes = useStyles();
	const { findPost } = useContext(PostsContext);
	let { id } = useParams();
	const [comments, setComment] = useState([]);
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
			.then((res) => setComment(res.data));
	}, [id]);
	const post = findPost(id);
	return post === undefined || comments.length === 0 ? (
		<div className={classes.root}>
			<LinearProgress />
			<LinearProgress color="secondary" />
		</div>
	) : (
		<Card className={classes.root}>
			<Grid container alignItems="center" justify="center">
				<Grid item lg={6}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe" className={classes.avatar}>
								<img src={faker.image.avatar()} alt={post.title} />
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={post.title}
						subheader="September 6, 2020"
					/>

					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{post.body}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
						<IconButton
							className={clsx(classes.expand, {
								[classes.expandOpen]: expanded,
							})}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<Typography>Comments</Typography>
						</IconButton>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							{comments.map((comment) => {
								return (
									<div key={Math.random()}>
										<CommentsAvatar comment={comment} />
									</div>
								);
							})}
						</CardContent>
					</Collapse>
				</Grid>
			</Grid>
		</Card>
	);
};
export default RenderPostComment;
