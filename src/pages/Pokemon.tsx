import { useParams, useNavigate } from "react-router-dom";

import style from "./pokemon.module.css";

import PokeballImg from "../assets/pokeball.png";
import BulbasaurImg from "../assets/bulbasaur.gif";
import { Footer } from "../components/Footer";

export const Pokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} className={style.pokeballButton}>
        <img src={PokeballImg} alt="Pokeball" className={style.pokeballImg} /> Go Back
      </button>
      <div className={style.pokemon}>
        <main className={style.pokemonInfo}>
          <div className={style.pokemonTitle}>{ name?.toLocaleUpperCase() }</div>
          <div>Nr. 001</div>
          <div>
            <img className={style.pokemonInfoImg} src={BulbasaurImg} alt="Bulbasaur" />
          </div>
          <div>HP: 000</div>
          <div>Attack: 20</div>
          <div>Defense: 40</div>
        </main>
      </div>
      <Footer />
    </>
  );
};
