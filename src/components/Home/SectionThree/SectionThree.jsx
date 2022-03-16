import { Container } from "@mui/material";
import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./SectionThree.css";
import logo from "../../assets/images/2.png";

const SectionThree = () => {
	return (
		<div className="footer" style={{ padding: "40px" }}>
			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					padding: "20px",
				}}
			>
				<div>
					<a className="footer-menu" href="/home">
						<li>Home</li>
					</a>

					<a className="footer-menu" href="/contacts">
						<li>Contacts</li>
					</a>
					<a className="footer-menu" href="/products">
						<li>Products</li>
					</a>
				</div>

				<div>
					<ul className="footer-list">
						<a className="footer-menu" target="_blank" href="/">
							<li>Schwarzwald Baeckerei</li>
						</a>
						<a
							className="footer-menu"
							target="_blank"
							href="https://europeasia.su/kg/bishkek/company/bishkek-nan-pekarnya_2831242/"
						>
							<li>Bishkek-Nan</li>
						</a>
						<a
							className="footer-menu"
							target="_blank"
							href="https://www.instagram.com/vanilka.kg/"
						>
							<li>vanilka.kg</li>
						</a>
					</ul>
				</div>
				<div>
					<ul className="footer-menu">
						<a className="footer-list" target="_blank" href="">
							<li>Suiumbaeva 142/2</li>
							<li>Bishkek</li>
							<li>2022.bakery</li>
						</a>
					</ul>
				</div>
				<div className="footer-icons">
					<ul className="footer-menu" style={{ display: "flex" }}>
						<a
							target="_blank"
							href="https://www.instagram.com/grand_bakery_kg/"
						>
							<li style={{ margin: "10px" }}>
								<InstagramIcon sx={{ color: "#890f0d" }} />
							</li>
						</a>
						<a href="https://youtu.be/vUTNvbYcNLI">
							<li style={{ margin: "10px" }}>
								<YouTubeIcon sx={{ color: "#890f0d" }} />
							</li>
						</a>
						<a target="_blank" href="https://www.facebook.com/MagnoliaBakery/">
							<li style={{ margin: "10px" }}>
								<FacebookIcon sx={{ color: "#890f0d" }} />
							</li>
						</a>
					</ul>
				</div>
			</Container>
		</div>
	);
};

export default SectionThree;
