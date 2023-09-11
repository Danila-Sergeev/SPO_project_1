const hendleData = (data, values, setField, setValues, setPrevValues) => {
  return Object.entries(data).map(([key, value]) => {
    Object.entries(value).map(([key, value]) => {
      let valuesNew = values.replace(/\s/g, "").replace(/\./g, "");
      let keyNew = key.replace(/\s/g, "");
      let keyPrev = key;
      if (valuesNew === keyNew && value <= 100 && value !== 80) {
        setField(value);
        setPrevValues(keyPrev);
        setValues("");
      }
      if (valuesNew === keyNew + "s" && (value > 100 || value === 80)) {
        setField(value);
        setPrevValues(keyPrev);
        setValues("");
      }
      if (valuesNew === "") {
        setField("");
        setPrevValues(keyPrev);
        setValues("");
      }
    });
  });
};
/* "soixante dix": 70,
      "soixante et onze": 71, */
const hendleComplexData = (
  data1,
  data2,
  values,
  setField,
  setValues,
  setPrevValues
) => {
  return Object.entries(data1).map(([key, obj1]) => {
    Object.entries(data2).map(([key, obj2]) => {
      Object.entries(obj1).map(([key1, value1]) => {
        Object.entries(obj2).map(([key2, value2]) => {
          let valuesNew = values.replace(/\s/g, "").replace(/\./g, "");
          let keyNew = key1.replace(/\s/g, "") + key2.replace(/\s/g, "");
          let keyPrev = key1 + " " + key2;

          if (
            valuesNew === keyNew &&
            key2 !== "un" &&
            key2 !== "onze" &&
            value1 < 80
          ) {
            setField(value1 + value2);
            setPrevValues(keyPrev);
            setValues("");
          }
          if (
            valuesNew === keyNew &&
            value2 !== 11 &&
            value2 >= 10 &&
            value2 <= 19 &&
            (key1 === "soixante" || key1 === "quatre vingt")
          ) {
            setField(value1 + value2);
            setPrevValues(keyPrev);
            setValues("");
          }

          if (valuesNew === keyNew && value1 >= 80 && value2 !== 80) {
            setField(value1 + value2);
            setPrevValues(keyPrev);
            setValues("");
          }
          if (valuesNew === keyNew + "s" && value2 === 80) {
            setField(value1 + value2);
            setPrevValues(keyPrev);
            setValues("");
          }

          if (values === "") {
            setField("");
          }
        });
      });
    });
  });
};
const hendleComplexTripleData = (
  data1,
  data2,
  data3,
  values,
  setField,
  setValues,
  setPrevValues
) => {
  return Object.entries(data1).map(([key, obj1]) => {
    Object.entries(data2).map(([key, obj2]) => {
      Object.entries(data3).map(([key, obj3]) => {
        Object.entries(obj1).map(([key1, value1]) => {
          Object.entries(obj2).map(([key2, value2]) => {
            Object.entries(obj3).map(([key3, value3]) => {
              let valuesNew = values.replace(/\s/g, "").replace(/\./g, "");
              let keyNew =
                key1.replace(/\s/g, "") +
                key2.replace(/\s/g, "") +
                key3.replace(/\s/g, "");
              let keyPrev = key1 + " " + key2 + " " + key3;
              if (valuesNew === keyNew && key3 !== "un") {
                setField(value1 + value2 + value3);
                setPrevValues(keyPrev);
                setValues("");
              }
              if (
                valuesNew === keyNew &&
                value3 !== 11 &&
                value3 >= 10 &&
                value3 <= 19 &&
                (key2 === "soixante" || key2 === "quatre vingt")
              ) {
                setField(value1 + value2 + value3);
                setPrevValues(keyPrev);
                setValues("");
              }
              if (valuesNew === keyNew) {
                setField(value1 + value2 + value3);
                setPrevValues(keyPrev);
                setValues("");
              }
              if (valuesNew === "") {
                setField("");
              }
            });
          });
        });
      });
    });
  });
};

export { hendleComplexData, hendleData, hendleComplexTripleData };
