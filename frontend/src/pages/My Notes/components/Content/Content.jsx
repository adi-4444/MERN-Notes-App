import React, { useEffect, useState } from "react";
import "./content.css";
import Note from "./Note/Note";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../../../redux/actions/notesActions";
import { useNavigate } from "react-router-dom";
import ContentLoader from "../../../../common/components/loader/ContentLoader";
import CreateNote from "./Modals/Create/CreateNote";

const Content = () => {
	const [createModel, setCreateModel] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notesList = useSelector((state) => state.notesList);
	const { loading, notes, errorMessage } = notesList;
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	useEffect(() => {
		dispatch(listNotes());
		if (!userInfo) {
			navigate("/");
		}
		// eslint-disable-next-line
	}, [userInfo, navigate]);
	const openModel = () => {
		setCreateModel(true);
		console.log("open");
	};
	const closeModel = () => {
		setCreateModel(false);
		console.log("close");
	};
	return (
		<div className='content'>
			<h1 className='text-center text-xl py-1 capitalize'>
				Hi , {userInfo?.name}
			</h1>
			<div className='content-wrapper'>
				<button
					className='bg-blue-500 p-2 rounded-2xl text-center ml-7'
					onClick={openModel}
				>
					Create New Note
				</button>
				{errorMessage && (
					<div className='text-center text-2xl'>{errorMessage}</div>
				)}
				{loading && <ContentLoader />}
				<Note notes={notes} />
				{createModel && <CreateNote closeModel={closeModel} />}
			</div>
		</div>
	);
};

export default Content;
