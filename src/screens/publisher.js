import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useResolvedPath } from "react-router-dom";
import DeleteHelper from "../components/deleteHelper";

const Publisher = () => {
  const id = useParams().id;
  const deleteClickHandler = () => {
    const deleteHelper = document.getElementById("deleteHelper");

    deleteHelper.classList.add("block");
    deleteHelper.classList.remove("hidden");
  };

  const path = useResolvedPath();
  const navigate = useNavigate();

  const [Publisher, setPublisher] = useState({});

  useEffect(() => {
    const fetchPublisher = async () => {
      const { data } = await axios.get(path.pathname);
      setPublisher(data);
    };
    fetchPublisher();
  }, []);

  return (
    <div id="singleSuperhero">
      <DeleteHelper resource={`publishers`} id={id} />
      <div className="flex items-start pt-8 justify-center md:h-screen bg-zinc-700/10 pb-8">
        <div className="bg-zinc-800/80 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img
              src={Publisher.image}
              alt="Resource Image"
              className="object-fit rounded-xl h-80 md:h-80 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />
            <div className="p-6 md:p-12">
              <h2 className="text-xl font-medium text-center text-green-600 md:text-left font-bold">
                {Publisher.name}
              </h2>
              <p className="max-w xs my-4 leading-5 tracking-wide text-center text-white md:text-left">
                {Publisher.description}
              </p>

              <div className="flex flex-row justify-end md:justify-center sm:justify-center mx-8 gap-4 mb-8">
                <button
                  onClick={() => navigate(`/publishers/${Publisher.id}/update`)}
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

export default Publisher;
