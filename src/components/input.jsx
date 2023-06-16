import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg px-2.5 py-1.5 text-lg"
          type="text"
          name="task"
          placeholder="Input task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="py-2 px-3.5 rounded-lg bg-violet-600 text-white"
          onClick={handleTask}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
