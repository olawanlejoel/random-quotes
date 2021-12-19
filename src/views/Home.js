import React from "react";

import fruitsImg from "../images/fruits-icon.png";

const Home = () => {
	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto">
			<div className="flex lg:flex-row flex-col my-10 justify-center text-center">
				<div className="">
					<h2 className="text-3xl lg:text-4xl font-bold">
						Hello
						<span role="img" aria-label="hi">
							👋
						</span>
					</h2>
					<p className="text-xl lg:text-2xl">
						Wanna know the nutritional components of your fruits?
					</p>
				</div>
			</div>
			<hr className="my-10" />
			<div
				className="bg-gray-100 rounded-xl p-10 w-full flex lg:flex-row flex-col items-center justify-center lg:gap-40 gap-20 lg:mb-40 mb-20"
				// style={{ backgroundColor: `#${category.hexCode}` }}
			>
				<img src={fruitsImg} alt="fruit icon" className="w-80" />
				<div className="">
					<div className="text-center">
						<h4 className="text-2xl py-3 font-bold capitalize">
							Get to know your Fruits!
						</h4>
						<p>
							Get basic nutritional facts about your fruit with just one search.
						</p>
					</div>
					<div className="flex items-center mt-5 gap-3 flex-col">
						<input
							type="text"
							className="w-full lg:w-80 p-2 border-2 border-gray-500 rounded focus:outline-none"
						/>
						<button
							style={{ backgroundColor: "#FE043C" }}
							className="rounded w-full lg:w-auto px-10 py-3 text-white"
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
