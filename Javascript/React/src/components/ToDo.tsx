import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const ToDo = () => {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<Task[]>([]);

  const addData = () => {
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setList((prev) => [...prev, newTask]);
    setInput(" ");
  };
  const deleteTask = (id: number) => {
    const deletedData = list.filter((item) => item.id !== id);
    setList(deletedData);
  };
//   const updateTask = (id: number) => {
//     const updatedData = list.map((item) =>
//       item.id === id ? { ...item, text: input } : item,
//     );
//     setList(updatedData);
//     console.log(updatedData);
//   };
  return (
    <div>
      <h1>To Do List</h1>

      <div style={{ marginTop: "20px", width: "100%" }}>
        <input
          type="text"
          style={{
            padding: "6px 20px",
            border: "1px solid white",
            borderRadius: "4px",
            width: "100%",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn" onClick={addData}>
          Add
        </button>
      </div>

      <div className="">
        {list.map((data, ind) => {
          return (
            <div key={ind}>
              {data.text}
              <button className="deleteBtn" onClick={() => deleteTask(data.id)}>
                Delete
              </button>
              {/* <button className="updateBtn" onClick={() => updateTask(data.id)}>
                Update
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
