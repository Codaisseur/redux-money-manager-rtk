import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>

      <button onClick={() => dispatch(withdraw(10))}>Withdraw 10$</button>
    </div>
  );
}

export default App;
