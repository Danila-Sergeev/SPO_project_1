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
  const [prevValues, setPrevValues] = useState("");
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

  const onSubmit = (e) => {
    e.preventDefault();
    hendleData(numbers, values, setNumbers, setValues, setPrevValues);
    hendleData(el_ngt, values, setNumbers, setValues, setPrevValues);
    hendleData(dozens, values, setNumbers, setValues, setPrevValues);
    hendleData(hundreds, values, setNumbers, setValues, setPrevValues);
    hendleComplexData(
      dozens,
      numbers,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexData(
      dozens,
      el_ngt,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexData(
      dozens,
      dozens,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexData(
      hundreds,
      numbers,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexData(
      hundreds,
      el_ngt,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexData(
      hundreds,
      dozens,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexTripleData(
      hundreds,
      dozens,
      numbers,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexTripleData(
      hundreds,
      dozens,
      el_ngt,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
    hendleComplexTripleData(
      hundreds,
      dozens,
      dozens,
      values,
      setNumbers,
      setValues,
      setPrevValues
    );
  };

  return (
    <div className={appStyles.main}>
      <form onSubmit={onSubmit} className={appStyles.form}>
        <div className={appStyles.inputBox}>
          <input
            onChange={handleValuesChange}
            placeholder="Введите французское число"
            className={appStyles.input}
            type="text"
            value={values}
          ></input>
          <input
            value={number}
            className={appStyles.inputNumber}
            type="text"
            readOnly
            placeholder="Результат"
          ></input>
        </div>
        <button type="submit" className={appStyles.btn}>
          Перевести
        </button>

        <div className={appStyles.box}>
          <div>
            <p className={appStyles.text}>Предыдущий ввод :</p>
            <input
              onChange={handleNumbersChange}
              value={prevValues}
              className={appStyles.inputPrevius}
              type="text"
              readOnly
              placeholder="Предыдущий ввод"
            ></input>
          </div>
          <div>
            <p className={appStyles.textError}>Ошибка :</p>
            <textarea
              value={""}
              className={appStyles.inputPrevius}
              type="text"
              name="error"
              readOnly
              placeholder=""
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
