import React from "react";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "Feild Required";
      if (containsSpecialChars(values.email) === false)
        errors.email = "Username should be an email";
      if (!values.password) errors.password = "Feild Required";
      return errors;
    },
  });
  const containsSpecialChars = (str) => {
    const specialChars = /[@.]/;
    return specialChars.test(str);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <div>Email</div>
        <input
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <button
          type="submit"
          onClick={function () {
            alert("Login Successful!");
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
