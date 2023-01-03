import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Header = ({ setSearch }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
		navigate("/");
	};
	const profileHandler = () => {
		navigate("/myprofile");
	};
	return (
		<div>
			<div className='navbar-wrapper w-full flex items-center p-2 justify-around shadow-xs'>
				<a
					href='/mynotes'
					className='flex items-center gap-2 ml-8 text-2xl font-semibold text-yellow-300 md:flex'
				>
					<h1>Note Safe</h1>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-8 h-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
						/>
					</svg>
				</a>

				<span className='w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex'>
					<input
						type='search'
						name='search'
						placeholder='Search'
						className='flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</span>

				<div className='flex flex-row-reverse text-white mr-4 ml-4 md:hidden'>
					<button>
						<svg
							width='20'
							height='20'
							fill='currentColor'
							className='h-8 w-8'
							viewBox='0 0 1792 1792'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
						</svg>
					</button>
				</div>

				<div className='flex items-center gap-8 mr-5 md:flex'>
					<a
						href='/mynotes'
						className='ml-8 mr-8 text-lg text-white hidden md:flex'
					>
						My Notes
					</a>

					<Menu
						as='div'
						className='relative inline-block text-center'
					>
						<div>
							<Menu.Button className='text-white capitalize hover:bg-white hover:text-black'>
								{userInfo ? userInfo?.name : "Login"}
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='absolute items mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
								<div className='px-1 py-1 '>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`bg-white hover:bg-indigo-500 ${
													active
														? "bg-indigo-500 text-white"
														: "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												onClick={profileHandler}
											>
												My Account
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`bg-white hover:bg-indigo-500 ${
													active
														? "bg-indigo-500 text-white"
														: "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												onClick={logoutHandler}
											>
												Log Out
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Header;
