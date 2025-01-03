import React, { useState, useEffect } from "react";

function InputList() {
  let initialItems = [
    { id: 0, value: "onclick opens modal user details", status: "Not Done" },
  ];

  const [items, setItems] = useState(initialItems);

  const [inputValue, setInputValue] = useState("");

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("todoItems"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const deleteMe = (id) => {
    const updatedItems = [...items];
    updatedItems.splice(id, 1);
    setItems(updatedItems);
  };

  const lineOverMe = (id) => {
    const updatedItems = [...items];
    updatedItems[id].status = "DONE";
    setItems(updatedItems);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: items.length, value: inputValue, status: "Not Done" },
    ]);
    setInputValue("");
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleAddItem}
          className="flex justify-center"
          id="inputId"
        >
          <input
            required
            maxLength={40}
            type="text"
            placeholder="Add a new item..."
            className="border-2 border-gray-200 focus:outline-none focus:border-indigo-400 w-[100%] px-4 rounded-lg m-2 p-2 flex justify-between items-center hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 transition duration-500 ease-in-out"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 border-gray-200 focus:outline-none bg-blue-500  rounded-lg m-2 p-2 w-24 flex justify-between items-center hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-700 hover:text-indigo-700 focus:ring-opacity-50 transition duration-500 ease-in-out text-white"
          >
            Add Item
          </button>
        </form>

        <div className="flex justify-center items-center px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400">
          <div className="w-[100rem]">
            {items.map((item, id) => (
              <li
                className="bg-white rounded p-2 font-bold flex justify-between items-center hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50  transition duration-500 ease-in-out m-2 w-[100%]"
                key={id}
              >
                {id + 1} - {item.value} - {item.status}
                <div>
                  <button
                    type="button"
                    id="lineOverMe"
                    className="text-white p-2  bg-blue-500 hover:bg-blue-700 rounded-md"
                    onClick={() => lineOverMe(id)}
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    id="deleteMe"
                    className="text-white w-10 p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
                    onClick={() => deleteMe(id)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InputList;
