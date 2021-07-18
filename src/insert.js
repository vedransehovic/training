import React, { useState } from "react";

function Insert(props) {
  //setting a state variable using useState hook;
  const [formContent, setFormContent] = useState("");
  function handleChange(e) {
    props.changeName(e.target.value);
  }

  function changeAge(e) {
    props.handleAge(e.target.value);
  }

  return (
    <div>
      <h1>This is insert component</h1>
      <p>
        We are going to make this component a state component with a form.
        Whatever is typed into the form will be displayed to the page.
      </p>
      <input
        type="text"
        name="example"
        onChange={(e) => setFormContent(e.target.value)}
      ></input>
      <p>This is what you're typing:</p>
      <h1>{formContent}</h1>
      <p>
        And this is who is typing: {props.name}, {props.age}
      </p>

      <h2>And now we can change the name of typist:</h2>
      <input type="text" onChange={handleChange}></input>

      <h2>And also change the age of typist:</h2>
      <input type="text" onChange={changeAge}></input>
    </div>
  );
}

export default Insert;
