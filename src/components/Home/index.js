/** @format */

import React from "react";
import Logo from "../../assets/coding.gif";

const Home = () => {
	return (
		<div className="flex flex-row h-[100vh] bg-slate-400 justify-between">
			<div className="w-[45%] border-[1px] h-full border-black bg-slate-800 text-white">
				<div className="flex flex-col justify-center items-center h-full gap-4">
					<img
						src={Logo}
						className="h-[150px] w-[200px]"></img>
					<h2 className="text-3xl font-extrabold ">
						Tech-Treasure Hub <br></br> Code-Compiler
					</h2>

					<button className="border-[1px] p-4 rounded-full">
						<span>+</span> Create New Folder with File
					</button>
				</div>
			</div>
			<div className="w-[55%] border-[1px] border-black bg-slate-300">
				Right
			</div>
		</div>
	);
};

export default Home;
