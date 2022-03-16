import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useProducts } from "../../contexts/PoductContext";
import { useProducts } from "../../contexts/ProductContext";
// import "./ProductStyles/AddProduct.css";

const AddProduct = () => {
	const { addProduct } = useProducts();

	const navigate = useNavigate();

	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: 0,
		picture: "",
		type: "",
	});

	const handleInp = (e) => {
		if (e.target.name === "price") {
			let obj = {
				...product,
				[e.target.name]: Number(e.target.value),
			};

			setProduct(obj);
		} else {
			let obj = {
				...product,
				[e.target.name]: e.target.value,
			};

			setProduct(obj);
		}
	};

	return (
		<Box sx={{ py: 10 }}>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					margin: "0 auto",
					boxShadow: 3,
					borderRadius: 3,
					color: "white",
				}}
			>
				<form>
					<TextField
						fullWidth
						id="outlined-basic"
						label="NAME"
						variant="outlined"
						name="name"
						onChange={handleInp}
						sx={{ my: 2, color: "white" }}
					/>
					<TextField
						fullWidth
						id="outlined-basic"
						label="DESCRIPTION"
						variant="outlined"
						name="description"
						onChange={handleInp}
						sx={{ my: 2 }}
					/>{" "}
					<TextField
						fullWidth
						id="outlined-basic"
						label="PRICE"
						variant="outlined"
						name="price"
						onChange={handleInp}
						sx={{ my: 2 }}
					/>{" "}
					<TextField
						fullWidth
						id="outlined-basic"
						label="PICTURE"
						variant="outlined"
						name="picture"
						onChange={handleInp}
						sx={{ my: 2 }}
					/>
					<TextField
						fullWidth
						id="outlined-basic"
						label="TYPE"
						variant="outlined"
						name="type"
						onChange={handleInp}
						sx={{ my: 2 }}
					/>
					<Stack direction="row" spacing={2}>
						<Button
							id="button"
							sx={{
								my: 2,
								borderColor: "#4cd137",
								fontFamily: "Monospace",
							}}
							variant="outlined"
							size="large"
							fullWidth
							onClick={() => {
								addProduct(product);

								navigate("/products");
							}}
						>
							CREATE PRODUCT
						</Button>
					</Stack>
				</form>
			</Grid>
		</Box>
	);
};

export default AddProduct;
