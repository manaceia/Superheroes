import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ resource, limit }) => {
  const [resourceData, setResourceData] = useState([]);
  const navigate = useNavigate();

  const queryString = limit ? `?_limit=${limit}` : ``;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/${resource}${queryString}`);

      setResourceData(data);
    };

    fetchData();
  }, []);

  const clickHanlder = (id) => {
    navigate(`/${resource}/${id}`);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-white capitalize">{resource}:</h1>

      {limit ? (
        <div className="flex justify-end mx-8">
          <button
            type="button"
            onClick={() => navigate(`/${resource}`)}
            className="flex justify-end text-white text-xl font-bold mx-8 hover:text-green-600"
          >
            Show All <span className="tracking-widest">...</span>
          </button>
        </div>
      ) : (
        <div className="flex justify-end mx-8">
          <button
            onClick={() => navigate(`/${resource}/create`)}
            type="button"
            className="flex justify-end bg-green-600 text-white font-bold mt-8 p-4 rounded rounded-lg"
          >
            Add New
          </button>
        </div>
      )}

      <ul className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 mt-8 min-[320px]:gap-y-16">
        {resourceData.map((d) => (
          <li
            onClick={() => {
              clickHanlder(d.id);
            }}
            key={d.id}
            className="group bg-black relative rounded-lg border-black border-8 shadow shadow-xl shadow-green-400/40 "
          >
            <div className="group-hover:cursor-pointer bg-black border-black border-4 m-3">
              <img src={d.image} alt="" className="object-contain mb-16" />
              <div className="absolute bg-zinc-900/90 bottom-0 left-0 right-0 p-6 rounded-b-lg">
                <p className="text-center text-white underline underline-offset-4 font-bold md:text-lg group-hover:text-green-600 min-[320px]:text-xl min-[320px]:font-bolder">
                  {d.name}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
