import React from "react";

export default function CharacterCard() {
	return (
		<div className="character-cards">
			<img src="#" alt="" />
			<h2>Character Name</h2>
			<div className="btn-row">
				<a href="#">
					<button className="button">Learn More</button>
				</a>
				<button className="button">Delete</button>
			</div>
		</div>
	);
}
