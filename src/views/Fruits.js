import React from "react";

import fruitsAboutImg from "../images/fruits-abt.jpg";

const Foods = () => {
	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
			<div className="flex lg:flex-row flex-col my-10 justify-center">
				<div className="flex items-center lg:mt-0 mt-5 gap-3 lg:flex-row flex-col">
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
			<hr className="my-10" />
			<div className="my-5">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					All Fruits
					<span role="img" aria-label="fruit">
						🍋
					</span>
				</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="bg-gray-100 rounded shadow-xl p-5 std-border">
						<div className="flex flex-col items-center">
							<img
								src={fruitsAboutImg}
								alt="Mango"
								className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
							/>
							<h4 className="text-2xl pt-3 font-bold capitalize">MAngo</h4>
							<small className="uppercase text-gray-400 font-semibold">
								Mango
							</small>
						</div>
						<p className="mt-5">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							sint delectus tempora officia, qui doloribus necessitatibus beatae
							exercitationem, dolore hic laborum animi odit dolores! Iste
							exercitationem atque labore asperiores enim!
						</p>
					</div>
					<div className="bg-gray-100 rounded shadow-xl p-5 std-border">
						<div className="flex flex-col items-center">
							<img
								src={fruitsAboutImg}
								alt="Mango"
								className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
							/>
							<h4 className="text-2xl pt-3 font-bold capitalize">MAngo</h4>
							<small className="uppercase text-gray-400 font-semibold">
								Mango
							</small>
						</div>
						<p className="mt-5">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							sint delectus tempora officia, qui doloribus necessitatibus beatae
							exercitationem, dolore hic laborum animi odit dolores! Iste
							exercitationem atque labore asperiores enim!
						</p>
					</div>
					<div className="bg-gray-100 rounded shadow-xl p-5 std-border">
						<div className="flex flex-col items-center">
							<img
								src={fruitsAboutImg}
								alt="Mango"
								className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
							/>
							<h4 className="text-2xl pt-3 font-bold capitalize">MAngo</h4>
							<small className="uppercase text-gray-400 font-semibold">
								Mango
							</small>
						</div>
						<p className="mt-5">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							sint delectus tempora officia, qui doloribus necessitatibus beatae
							exercitationem, dolore hic laborum animi odit dolores! Iste
							exercitationem atque labore asperiores enim!
						</p>
					</div>
					<div className="bg-gray-100 rounded shadow-xl p-5 std-border">
						<div className="flex flex-col items-center">
							<img
								src={fruitsAboutImg}
								alt="Mango"
								className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
							/>
							<h4 className="text-2xl pt-3 font-bold capitalize">MAngo</h4>
							<small className="uppercase text-gray-400 font-semibold">
								Mango
							</small>
						</div>
						<p className="mt-5">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							sint delectus tempora officia, qui doloribus necessitatibus beatae
							exercitationem, dolore hic laborum animi odit dolores! Iste
							exercitationem atque labore asperiores enim!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Foods;
