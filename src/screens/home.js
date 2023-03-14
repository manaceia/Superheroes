import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card";

const Home = () => {
  return (
    <div id="home" className="min-h-screen min-h-screen">
      <Card resource={`publishers`} limit={5} />
      <Card resource={`superheroes`} limit={5} />
    </div>
  );
};

export default Home;
