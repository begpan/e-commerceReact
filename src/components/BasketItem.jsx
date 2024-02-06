const BasketItem = ({ item, addToBasket, removeFromBasket }) => {
  return (
    <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <div className="rounded bg-white">
          <img
            className="object-fit-contain"
            src={item.image}
            width={100}
            height={100}
          />
        </div>
        <h4>{item.title.slice(0, 40) + "..."}</h4>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <h3>{item.price}</h3>
        <p className="d-flex align-items-center gap-1 text-nowrap">
          <span>Miktar:</span>
          <span className="fw-bold">{item.amount}</span>{" "}
        </p>
        <div className="d-flex gap-2 ">
          <button
            onClick={() => removeFromBasket(item.id)}
            className="btn btn-danger"
          >
            -
          </button>
          <button onClick={() => addToBasket(item)} className="btn btn-success">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
