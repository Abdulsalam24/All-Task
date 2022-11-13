import { useState } from "react";
import Product from "./components/Product";
import shortid from "shortid";
import "./App.css";

const initialState = {
  cart: [
    {
      id: shortid.generate(),
      name: "scarf",
      price: "11.50",
      quantity: 1,
    },
    {
      id: shortid.generate(),
      name: "Shirt",
      price: "9.80",
      quantity: 1,
    },
    {
      id: shortid.generate(),
      name: "pants",
      price: "25.50",
      quantity: 1,
    },
  ],
  isOnMailingList: false,
};

const App = () => {
  const [state, setState] = useState(initialState);


  const handleIncrementQuantity = (id) => {
    const newList = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setState({ ...state, cart: newList });
  };


  const handleDecrementQuantity = (id) => {
    const newList = state.cart.map((item) => {
      if (item.id === id && !item.quantity < 1) {
        return { ...item, quantity: --item.quantity };
      } else {
        return item
      }
    });

    setState({ ...state, cart: newList });
  };

  const handleCheckout = () => {
    state.isOnMailingList ?
      alert(
        "You will be added to the mailing list!"
      ) : alert(
        "Please click the check button to sign up for the mailing list!"
      )
  };

  const handleCheck = (event) => {
    setState({ ...state, isOnMailingList: event.target.checked })
  }

  return (
    <div className="center">
      <div className="flex flex-col gap-4 text-center">
        <h2>Shopping Cart</h2>
        <ul className="list">
          {state.cart.map((item) => (
            <li key={item.id}>
              <Product item={item} handleIncrementQuantity={handleIncrementQuantity} handleDecrementQuantity={handleDecrementQuantity} />
            </li>
          ))}
        </ul>

        <div>
          <label>
            <input
              type="checkbox"
              defaultChecked={state.isOnMailingList}
              onChange={handleCheck}
            />
            Sign me up for the mailing list!
          </label>
        </div>
        <button className="purchase" onClick={handleCheckout}>Purchase</button>
      </div>
    </div>
  );
};

export default App;
