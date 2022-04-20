import React, { useState } from "react";

const Input = () => {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
  function getData(event) {
    setData(event.target.value);
    setPrint(false);
  }
  return (
    <div>
      <h1>get field value</h1>
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}> print</button>
      {print ? <h3>{data}</h3> : null}
    </div>
  );
};

export default Input;
