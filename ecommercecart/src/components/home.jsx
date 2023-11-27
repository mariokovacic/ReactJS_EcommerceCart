import { PRODUCTS } from "../proizvodi";
import { Proizvod } from "./proizvod";
import "./home.css";

export const Home = ({ cart, dodajCart, dodaj }) => {
  function Kosarica(proizvod) {
    dodajCart([...cart, proizvod]);
    console.log(cart);
    console.log("Kosarica Radi");
  }

  return (
    <div className="home">
      <h1>PRODUCTS:</h1>
      <div className="rasporedApp">
        {PRODUCTS.map((proizvod) => (
          <div className="rasporedProizvodHome">
            <Proizvod
              proizvod={proizvod}
              key={proizvod.Id}
              name={proizvod.Ime}
            />
            <button
              onClick={() => {
                dodaj(proizvod.Price * proizvod.Qty);
                Kosarica(proizvod);
              }}
              className="addToCart"
            >
              Add to CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
