import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router'
export default function CharacterDescription() {
  const[character,setCharacter]=useState({})
  const{id}=useParams()
  useEffect(() => {
    async function fetchData() {
        const result = await fetch("https://www.swapi.tech/api/people/"+id);
        const data = await result.json();
        setCharacter(data.result.properties);
    }
    fetchData()
}, []) 
  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.hair_color}</h2>
      <h2>{character.eye_color}</h2>
      <h2>{character.birth_year}</h2>
      <h2>{character.description}</h2>
    </div>
  )
}
