import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext"
export const Navbar = () => {
	const [favorited, setFavorites] = useState(false)
    const { store, actions } = useContext(Context)
	useEffect(()=>{
		setFavorites(store.favorites)
	},[store.favorites])
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul class="dropdown-menu">
						{favorited.length ? (
							favorited.map((item)=>{
								return(
									<li>{item.name}
									<button onClick={()=>{actions.removeFavorited(item)}}>x</button></li>
								)
							}):(
								<li>no Favorites</li>
							)
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
