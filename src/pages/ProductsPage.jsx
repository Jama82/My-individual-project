import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import ProductList from "../components/Product/ProductList";
import ProductList from "../components/Products/ProductList";
// import { useProducts } from "../contexts/PoductContext";
import { useProducts } from "../contexts/ProductContext";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import "./ProductsPage.css";

const ProductsPage = () => {
	const { products, getProducts } = useProducts();
	const [page, setPage] = useState(0);

	const productPerPage = 2;
	const location = useLocation();

	const pageCount = Math.ceil(products.length / productPerPage);

	const pageVisited = page * productPerPage;

	const paginateProducts = products.slice(
		pageVisited,
		pageVisited + productPerPage
	);
	const changePage = ({ selected }) => {
		setPage(selected);
	};

	useEffect(() => {
		getProducts();
	}, [location.search]);
	return (
		<div style={{ backgroundColor: "#fff", height: "200px" }}>
			<ProductList products={paginateProducts} />
			<ReactPaginate
				previousLabel={<ArrowCircleLeftSharpIcon sx={{ color: "#890f0d" }} />}
				nextLabel={<ArrowCircleRightSharpIcon sx={{ color: "#890f0d" }} />}
				onPageChange={changePage}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				containerClassName="pagination"
				previousLinkClassName="previousBtn"
				nextLinkClassName="nextBtn"
				activeClassName="activeBtn"
				disableClassName="disabled"
			/>
		</div>
	);
};

export default ProductsPage;
