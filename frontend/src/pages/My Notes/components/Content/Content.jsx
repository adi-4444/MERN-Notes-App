import React from "react";
import "./content.css";
import Note from "./Note/Note";

const Content = () => {
	return (
		<div className='content-wrapper'>
			<h1 className='text-center text-xl mt-2'>Hi , Adi</h1>
			<Note />
		</div>
	);
};

export default Content;
