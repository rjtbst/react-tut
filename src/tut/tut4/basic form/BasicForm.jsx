import React from "react";
import { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState(false);
  const [print, setPrint] = useState(false);

  function getData(e) {
    console.log(name, interest, tnc);
    e.preventDefault();
  }
  return (
    <div>
      <h1>handle form in react</h1>
      <form onSubmit={getData}>
        <input
          type="text"
          placeholder="your name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <select id="1" onChange={(e) => setInterest(e.target.value)}>
          <option value="0">select option</option>
          <option>marvel</option>
          <option>dc</option>
        </select>{" "}
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
        />{" "}
        <span>terms and condition</span> <br /> <br />
        <button type="submit"> submit</button> 
      </form> <br /> <br />
      <button onClick={()=>setPrint(true)}>print data </button>
      {
        print? <><h2>name: {name}</h2> <h2> interest: {interest}</h2> </> : null
      }
    </div>
  );
};

export default BasicForm;
