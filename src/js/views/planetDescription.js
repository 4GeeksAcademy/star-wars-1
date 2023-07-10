import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router'
export default function PlanetDescription() {
  const[planet,setPlanet]=useState({})
  const{id}=useParams()
  useEffect(() => {
    async function fetchData() {
        const result = await fetch("https://www.swapi.tech/api/planets/"+id);
        const data = await result.json();
        setPlanet(data.result.properties);
    }
    fetchData()
}, []) 
  return (
    <div>
      <h1>{planet.name}</h1>
      <h2>{planet.population}</h2>
      <h2>{planet.terrain}</h2>
      <h2>{planet.climate}</h2>
      <h2>{planet.mountains}</h2>
    </div>
  )
}
