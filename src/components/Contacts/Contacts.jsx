import {
	Button,
	Card,
	CardContent,
	Grid,
	Link,
	TextField,
	Typography,
	ImageListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Contacts.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { createTheme } from "@mui/material/styles";

const style = {
	maxWidth: "800px",
	marginTop: "100px",
	background: "rgba(255, 255, 255, 0.1)",
	border: "3px solid #616161",
};

const styleInput = {
	border: "3px solid #616161",
};

const Contacts = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="cont">
			<Grid
				maxWidth="lg"
				sx={{
					margin: "0 auto",
				}}
			>
				{open ? (
					<center>
						<Card
							style={style}
							sx={{
								// margin: "220px auto",
								backgroundColor: "white",
								borderRadius: 10,
								border: "2px solid #890f0d",
								alignItems: "center",
							}}
						>
							<CardContent sx={{ background: "white" }}>
								<form>
									<Grid container spacing={1}>
										<Grid xs={12} sm={6} item>
											<TextField
												label="First Name"
												placeholder="Enter first name"
												variant="outlined"
												fullWidth
												color="primary"
											/>
										</Grid>

										<Grid xs={12} sm={6} item>
											<TextField
												label="Last Name"
												placeholder="Enter  last name"
												variant="outlined"
												fullWidth
												required
												color="primary"
											/>
										</Grid>

										<Grid xs={12} item>
											<TextField
												type="email"
												label="Email"
												placeholder="Enter  email"
												variant="outlined"
												fullWidth
												required
												color="primary"
											/>
										</Grid>

										<Grid xs={12} item>
											<TextField
												type="number"
												label="Phone"
												placeholder="Enter phone number"
												variant="outlined"
												fullWidth
												required
												color="primary"
											/>
										</Grid>

										<Grid xs={12} item>
											<TextField
												label="Message"
												placeholder="Type your message"
												variant="outlined"
												fullWidth
												required
												multiline
												rows={4}
												color="primary"
											/>
										</Grid>

										<Grid xs={12} item>
											<Button
												sx={{ background: "#890f0d" }}
												variant="contained"
												fullWidth
												onClick={() => setOpen(false)}
											>
												Submit
											</Button>
										</Grid>
									</Grid>
									<Button
										sx={{ marginTop: "5px", background: "grey" }}
										variant="contained"
										fullWidth
										onClick={() => setOpen(false)}
									>
										Close
									</Button>
								</form>
							</CardContent>
						</Card>
					</center>
				) : (
					<center>
						<Grid
							container
							maxWidth="lg"
							sx={{
								marginTop: "10vh",
								backgroundColor: "white",

								alignItems: "center",
							}}
						>
							<Grid
								item
								lg={6}
								sx={{
									margin: "20px auto",
								}}
							>
								<Grid item lg={12}>
									{" "}
									<Typography
										sx={{ fontSize: "10vh" }}
										className="get_typography"
									>
										Get in Touch
									</Typography>
								</Grid>

								<Grid item lg={12} sx={{ marginTop: "7vh" }}>
									<Typography
										sx={{ fontSize: 20 }}
										color="text.secondary"
										gutterBottom
										maxWidth="sm"
									>
										For questions and assistance related to corporate matters
										(sponsorship/donations, idea/invention submissions, general
										feedback for Asu bakery) or for help with product you
										purchased from an authorized Asu retail partner, please
										contact us at +996774180743 (7 a.m. - 4 p.m. PT, Monday
										through Friday).
									</Typography>
								</Grid>

								<Grid item lg={12}>
									{" "}
									<Typography
										data-aos="fade-up-left"
										sx={{ fontSize: 20 }}
										color="text.secondary"
										gutterBottom
										maxWidth="sm"
									></Typography>
								</Grid>

								<Grid lg={12} sx={{ marginTop: "10vh" }}>
									<Link
										href="https://google.com"
										sx={{
											display: "flex",
											alignItems: "center",
											fontWeight: 900,
											fontSize: "22px",
											textDecoration: "none",
										}}
										color="text.secondary"
										gutterBottom
									>
										<LocalPhoneOutlinedIcon
											className="grid-icon"
											sx={{
												marginRight: "1vw",
												transition: "all 0.5s ease",
												color: "#890f0d",
											}}
										/>
										+996773860211
									</Link>

									<Link
										href="https://www.instagram.com/vanilka.kg/"
										sx={{
											display: "flex",
											alignItems: "center",
											fontWeight: 900,
											fontSize: "22px",
											textDecoration: "none",
										}}
										color="text.secondary"
										gutterBottom
									>
										<InstagramIcon
											sx={{
												marginRight: "1vw",
												transition: "all 0.5s ease",
												color: "#890f0d",
											}}
											className="grid-icon"
										/>
										ASU Bakery
									</Link>

									<Link
										href="https://www.facebook.com/MagnoliaBakery/"
										sx={{
											display: "flex",
											alignItems: "center",
											fontWeight: 900,
											fontSize: "22px",
											textDecoration: "none",
										}}
										color="text.secondary"
										gutterBottom
									>
										<FacebookOutlinedIcon
											className="grid-icon"
											sx={{
												marginRight: "1vw",
												transition: "all 0.5s ease",
												color: "#890f0d",
											}}
										/>
										ASU Bakery
									</Link>
								</Grid>
							</Grid>
						</Grid>

						<Button
							className="contactButton"
							variant="contained"
							onClick={() => setOpen(true)}
							sx={{
								marginTop: "-1vh",
								marginBottom: "6vh",
								background: "#890f0d",
							}}
						>
							Get in Touch
						</Button>
					</center>
				)}
			</Grid>
		</div>
	);
};

export default Contacts;
