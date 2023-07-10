import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router'
export default function StarshipDescription() {
  const[starship,setStarship]=useState({})
  const{id}=useParams()
  useEffect(() => {
    async function fetchData() {
        const result = await fetch("https://www.swapi.tech/api/starships/"+id);
        const data = await result.json();
        setStarship(data.result.properties);
    }
    fetchData()
}, []) 
  return (
    <div>
      <h1>{starship.name}</h1>
      <h2>{starship.cost_in_credits}</h2>
      <h2>{starship.hyperdrive_rating}</h2>
      <h2>{starship.passengers}</h2>
      <h2>{starship.manufacturer}</h2>
    </div>
  )
}
