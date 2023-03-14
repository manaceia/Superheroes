import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteHelper = ({ resource, id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    const deleteResource = async () => {
      try {
        await axios.delete(`/${resource}/${id}`);
      } catch (error) {
        console.log(error);
      }
    };
    deleteResource();
    navigate(`/${resource}`);
  };
  const handleCancle = () => {
    const deleteHelper = document.getElementById("deleteHelper");

    deleteHelper.classList.remove("block");
    deleteHelper.classList.add("hidden");
  };

  return (
    <div
      id="deleteHelper"
      className=" container mx-auto absolute z-20 top-40 left-1/4 right-1/4 hidden text-white bg-slate-600 w-1/2 h-80"
    >
      <h1 className="text-4xl text-center p-16">Are you sure ?</h1>
      <div className="flex gap-28 min-[320px]:gap-8 justify-center p-4">
        <button
          className="bg-zinc-900 p-4 font-bold shadow shadow-xl shadow-zinc-800 rounded rounded-lg"
          onClick={() => handleCancle()}
        >
          Cancel
        </button>
        <button
          className="bg-red-600 p-4 font-bold shadow shadow-xl shadow-zinc-800 rounded rounded-lg"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteHelper;
