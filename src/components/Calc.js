import { useState } from "react";

function Calc() {
  let [value, setvalue] = useState("");

  function click(e) {
    let text = e.target.innerText;
    console.log(e.target.innerText);
    if (text === "c") {
      setvalue("");
    } else if (text === "=") {
      setvalue(eval(value));
    } else {
     setvalue(value + e.target.innerText);
   }
  }

  return (
    <div class="calculator">
      <h1>calculator</h1>
      <input type="text" class="screen" id="screen" value={value} />

      <table>
        <tr>
          <td>
            <button onClick={click}>-</button>
          </td>
          <td>
            <button onClick={click}>+</button>
          </td>
          <td>
            <button onClick={click}>c</button>
          </td>
          <td>
            <button onClick={click}>/</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={click}>7</button>
          </td>
          <td>
            <button onClick={click}>8</button>
          </td>
          <td>
            <button onClick={click}>9</button>
          </td>
          <td>
            <button onClick={click}>*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={click}>4</button>
          </td>
          <td>
            <button onClick={click}>5</button>
          </td>
          <td>
            <button onClick={click}>6</button>
          </td>
          <td>
            <button onClick={click}>.</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={click}>3</button>
          </td>
          <td>
            <button onClick={click}>2</button>
          </td>
          <td>
            <button onClick={click}>1</button>
          </td>
          <td>
            <button onClick={click}>=</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Calc;
