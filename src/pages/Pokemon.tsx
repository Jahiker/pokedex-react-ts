import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import style from "./pokemon.module.css";

import PokeballImg from "../assets/pokeball.png";
import { Footer } from "../components/Footer";
import { LoadingScreen } from "../components/LoadingScreen";

import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { waitFor } from "../utils/utils";

export const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      await waitFor(500);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }

    getPokemon();
  }, [name]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <button onClick={() => navigate(-1)} className={style.pokeballButton}>
        <img src={PokeballImg} alt="Pokeball" className={style.pokeballImg} />{" "}
        Go Back
      </button>
      <div className={style.pokemon}>
        <main className={style.pokemonInfo}>
          <div className={style.pokemonTitle}>{name?.toLocaleUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={style.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};
