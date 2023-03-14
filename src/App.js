// import logo from "./logo.svg";
import "./App.scss";

import Header from "./components/header";
import Home from "./screens/home";
import Publishers from "./screens/publishers";
import Superheroes from "./screens/superheroes";

import { Routes, Route } from "react-router-dom";
import Superhero from "./screens/superhero";
import Publisher from "./screens/publisher";

import CreateSuperhero from "./screens/createSuperhero";
import UpdateSuperhero from "./screens/updateSuperhero";

import CreatePublisher from "./screens/createPublisher";
import UpdatePublisher from "./screens/updatePublisher";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/publishers/create" element={<CreatePublisher />} />
        <Route path="/publishers/:id" element={<Publisher />} />
        <Route path="/publishers/:id/update" element={<UpdatePublisher />} />
        <Route path="/superheroes" element={<Superheroes />} />
        <Route path="/superheroes/create" element={<CreateSuperhero />} />
        <Route path="/superheroes/:id" element={<Superhero />} />
        <Route path="/superheroes/:id/update" element={<UpdateSuperhero />} />
      </Routes>
    </div>
  );
}

export default App;
