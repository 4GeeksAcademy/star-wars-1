import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/character-card";
import PlanetCard from "../component/planetcard";
import StarshipCard from "../component/starshipcard";
export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<CharacterCard/>
		<PlanetCard/>
		<StarshipCard/>
	</div>
);
