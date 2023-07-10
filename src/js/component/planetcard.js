import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext"
export default function PlanetCard() {

    const [planets, setPlanets] = useState([])
    const [favorited, setFavorites] = useState(false)
    const { store, actions } = useContext(Context)
    useEffect(() => {
        async function fetchData() {
            const result = await fetch("https://www.swapi.tech/api/planets");
            const data = await result.json();
            setPlanets(data.results);
        }
        fetchData()
    }, [])
    useEffect(() => {
        if (store.favorites.find((x) => {
            for (let y in x) {
                if (planets[y] && planets[y].name === x[y].name) {
                    return true
                }
            }
        })) { setFavorites(true) }
        else { setFavorites(false) }
    }, [store.favorites])
    return (
        <div className='d-flex col-10 overflow-auto mt-5 mx-auto'>
            {planets.length ? planets.map((planet, index) => (
                <div className="card col-1" style={{ width: "300px" }} key={index}>
                    <img height="200px" width="300px" src="https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/400369/the-child_star-wars_gallery_63f96869ef49c.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <Link to={"/planetDescription/" + planet.uid}
                            className='btn btn-primary'>Learn More</Link>
                        <button
                            onClick={() => actions.addFavorite(planet)}
                            className={favorited ? "fas fa-heart" : "far fa-heart"}
                            style={{
                                background: "transparent",
                                border: "none",
                                outline: "none",
                            }}
                        ></button>
                    </div>
                </div>
            )) : null}
        </div>
    )
}
