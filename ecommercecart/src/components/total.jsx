import "./total.css";
import { Item } from "./item";

export const Total = ({ clear, total, cart, dodaj, props }) => {
  const Orig = [...new Set([...cart])];

  return (
    <div>
      <div className="total">
        {Orig.map((e) => (
          <div className="itemRaspored">
            <Item e={e} />
            <button
              onClick={() => {
                dodaj(e.Price * e.Qty);
              }}
              className="add"
            >
              ADD
            </button>
          </div>
        ))}
      </div>
      <div className="calcWindow">
        <h3>TOTAL:</h3>
        <div>{total},00 EUR</div>
        <button onClick={() => clear()} className="clearCart">
          CLEAR CART
        </button>
        <button className="checkout">PROCEED TO CHECKOUT ?</button>
      </div>
    </div>
  );
};
