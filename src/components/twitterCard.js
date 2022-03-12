import { TwitterTweetEmbed } from "react-twitter-embed";

const TwitterCard = ({ tweetId }) => {
	return (
		<TwitterTweetEmbed
			options={{ theme: "dark", width: "auto" }}
			tweetId={tweetId}
		/>
	);
};

export default TwitterCard;
