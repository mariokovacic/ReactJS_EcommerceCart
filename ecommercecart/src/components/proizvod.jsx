import "./proizvod.css";

export const Proizvod = (proizvod) => {
  return (
    <div>
      <div className="proizvod">
        <div>Name: {proizvod.proizvod.Ime}</div>
        <div>Product Id: {proizvod.proizvod.Id}</div>
        <div>Price: {proizvod.proizvod.Price}</div>
        <img src={proizvod.proizvod.Image} alt="slika"></img>
      </div>
    </div>
  );
};
