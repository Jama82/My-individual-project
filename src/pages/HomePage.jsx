import React from "react";
// import Home from "../components/Home/Home";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import SectionThree from "../components/Home/SectionThree/SectionThree";
import SectionTwo from "../components/Home/SectionTwo/SectionTwo";

const HomePage = () => {
	return (
		<div>
			<HomeHeader />
			<SectionTwo />
			<SectionThree />
		</div>
	);
};

export default HomePage;
