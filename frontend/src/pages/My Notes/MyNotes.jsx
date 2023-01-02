import React, { useEffect } from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./mynotes.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNotes = () => {
	const navigate = useNavigate();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
	}, [userInfo, navigate]);

	return (
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default MyNotes;
