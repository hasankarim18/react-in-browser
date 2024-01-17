const productPrice = 6000;

function Product() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const addToCart = () => {
    // setTotalPrice((prev) => prev + productPrice);
    setQuantity((prev) => prev + 1);
  };

  // over engineering
  React.useEffect(() => {
    setTotalPrice((prev) => {
      return productPrice * quantity;
    });
    return () => {
      setTotalPrice(0);
    };
  }, [quantity]);

  return (
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
          alt="product image"
        />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">
              Reactive Accelerator Course
            </h3>
          </a>
          <span id="total" className="text-xl font-medium text-teal-500">
            Quantity: {quantity} <span className="px-8"></span> Total: ৳{" "}
            {totalPrice}
          </span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span id="price" className="text-2xl font-bold text-slate-300">
            ৳ {productPrice}
          </span>
          <button
            onClick={() => {
              addToCart();
            }}
            id="button"
            href="#"
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Product />
      <Product />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
