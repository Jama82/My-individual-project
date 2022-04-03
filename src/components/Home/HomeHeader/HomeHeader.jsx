import { Container } from "@mui/material";
import React from "react";
import hero from "../../assets/images/hero.png";
import "./HomeHeader.css";
import croissant from "../../assets/images/croissant.svg";
import time from "../../assets/images/dingdong.svg";
import oven from "../../assets/images/oven.svg";
import credit from "../../assets/images/love.svg";
import story from "../../assets/images/story.jpeg";

const HomeHeader = () => {
	return (
		<>
			<div className="header">
				<div
					className="banner"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<h1 className="hero-section-bg-title">
						FRESH <br /> PASTRY
						<br /> KITS
					</h1>
				</div>

				<div className="hero-img">
					<img src={hero} alt="" />
				</div>
			</div>

			<div className="header-txt">
				<p>
					Bringing the smells and tastes of your favourite patisserie to your
					home. Our kits have everything you need to easily make killer pastries
					every time. We’ve done the tricky bits so all you need to do is roll,
					proof and bake! Freshly baked means fresh bakery smells filling your
					home, warm oozey pastries on your plates, and never needing to get out
					of your PJs.
				</p>
			</div>

			<div className="story">
				<div className="story-img">
					<img src={story} sx={{ maxWidth: "100%" }} />
				</div>
				<div className="story-txt">
					<h2>Our Story</h2>
					<p>
						We are a quintessential bakery baking from the heart of Kyrgyzstan.
						Whether it's our slow-fermented sourdough, home-made , all types of
						bakery - greatest joy of all comes from sharing our work with you.
						We invite you to our pastries for every day.
					</p>
				</div>
			</div>

			<div className="works-section">
				<h3 className="works-txt">HOW IT WORKS</h3>
				<div className="works">
					<div className="works-articles">
						<img src={croissant} alt="#" />
						<h4>Choose your fave</h4>
						<p>
							This sounds easier than it's going to be. We've got all the
							classics on here, so now it's over to you.
						</p>
					</div>
					<div className="time">
						<img src={time} alt="#" />
						<h4>Ding dong</h4>
						<p>
							Next you'll get a beautiful little package delivered to your door,
							on a day and time slot that you choose.
						</p>
					</div>
					<div className="bake">
						<img src={oven} alt="#" />
						<h4>Get baked</h4>
						<p>
							Take your fresh pastry sheet and fillings, learn our pro
							techniques then never buy a stale pastry ever again.
						</p>
					</div>
					<div className="credit">
						<img src={credit} alt="#" />
						<h4>Take the credit</h4>
						<p>
							It was all you, nudge-nudge wink-wink. We're just happy to be your
							loyal side-kick.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeHeader;
