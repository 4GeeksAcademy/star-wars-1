import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/character-card";
export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<CharacterCard/>
	</div>
);
