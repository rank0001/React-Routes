import React from "react";
import { Paper, Grid, Avatar,Typography } from "@material-ui/core";
import faker from "faker";

export default function CommentsAvatar(props) {
	const { name, email, body } = props.comment;

	return (
		<Paper variant="outlined">
			<Grid container alignItems="center" justify="center">
				<Grid item lg={2}>
					<Avatar alt="comment pictures" src={faker.image.avatar()} />
				</Grid>

				<Grid item lg={6}>
					<Typography paragraph>{email}</Typography> 
                    <Typography variant="h5">{body}</Typography> 
                    <Typography paragraph>{name}</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
