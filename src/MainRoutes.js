import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import ProductsPage from "./pages/ProductsPage";
import ContactsPage from "./pages/ContactsPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";
import { useAuth } from "./contexts/AuthContexts";
import { ADMIN } from "./helpers/consts";
import EditProductPage from "./pages/EditProductPage";
import CartPage from "./pages/CartPage";


const MainRoutes = () => {
	const { user } = useAuth();
	const PUBLIC_ROUTES = [
		{
			link: "/",
			element: <HomePage />,
			id: 1,
		},
		
		
		{
			link: "/products",
			element: <ProductsPage />,
			id: 3,
		},
		
		{
			link: "/contacts",
			element: <ContactsPage />,
			id: 4,
		},
		{
			link: "/auth",
			element: <AuthPage />,
			id: 5,
		},
		{
			link: "/cart",
			element: <CartPage />,
			id: 6,
		},
		
	];

	const PRIVATE_ROUTES = [
		{
			link: "/admin",
			element: <AdminPage />,
			id: 6,
		},
		{
			link: "/edit/:id",
			element: <EditProductPage />,
			id: 7,
		},
	];

	return (
		<>
			<Routes>
				{PUBLIC_ROUTES.map((item) => (
					<Route path={item.link} element={item.element} />
				))}

				 {user
					? PRIVATE_ROUTES.map((item) => (
							<Route
								path={item.link}
								element={
									user.email === ADMIN ? (
										item.element
									) : (
										<Navigate replace to="*" />
									)
								}
							/>
					  )) 
					: null}
			</Routes>
		</>
	);
};

export default MainRoutes;
