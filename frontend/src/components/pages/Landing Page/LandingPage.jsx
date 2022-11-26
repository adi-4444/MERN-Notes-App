import React, { useState } from "react";
import "./landingpage.css";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import blob1 from "../../common/assets/blob1.svg";
import blob2 from "../../common/assets/blob2.svg";
import blob3 from "../../common/assets/blob3.svg";
import blob4 from "../../common/assets/blob4.svg";

const LandingPage = () => {
	const [auth, setAuth] = useState("login");

	return (
		<div>
			<div className='landing-page'>
				<div className='design-div'>
					<div>
						<h1 className='font-semibold text-yellow-300 text-4xl text-center p-2'>
							Welcome to Note Safe
						</h1>
						<h1 className='heading font-semibold text-6xl absolute select-none'>
							Hey, are you trying to <br /> keep your notes safe
							<h2 className='sub-heading font-semibold text-4xl'>
								You are at right place
							</h2>
						</h1>
					</div>

					<div className='forms'>
						{auth === "login" && <Login setAuth={setAuth} />}
						{auth === "register" && <Signup setAuth={setAuth} />}
					</div>

					<img className='blob1 absolute' src={blob1} alt='.' />
					<img className='blob2 absolute' src={blob2} alt='.' />
					<img className='blob3 absolute' src={blob3} alt='.' />
					<img className='blob4 absolute' src={blob4} alt='.' />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
