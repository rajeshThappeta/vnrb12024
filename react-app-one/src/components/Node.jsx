import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function Node() {
  const { counter, setCounter } = useContext(counterContextObj);

  return (
    <div className="text-center">
      <h1>Node</h1>

      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <h1>Counter : {counter}</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos
        aliquid, dolores molestiae inventore quas rem ratione quaerat, alias
        suscipit cupiditate eius ipsum vel, atque qui itaque? Voluptate beatae
        dolore culpa, sequi sit recusandae? Et possimus atque pariatur at
        voluptas dolorem minima debitis labore veritatis nemo placeat,
        reprehenderit eaque eum.
      </p>
    </div>
  );
}

export default Node;
