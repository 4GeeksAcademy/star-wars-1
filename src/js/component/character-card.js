import React, { useState, useEffect, useContext } from 'react'
export default function CharacterCard() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await fetch("https://www.swapi.tech/api/people");
            const data = await result.json();
            setCharacters(data.results);
            
        }
        fetchData()
        
    }, [])
    console.log(characters)
    return (
        <div>
            {characters.length ? characters.map((character, index) => (
                <div className="card" style={{width: "18rem"}} key={index}>
                    {console.log(character)}
                    <img src="https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/400369/the-child_star-wars_gallery_63f96869ef49c.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            )) : null}
        </div>
    )
}
