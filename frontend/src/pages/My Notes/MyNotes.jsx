import React, { useEffect } from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./mynotes.css";
import { useNavigate } from "react-router-dom";

const MyNotes = () => {
	const navigate = useNavigate();
	useEffect(() => {
		let token = localStorage.getItem("token");
		let name = localStorage.getItem("email");
		if (!token && !name) {
			navigate("/");
		}
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default MyNotes;
