"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task, Desc }]);
    setTask("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0)
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between mb-5 w-2/3">
            <h3 className="text-xl font-semibold">{t.task}</h3>
            <h5 className="text-xl font-semibold">{t.Desc}</h5>
          </div>
          <button
            onClick={()=>{
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-2 py-3 rounded font-bold">
            Delete Task
          </button>
        </li>
      );
    });

  return (
    <>
      <h1 className="bg-black text-white text-5xl font-bold text-center py-5">
        {" "}
        Rahul's To-Do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className=" text-2xl border-zinc-800 border-2 m-5 px-5 py-2"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <input
          type="text"
          className=" text-2xl border-zinc-800 border-2 m-5 px-5 py-2"
          placeholder="Enter the Descrption "
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white rounded px-4 py-2 text-2xl font-bold">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-500 p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
