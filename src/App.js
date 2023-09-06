import logo from "./logo.svg";
import appStyles from "./App.module.css";
import { useEffect, useState } from "react";
import data from "./Api/data.json";
function App() {
  const [values, setValues] = useState();
  const [number, setNumbers] = useState();
  const handleValuesChange = (event) => {
    setValues(event.target.value);
  };
  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
  };
  const numbers = data.numbers;
  const el_ngt = data["11-19"];
  const dozens = data.dozens;
  const hundreds = data.hundreds;
  useEffect(() => {
    {
      Object.entries(numbers).map(([key, value]) => {
        //console.log(value);
        Object.entries(value).map(([key, value]) => {
          console.log(key);
          console.log(value);
          console.log(values);
          if (values === key) {
            setNumbers(value);
          }
        });
      });
    }
  }, [values]);
  console.log();
  /*   return numbers.map((count) => {
    let dataKeys = Object.keys(count);

    dataKeys.map((obj) => {
      let k = obj;

      console.log();
      console.log(obj);
      if (obj === values) {
        setNumbers(values);
      }
    });
  }); */
  console.log(values);
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
        <input
          onChange={handleNumbersChange}
          value={number}
          className={appStyles.input}
          type="text"
        ></input>
      </form>
    </div>
  );
}

export default App;
