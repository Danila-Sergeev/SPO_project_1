import appStyles from "./App.module.css";
import { useEffect, useState } from "react";
import data from "./Api/data.json";
import {
  hendleData,
  hendleComplexData,
  hendleComplexTripleData,
} from "./Utils/Hucs";
function App() {
  const [values, setValues] = useState("");
  const [number, setNumbers] = useState("");
  const handleValuesChange = (event) => {
    setValues(event.target.value);
  };
  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
  };
  const numbers = data.numbers;
  const el_ngt = data["11 19"];
  const dozens = data.dozens;
  const hundreds = data.hundreds;

  const onClick = (e) => {
    e.preventDefault();
    hendleData(numbers, values, setNumbers);
    hendleData(el_ngt, values, setNumbers);
    hendleData(dozens, values, setNumbers);
    hendleData(hundreds, values, setNumbers);
    hendleComplexData(dozens, numbers, values, setNumbers);
    hendleComplexData(hundreds, numbers, values, setNumbers);
    hendleComplexData(hundreds, el_ngt, values, setNumbers);
    hendleComplexData(hundreds, dozens, values, setNumbers);
    hendleComplexTripleData(hundreds, dozens, numbers, values, setNumbers);
  };

  return (
    <div className={appStyles.main}>
      <form className={appStyles.form}>
        <input
          onChange={handleValuesChange}
          placeholder="Введите французское число"
          className={appStyles.input}
          type="text"
          value={values}
        ></input>
        <button onClick={onClick} className={appStyles.btn}>
          Перевести
        </button>
        <input
          onChange={handleNumbersChange}
          value={number}
          className={appStyles.input}
          type="text"
          readOnly
          placeholder="Вывод"
        ></input>
      </form>
    </div>
  );
}

export default App;
