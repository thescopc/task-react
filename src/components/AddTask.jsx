import { useState } from "react";
function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow my-4">
      <input
        type="text"
        placeholder="Digite o titulo"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos arrombado");
          }
          onAddTaskSubmit(title, description);
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md w-full"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
