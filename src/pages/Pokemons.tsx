import { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import BulbasaurPic from "../assets/bulbasaur.gif";

export const Pokemons = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link to="/">
            <img src={BulbasaurPic} alt="bulbasaur" />
            <div>
              <span>Bulbasur</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
        <h1>Pokemons</h1>
      </main>
      <Footer />
    </>
  );
};
