import React, { useState, useEffect } from "react";
import "./content.css";
import Note from "./Note/Note";
import axios from "axios";

const Content = () => {
	const [notes, setNotes] = useState([]);
	const fetchNotes = async () => {
		axios
			.get("http://127.0.0.1:5050/api/notes")
			.then((res) => setNotes(res.data));
	};
	useEffect(() => {
		fetchNotes();
	}, []);
	return (
		<div className='content-wrapper'>
			<h1 className='text-center text-xl mt-2'>Hi , Adi</h1>
			<Note notes={notes} />
		</div>
	);
};

export default Content;
