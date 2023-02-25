import Pokedex from "../assets/pokedex.png"

import styles from "./loadingScreen.module.css";

export const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
        <img src={Pokedex} alt="Pokedex loader" className={styles.loadingScreenIcon} />
    </div>
  )
}
