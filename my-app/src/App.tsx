import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./layout/Nav";
import ProduksjonsPlassenList from "./component/ProdduksjonsPlassenList";
import ForflytningForm from "./component/ForflytningForm";

// koden definerer en struktur for objektet som representerer "produksjonsplass"
// denne strukturen er definert for å sikre at objektene som representerer "produksjonsplass"
// har de samme egenskapene med de samme type
interface Produksjonsplass {
  produksjonsplassid: number;
  kommunenummer: number;
  gaardsnummer: number;
  bruksnummer: number;
  lastchanged: string;
}

const App: React.FC = () => {
  // bruker useState hooken for å håndtere komponenten tilstand
  // verdien som returneres av useState er "data" og "setData"
  // den opprinnelige verdien til data er en tom liste, [].
  // dette betyr at når komponenten renderes første gang, er data-tilstanden en tom liste.
  const [data, setData] = useState<Produksjonsplass[]>([]);

  // bruker useEffect hook fordi den lar meg utføre koder etter at komponenten har renderet
  useEffect(() => {
    // en funksjon som utføres som skal hente data fra endpointet
    const fetchData = async () => {
      // response av objektet som lagres i res variabel.
      //  deretter blir responsen konvertert til JSON object ved bruk av json methoden
      const res = await fetch("http://localhost:5000/produksjonsplass");
      const json = await res.json();
      console.log(json);
      // oppdaterer verdien av data state med data som returneres fra api call.
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
