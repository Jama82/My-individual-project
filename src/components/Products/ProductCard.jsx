import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { useProducts } from "../../contexts/PoductContext";
import { useProducts } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Delete, Edit } from "@mui/icons-material";
import { ADMIN } from "../../helpers/consts";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import "../Product/ProductStyles/ProductCard.css";
import { height } from "@mui/system";

export default function MediaCard({ item }) {
	const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
	const navigate = useNavigate();

	const {
		user: { email },
	} = useAuth();

	return (
		<>
			<Card
				sx={{
					borderRadius: 3,
					width: "400px",
					height: "450px",
					border: "5px solid #890f0d",
				}}
			>
				<div className="cardProduct">
					<CardMedia
						sx={{ borderRadius: 2, height: "250px" }}
						component="img"
						height="300"
						image={item.picture}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{item.name}
						</Typography>
						<Typography variant="body2" color="text.primary">
							{item.description}
						</Typography>
						<Typography variant="body2" color="text.primary">
							{item.price}
						</Typography>
					</CardContent>
				</div>
				<CardActions>
					{email === ADMIN ? (
						<>
							{" "}
							<Button size="large" onClick={() => deleteProduct(item.id)}>
								<DeleteIcon sx={{ color: "black" }} />
							</Button>
							<Button size="large" onClick={() => navigate(`/edit/${item.id}`)}>
								<EditIcon sx={{ color: "black" }} />
							</Button>
						</>
					) : (
						<IconButton onClick={() => addProductToCart(item)}>
							<LocalMallIcon
								color={checkProductInCart(item.id) ? "primary" : ""}
							/>{" "}
						</IconButton>
					)}
				</CardActions>
			</Card>
		</>
	);
}
