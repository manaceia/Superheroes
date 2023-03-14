import { useResolvedPath } from "react-router-dom";
import Card from "../components/card";

const Superheroes = () => {
  const path = useResolvedPath();
  console.log(path.pathname);
  return (
    <div id="superheroes">
      <Card resource={`superheroes`} />
    </div>
  );
};

export default Superheroes;
