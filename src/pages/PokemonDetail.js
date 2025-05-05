import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
        document.title = res.data.name; // Dynamically update page title
      })
      .catch((err) => console.error(err));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((item) => (
          <li key={item.ability.name}>{item.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
