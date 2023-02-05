import React, { useState } from "react";
import Axios from "axios";

interface Forflytning {
  dyreholdId: string;
  individ: string;
  produksjonsplassId: string;
}

const ForflytningForm: React.FC = () => {
  const url = "http://localhost:5000/registrerforflytning";
  const [data, setData] = useState<Forflytning>({
    dyreholdId: "",
    individ: "",
    produksjonsplassId: "",
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post(url, {
      dyreholdId: data.dyreholdId,
      individ: data.individ,
      produksjonsplassId: data.produksjonsplassId,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id as keyof Forflytning;
    setData({ ...data, [id]: e.target.value });
  }
  function selecthandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.id as keyof Forflytning;
    setData({ ...data, [id]: e.target.value });
  }
  return (
    <>
      <label style={{ color: "#F27405" }}>Forflytningsform</label>
      <form onSubmit={submit} style={{ backgroundColor: "#FFE6CC" }}>
        <select
          style={{ backgroundColor: "#FFF7E6" }}
          onChange={selecthandler}
          id="dyreholdId"
          value={data.dyreholdId}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="camel">Camel</option>
          <option value="donkey">Donkey</option>
        </select>
        <input
          style={{ backgroundColor: "#FFF7E6" }}
          onChange={handle}
          id="individ"
          value={data.individ}
          placeholder="individ"
          type="text"
        />
        <input
          style={{ backgroundColor: "#FFF7E6" }}
          onChange={handle}
          id="produksjonsplassId"
          value={data.produksjonsplassId}
          placeholder="produksjonsplassId"
          type="text"
        />
        <button style={{ backgroundColor: "#F27405", color: "#FFFFFF" }}>Submit</button>
      </form>
    </>
  );
};

export default ForflytningForm;
