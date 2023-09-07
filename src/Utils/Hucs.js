const hendleData = (data, values, setField) => {
  return Object.entries(data).map(([key, value]) => {
    Object.entries(value).map(([key, value]) => {
      if (values === key) {
        setField(value);
      }
      if (values === "") {
        setField("");
      }
    });
  });
};
const hendleComplexData = (data1, data2, values, setField) => {
  return Object.entries(data1).map(([key, obj1]) => {
    console.log(obj1);
    Object.entries(data2).map(([key, obj2]) => {
      console.log(obj2);
      Object.entries(obj1).map(([key1, value1]) => {
        console.log(value1, key1);
        Object.entries(obj2).map(([key2, value2]) => {
          if (values === key1 + " " + key2 && key2 !== "un" && value1 < 100) {
            setField(value1 + value2);
          }
          //console.log(key1.substr(-11, 5) + " " + key1.substr(-5, 4));
          if (values === key1 + " " + key2 && value1 >= 100) {
            setField(value1 + value2);
          }

          if (values === "") {
            setField("");
          }
        });
      });
    });
  });
};
const hendleComplexTripleData = (data1, data2, data3, values, setField) => {
  return Object.entries(data1).map(([key, obj1]) => {
    console.log(obj1);
    Object.entries(data2).map(([key, obj2]) => {
      console.log(obj2);
      Object.entries(data3).map(([key, obj3]) => {
        console.log(obj2);
        Object.entries(obj1).map(([key1, value1]) => {
          console.log(value1, key1);
          Object.entries(obj2).map(([key2, value2]) => {
            Object.entries(obj3).map(([key3, value3]) => {
              if (values === key1 + " " + key2 + " " + key3 && key3 !== "un") {
                setField(value1 + value2 + value3);
              }
              if (values === key1 + " " + key2 + " " + key3) {
                setField(value1 + value2 + value3);
              }
              if (values === "") {
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
