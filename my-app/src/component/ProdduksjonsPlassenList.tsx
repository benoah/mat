import React from "react";

interface Produksjonsplass {
  produksjonsplassid: number;
  kommunenummer: number;
  gaardsnummer: number;
  bruksnummer: number;
  lastchanged: string;
}

interface Props {
  data: Produksjonsplass[];
}

const ProduksjonsPlassenList: React.FC<Props> = ({ data }) => (
  <div className="row">
    <h1>Liste av produksjonsplassene</h1>
    <hr />
    {data.map(({ produksjonsplassid, kommunenummer, gaardsnummer, bruksnummer, lastchanged }) => (
      <ol key={produksjonsplassid} className="col list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">kommunenummer: {kommunenummer}</div>
            <p>produksjonsplassid: {produksjonsplassid}</p>
            <p>gaardsnummer: {gaardsnummer}</p>
            <p>bruksnummer: {bruksnummer}</p>
            <p>lastchanged: {lastchanged}</p>
          </div>
        </li>
      </ol>
    ))}
  </div>
);


export default ProduksjonsPlassenList;