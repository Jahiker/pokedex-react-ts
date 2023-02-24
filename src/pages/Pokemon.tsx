import { useParams } from "react-router-dom";

export const Pokemon = () => {
  const { name } = useParams();
  return <div>Pokemon: {name}</div>;
};
