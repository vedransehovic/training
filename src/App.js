//goal is to make a simple component using that uses state and props
//also create form component that will write to state
import React, { useState } from "react";
import "./App.css";
import Insert from "./insert";

function App() {
  const [name, setName] = useState("Vedran");
  const [age, setAge] = useState("44");

  function handleChange(newName) {
    setName(newName);
  }

  function handleAge(newAge) {
    setAge(newAge);
  }

  return (
    <div>
      <h2>React Refresher Course</h2>
      <Insert
        changeName={handleChange}
        handleAge={handleAge}
        name={name}
        age={age}
      />
    </div>
  );
}

export default App;
