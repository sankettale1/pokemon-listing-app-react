import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Sidebar() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => setPokemonList(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '1rem' }}>
      <h2>Pokémon List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
