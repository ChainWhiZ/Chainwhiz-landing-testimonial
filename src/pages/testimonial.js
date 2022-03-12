import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import TwitterCard from "../components/twitterCard";
import TweetsList from "../config/TweetsList";
import Masonry from '@mui/lab/Masonry';

const Testimonial = () => {
	return (
		<Box sx={{ minHeight: "100vh", backgroundColor: "#000" }}>
			<Container maxWidth="lg">
				<Grid container justifyContent="center" alignItems="center">
					<Grid item xs={12} pt={10}>
						<Typography
							variant="h3"
							color="common.white"
							sx={{
								fontWeight: 700,
								textAlign: "center",
								fontFamily: "Poppins",
							}}
						>
							Kya <span style={{ color: "#D6FE2E" }}>Kool</span>{" "}
							Hei Hum
						</Typography>
					</Grid>
					<Grid item sx={12} md={6}>
						<Typography
							variant="h6"
							color="common.white"
							sx={{
								fontWeight: 500,
								textAlign: "right",
								fontFamily: "Poppins",
							}}
						>
							Basically,{" "}
							<span style={{ color: "#D6FE2E" }}>WAGMI</span>
						</Typography>
					</Grid>
					<Grid xs={12} py={10}>
						<Masonry columns={{sx:1, sm: 2,lg : 3 }} spacing={3} sx={{alignContent : "space-around"}}>
							{TweetsList.ids.map((id) => (
									<TwitterCard tweetId={id} />
							))}
						</Masonry>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
export default Testimonial;
