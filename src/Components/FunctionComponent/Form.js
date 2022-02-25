import React, { useState, useEffect } from "react";

let formEelments = [
  {
    label: "First Name",
    key: "firstName",
  },
  {
    label:"Last Name",
    key: "lastName",
  },
  {
    label: "Number",
    key: "number",
  },
]

function Form() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });

  const changeHandle = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formValues); 
  }, [formValues]);

  return (
    <form>
      {formEelments.map(formEl => {
        return(
          <div>
            {formEl.label}
            <input name={formEl.key}  onChange={changeHandle}/>
          </div>
        )
      })}
      {/* <div>
        <label>First Name</label>
        <input
          type="text"
          value={formValues.firstName}
          name="firstName"
          required
          maxLength={5}
          onChange={changeHandle}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={formValues.lastName}
          name="lastName"
          onChange={changeHandle}
        />
      </div> */}
    </form>
  );
}

export default Form;
