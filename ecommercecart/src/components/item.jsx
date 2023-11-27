import { useState } from "react";

export const Item = (props) => {
  const [kolicina, setKolicina] = useState(0);

  // DODAJ KOLICINU
  function KolicinaDodaj() {
    setKolicina(kolicina + 1);
  }

  //   ODUZMI KOLICINU
  function KolicinaOduzmi() {
    if (kolicina === 0) {
      return;
    } else {
      setKolicina(kolicina - 1);
    }
  }

  props.e.Qty = kolicina;

  return (
    <div className="item">
      <div>Name: {props.e.Ime}</div>
      <div>Product Id: {props.e.Id}</div>
      <div>Quantity: {props.e.Qty}</div>
      <div>Price: {props.e.Price}</div>
      <img src={props.e.Image} alt="slika"></img>

      <div className="quantityContainer">
        <button onClick={() => KolicinaDodaj()}>+</button>
        <button onClick={() => KolicinaOduzmi()}>-</button>
      </div>
    </div>
  );
};
