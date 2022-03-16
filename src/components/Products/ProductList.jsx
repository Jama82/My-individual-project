import { Margin } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useProducts } from "../../contexts/PoductContext";
import { useProducts } from "../../contexts/ProductContext";
// import MediaCard from "../Product/ProductCard";
import MediaCard from "./ProductCard";
import SideBar from "../SideBar/SideBar";
import "./ProductList.css";

const ProductList = ({ products }) => {
	const { getProducts } = useProducts();

	const [searchParams, setSearchParams] = useSearchParams();

	const [search, setSearch] = useState(
		searchParams.get("q") ? searchParams.get("q") : ""
	);

	useEffect(() => {
		getProducts();
	}, [searchParams]);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, []);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);

	return (
		<>
			<div className="text-field" style={{ background: "white" }}>
				<TextField
					color="secondary"
					label="Search"
					variant="standard"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div
				style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#fff" }}
			>
				<div className="side-bar">
					<SideBar />
				</div>

				<div className="blog-left">
					<Grid container spacing={2}>
						{products ? (
							products.map((item) => (
								<Grid item>
									<MediaCard item={item} key={item.id} />
								</Grid>
							))
						) : (
							<>
								<h2>..Loading</h2>
							</>
						)}
					</Grid>
				</div>
			</div>
		</>
	);
};

export default ProductList;
