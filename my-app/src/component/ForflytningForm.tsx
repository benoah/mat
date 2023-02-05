import React, { useState } from "react";
import Axios from "axios";

interface Data {
  name: string;
  date: string;
  dyreholdId: string;
}

const ForflytningForm: React.FC = () => {
  const url = "http://localhost:5000/registrerforflytning";
  const [data, setData] = useState<Data>({
    name: "",
    date: "",
    dyreholdId: "",
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      date: data.date,
      iduser: data.dyreholdId,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id as keyof Data;
    setData({ ...data, [id]: e.target.value });
  }
  function selecthandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.id as keyof Data;
    setData({ ...data, [id]: e.target.value });
  }
  return (
    <>
      <label style={{ color: "#F27405" }}>Forflytningsform</label>
      <form onSubmit={submit} style={{ backgroundColor: "#FFE6CC" }}>
        <input
          className="form-group"
          onChange={handle}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        />
        <input
          style={{ backgroundColor: "#FFF7E6" }}
          onChange={handle}
          id="date"
          value={data.date}
          placeholder="date"
          type="date"
        />
        <select
          style={{ backgroundColor: "#FFF7E6" }}
          onChange={selecthandler}
          id="iduser"
          value={data.dyreholdId}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="camel">Camel</option>
          <option value="donkey">Donkey</option>
        </select>
        <button style={{ backgroundColor: "#F27405", color: "#FFFFFF" }}>Submit</button>
      </form>
    </>
  );
};

export default ForflytningForm;
