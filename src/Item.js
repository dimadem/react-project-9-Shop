import React, { useState } from "react";

export default function Item({ image, name, desc }) {
  const [total, setTotal] = useState(0);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
      <img className="p-4 rounded-3xl" src={image} alt="" />
      <div class="p-2">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
      <div className="flex mt-4 space-x-4 justify-center p-4">
        <button
          className="inline-flex items-center py-2 px-4 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {total ? total : ""}
        </h3>
        <button
          className="inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
