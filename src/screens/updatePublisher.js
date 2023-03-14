import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePublisher = () => {
  const [Publisher, setPublisher] = useState({});
  const id = useParams().id;

  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const publisher = {
      id: id,
      name: Name,
      image: Image,
      description: Description,
    };

    const updatePublisher = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.put(
          `/publishers/${id}`,
          publisher,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    updatePublisher();
    navigate("/publishers");
  };

  useEffect(() => {
    const fetchPublisher = async () => {
      const { data } = await axios.get(`/publishers/${id}`);

      setPublisher(data);
      setName(Publisher.name);
      setImage(Publisher.image);
      setDescription(Publisher.description);
    };
    fetchPublisher();
  }, [id, Publisher.name, Publisher.image, Publisher.description]);

  return (
    <div id="formComponent">
      <form
        onSubmit={submitHandler}
        className="container mx-auto md:px-48 sm:px-16 min-[220px]:px-8 py-24 flex flex-col"
      >
        <div className="font-bold text-3xl text-green-600 underline underline-offset-4">
          Insert Publisher Info:{" "}
        </div>
        <label htmlFor="name" className="font-bold text-2xl text-white py-3">
          Name:
          <input
            className="w-full outline outline-1 outline-black bg-slate-500/50 rounded rounded-md shadow shadow-xl shadow-green-500/40 p-2 mt-1"
            type="text"
            name="name"
            id=""
            value={Name}
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
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label htmlFor="image" className="font-bold text-2xl text-white py-3">
          Description:{" "}
          <textarea
            className="w-full outline outline-1 outline-black bg-slate-500/50 rounded rounded-md shadow shadow-xl shadow-green-500/40 p-2 mt-1"
            type="text"
            name="image"
            id=""
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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

export default UpdatePublisher;
