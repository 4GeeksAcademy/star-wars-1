import React, { useState, useEffect, useContext } from 'react'
export default function CharacterCard() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await fetch("https://www.swapi.tech/api/people")
            const data = result.json
            setCharacters(data)
            console.log(characters)
        }
        fetchData()
    }, [])
    return (
        <div>
            {characters.length ? characters.map((character, index) => (
                <div className="card" style={{width: "18rem"}} key={index}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            )) : null}
        </div>
    )
}
