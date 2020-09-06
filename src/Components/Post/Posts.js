import React, { useContext } from "react";
import { PostsContext } from "../ContextProvider";
import RenderPosts from "./RenderPosts";

const Posts = () => {
	const { posts } = useContext(PostsContext);
	//outputting the posts with a helper function
	const getJSX = (posts) => {
		return (
			<div>
				{posts.map((post) => {
					return (
						<div className="postList" key={post.id}>
							<RenderPosts posts={post} />
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className="list">
			<div>{getJSX(posts)}</div>
		</div>
	);
};

export default Posts;
