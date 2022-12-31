import React, { useEffect } from "react";
import "./content.css";
import Note from "./Note/Note";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../../../redux/actions/notesActions";

const Content = () => {
	const dispatch = useDispatch();
	const notesList = useSelector((state) => state.notesList);
	const { loading, notes, errorMessage } = notesList;
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	useEffect(() => {
		dispatch(listNotes());
	}, [dispatch]);
	return (
		<div className='content'>
			<h1 className='text-center text-xl py-1'>Hi , {userInfo.name}</h1>
			<div className='content-wrapper'>
				<button className='bg-blue-500 p-2 rounded-2xl text-center ml-7'>
					Create New Note
				</button>
				<Note notes={notes} />
			</div>
		</div>
	);
};

export default Content;
