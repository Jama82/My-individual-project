import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
// import { useProducts } from "../../contexts/PoductContext";
import { useProducts } from "../../contexts/ProductContext";
import "./SideBar.css";

const SideBar = () => {
	const { fetchByParams } = useProducts();
	return (
		<RadioGroup
			className="side"
			onChange={(e) => fetchByParams("type", e.target.value)}
		>
			<h5 className="choose-type">TYPE</h5>
			<FormControlLabel
				value="croissants"
				control={<Radio />}
				label="CROISSANTS"
			/>
			<FormControlLabel
				value="creamy buns"
				control={<Radio />}
				label="CREAMY BUNS"
			/>
			<FormControlLabel
				value="hachapuri"
				control={<Radio />}
				label="HACHAPURI"
			/>

			<FormControlLabel value="all" control={<Radio />} label="ALL" />
		</RadioGroup>
	);
};

export default SideBar;
