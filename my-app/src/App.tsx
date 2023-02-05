import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./layout/Nav";
import ProduksjonsPlassenList from "./component/ProdduksjonsPlassenList";
import ForflytningForm from "./component/ForflytningForm";

interface Produksjonsplass {
  produksjonsplassid: number;
  kommunenummer: number;
  gaardsnummer: number;
  bruksnummer: number;
  lastchanged: string;
}

function App() {
  const [data, setData] = useState<Produksjonsplass[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/produksjonsplass");
      const json = await res.json();
      console.log(json);
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <div className="App">
      <Nav />
      <div className="container">
      <ProduksjonsPlassenList data={data} />
      </div>
      <div className="container">
      <ForflytningForm />
      </div>
    </div>
  );
}

export default App;