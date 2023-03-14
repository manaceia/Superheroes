import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuperheroForm = () => {
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Intelligence, setIntelligence] = useState(0);
  const [Strength, setStrength] = useState(0);
  const [Speed, setSpeed] = useState(0);
  const [Durability, setDurability] = useState(0);
  const [Power, setPower] = useState(0);
  const [Combat, setCombat] = useState(0);
  const [PublisherId, setPublisherId] = useState(1);

  const [Publishers, setPublishers] = useState([]);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`${Name} ${Image} ${Intelligence} ${Publisher}`);

    const superhero = {
      name: Name,
      image: Image,
      powerstats: {
        intelligence: Intelligence,
        strength: Strength,
        speed: Speed,
        durability: Durability,
        power: Power,
        combat: Combat,
      },
      publisherId: PublisherId,
      publisher: Publishers.find((val) => val.id === PublisherId).name,
    };

    const createNewSuperhero = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(`/superheroes`, superhero, config);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    createNewSuperhero();
    navigate("/superheroes");
  };
  useEffect(() => {
    const fetchPublishers = async () => {
      const { data } = await axios.get(`/publishers`);

      setPublishers(data);
    };

    fetchPublishers();
  }, []);

  return (
    <div id="formComponent">
      <form
        onSubmit={submitHandler}
        className="container mx-auto md:px-48 sm:px-16 min-[220px]:px-8 py-24 flex flex-col"
      >
        <div className="font-bold text-3xl text-green-600 underline underline-offset-4">
          Insert Superhero Info:{" "}
        </div>
        <label htmlFor="name" className="font-bold text-2xl text-white py-3">
          Name:
          <input
            className="w-full outline outline-1 outline-black bg-slate-500/50 rounded rounded-md shadow shadow-xl shadow-green-500/40 p-2 mt-1"
            type="text"
            name="name"
            id=""
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="image" className="font-bold text-2xl text-white py-3">
          Image Url:{" "}
          <input
            className="w-full outline outline-1 outline-black bg-slate-500/50 rounded rounded-md shadow shadow-xl shadow-green-500/40 p-2 mt-1"
            type="text"
            name="image"
            id=""
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <div className="font-bold text-2xl text-white pt-3 pb-1">
          Powerstats:{" "}
        </div>
        <label
          htmlFor="intelligence"
          className="font-bold text-lg text-white py-2"
        >
          Intelligence:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="intelligence"
            id=""
            min={0}
            max={100}
            onChange={(e) => setIntelligence(e.target.value)}
          />
        </label>

        <label htmlFor="strength" className="font-bold text-lg text-white py-2">
          Strength:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="strength"
            id=""
            min={0}
            max={100}
            onChange={(e) => setStrength(e.target.value)}
          />
        </label>

        <label htmlFor="speed" className="font-bold text-lg text-white py-2">
          Speed:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="speed"
            id=""
            min={0}
            max={100}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </label>

        <label
          htmlFor="durability"
          className="font-bold text-lg text-white py-2"
        >
          Durability:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="durability"
            id=""
            min={0}
            max={100}
            onChange={(e) => setDurability(e.target.value)}
          />
        </label>

        <label htmlFor="power" className="font-bold text-lg text-white py-2">
          Power:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="power"
            id=""
            min={0}
            max={100}
            onChange={(e) => setPower(e.target.value)}
          />
        </label>

        <label htmlFor="combat" className="font-bold text-lg text-white py-2">
          Combat:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="combat"
            id=""
            min={0}
            max={100}
            onChange={(e) => setCombat(e.target.value)}
          />
        </label>

        <label
          htmlFor="publisher"
          className="font-bold text-lg text-white py-3"
        >
          <div className="font-bold text-2xl text-white pt-3 pb-1">
            Publisher:{" "}
          </div>
          {!Publishers.length ? (
            <button type="button">Add a new publisher</button>
          ) : (
            <select
              className="w-full bg-green-500/30 focused:bg-green-500 text-white accent-green-500 p-4"
              name="publisher"
              id=""
              onClick={(e) => setPublisherId(e.target.value)}
            >
              {Publishers.map((publisher) => (
                <option
                  key={publisher.id}
                  value={publisher.id}
                  className="bg-green-500 text-white"
                >
                  {publisher.name}
                </option>
              ))}
            </select>
          )}
        </label>

        <input
          type="submit"
          value="Submit"
          className="font-bold text-lg text-white py-3 mx-28 min-[220px]:mx-4 my-4 bg-green-700 rounded rounder-xl outline outline-1 outline-black shadow shadow-xl shadow-green-400/40"
          onClick={submitHandler}
        />
      </form>
    </div>
  );
};

export default SuperheroForm;
