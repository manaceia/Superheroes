import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useResolvedPath } from "react-router-dom";
import DeleteHelper from "../components/deleteHelper";

const Superhero = () => {
  const path = useResolvedPath();
  const navigate = useNavigate();
  const id = useParams().id;

  const deleteClickHandler = () => {
    const deleteHelper = document.getElementById("deleteHelper");

    deleteHelper.classList.add("block");
    deleteHelper.classList.remove("hidden");
  };

  const [Superhero, setSuperhero] = useState({});
  const [Powerstats, setPowerstats] = useState({});

  useEffect(() => {
    const fetchSuperhero = async () => {
      const { data } = await axios.get(path.pathname);
      setSuperhero(data);
      setPowerstats(data.powerstats);
    };
    fetchSuperhero();
  }, []);

  return (
    <div id="singleSuperhero">
      <DeleteHelper resource={`superheroes`} id={id} />
      <div className="flex items-start pt-8 justify-center md:h-screen bg-zinc-700/10 pb-8">
        <div className="bg-zinc-800/80 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img
              src={Superhero.image}
              alt="Resource Image"
              className="object-fit rounded-xl h-80 md:h-80 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />
            <div className="p-6 md:p-12">
              <h2 className="font-sans text-xl text-center text-green-600 md:text-left font-bold">
                {Superhero.name}
              </h2>
              <p className="max-w xs my-4 leading-5 tracking-wide text-center text-white md:text-left">
                {Object.entries(Powerstats).map(([k, v]) => (
                  <label
                    key={k}
                    htmlFor="durability"
                    className="font-bold text-md text-white py-2 capitalize"
                  >
                    {k}
                    <input
                      className="w-full h-1 accent-green-500 bg-gray-500"
                      type="range"
                      name="durability"
                      id=""
                      value={v}
                      onChange={() => {}}
                    />
                  </label>
                ))}
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <div className=" font-bold p-4 text-green-500">
                  {Superhero.publisher}
                </div>
              </div>
              <div className="flex justify-end md:justify-center sm:justify-center mx-8 gap-4">
                <button
                  onClick={() => navigate(`/superheroes/${id}/update`)}
                  type="button"
                  className="flex justify-end bg-blue-600 text-white font-bold mt-8 p-4 rounded rounded-lg"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="flex justify-end bg-red-600 text-white font-bold mt-8 p-4 rounded rounded-lg"
                  onClick={() => deleteClickHandler()}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superhero;
