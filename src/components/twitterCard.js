import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import CircularProgress from "@mui/material/CircularProgress";

const TwitterCard = ({ tweetId }) => {
	const [loading, setLoading] = React.useState(true);

	const afterComponentLoad = () => {
		setLoading(false);
	};

	return (
		<div>
			{loading && <CircularProgress sx={{ color: "#232222" }} />}
			<TwitterTweetEmbed
				options={{ theme: "dark", width: "auto" }}
				onLoad={(element) => afterComponentLoad(element)}
				tweetId={tweetId}
			/>
		</div>
	);
};

export default TwitterCard;
