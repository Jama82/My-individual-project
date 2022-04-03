import { Container } from "@mui/material";
import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./SectionThree.css";
import logo from "../../assets/images/2.png";

const SectionThree = () => {
	return (
		<div className="footer">
			<div className="ftr-txt">
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
								<InstagramIcon sx={{ color: "#fff" }} />
							</li>
						</a>
						<a href="https://youtu.be/vUTNvbYcNLI">
							<li style={{ margin: "10px" }}>
								<YouTubeIcon sx={{ color: "#fff" }} />
							</li>
						</a>
						<a target="_blank" href="https://www.facebook.com/MagnoliaBakery/">
							<li style={{ margin: "10px" }}>
								<FacebookIcon sx={{ color: "#fff" }} />
							</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
