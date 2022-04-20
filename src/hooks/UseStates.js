import React, { useState } from "react";

const Hooks = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  function handleSubmit(e) {
    console.log(e);
    console.log(user);
    e.preventDefault();
  }
  return (
    <div>
      <h1>UseState</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="enter name"
          onChange={inputHandle}
        />
        <input
          type="text"
          placeholder="enter email"
          name="email"
          value={user.email}
          onChange={inputHandle}
        />
        <input
          type="text"
          placeholder="enter phone"
          name="phone"
          value={user.phone}
          onChange={inputHandle}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Hooks;
