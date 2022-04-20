import React from "react";
import { useState } from "react";
import ArrayMap from "../../tut6/handleArray/ArrayMap";

const Toggle = () => {
  const [status, setStatus] = useState(true);
  return (
    <div>
      {status ? <h2> <ArrayMap/> </h2> : null}
      <button onClick={() => setStatus(false)}>hide</button>
      <button onClick={() => setStatus(true)}>show</button>
      <br />
      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
};

export default Toggle;
