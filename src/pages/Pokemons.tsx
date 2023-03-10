import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LoadingScreen } from "../components/LoadingScreen";

import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import { waitFor } from "../utils/utils";

import styles from "./pokemons.module.css";

export const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      await waitFor(500);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    }

    fetchAllPokemons()
  }, [])

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  const filteredPokemons = pokemons?.slice(0,151).filter(pokemon => {
    return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
  })

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>

          {filteredPokemons?.slice(0, 151).map(pokemon => (
            <Link key={pokemon.id} className={styles.listItem} to={`/pokemons/${pokemon.name.toLowerCase()}`}>
              <img className={styles.listItemIcon} src={pokemon.imgSrc} alt={pokemon.name} />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}


        </nav>
      </main>
      <Footer />
    </>
  );
};
