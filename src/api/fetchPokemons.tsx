// https://pokeapi.co/api/v2/{endpoint}/

import { Pokemon } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const options = { method: "GET" };

  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json",
    options
  );
  const result = await response.json();

  if (!response.ok) {
    throw new Error("Error Fetching Pokemons Data");
  }

  const pokemons = result.results.map((pokemon: any) => {
    return {
      name: pokemon.name,
      id: pokemon.national_number,
      imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
        pokemon.name.toLowerCase()
      )}.gif`,
    };
  });

  const uniquePokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
}
