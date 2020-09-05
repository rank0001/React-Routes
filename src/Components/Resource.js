import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Resource = () => {
	const [resource, setResource] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setResource(response.data);
		})();
	}, []);
	return resource;
};

export default Resource;
