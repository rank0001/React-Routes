import React from "react";
import Resource from "./Resource";
export const PostsContext = React.createContext();
const ContextProvider = (props) => {
	const posts = Resource();
	const findPost = (id) => {
		return posts.find((post) => post.id == id);
	};
	return (
		<PostsContext.Provider value={{ posts, findPost }}>
			{props.children}
		</PostsContext.Provider>
	);
};

export default ContextProvider;
