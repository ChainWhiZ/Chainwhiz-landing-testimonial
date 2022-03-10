import React from "react";
import {
	Box,
	Typography,
	Grid,
	Container
} from "@mui/material";

const Testimonial = () => {

    const TweetIds = [];

	return (
			<Box sx={{minHeight :"100vh" , backgroundColor: "#000"}}>
				<Container maxWidth="lg">
					<Grid
						container
						justifyContent="center"
						alignItems="center"
					>
						<Grid item xs={12} pt={10}>
								<Typography
									variant="h3"
									color="common.white"
									sx={{ fontWeight: 700 , textAlign : "center" , fontFamily : "Poppins"}}
								>
									Kya{" "}
									<span style={{ color: "#D6FE2E" }}>
										Kool
									</span>
                                    {" "}Hei Hum
								</Typography>
						</Grid>
                        <Grid item sx={12} md={6}>
                                <Typography
									variant="h6"
									color="common.white"
									sx={{ fontWeight: 500 , textAlign : "right" , fontFamily : "Poppins"}}
								>
									Basically,{" "}
									<span style={{ color: "#D6FE2E" }}>
										WAGMI
									</span>
								</Typography>
						</Grid>
						<Grid item xs={12} p={10}>
								<Grid
									container
									justifyContent="space-around"
									alignItems="center"
                                    sx={{textAlign : "center"}}
								>
									<Grid item xs={10} md={4} sx={{color : "#fff"}}>
                                        H
									</Grid>
                                    <Grid item xs={10} md={4} sx={{color : "#fff"}}>
                                        H
									</Grid>
                                    <Grid item xs={10} md={4} sx={{color : "#fff"}}>
                                        H
									</Grid>
                                    <Grid item xs={10} md={4} sx={{color : "#fff"}}>
                                        H
									</Grid>
                                    <Grid item xs={10} md={4} sx={{color : "#fff"}}>
                                        H
									</Grid>
                                    <Grid item xs={10} md={4} sx={{color : "#fff"}}>
                                        H
									</Grid>
								</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
	);
};
export default Testimonial;