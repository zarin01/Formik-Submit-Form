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
      // ERRORS
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
        {/* EMAIL DIV */}
        <div id="emailFeild">Email</div>
        <input
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        {/* PASSWORD DIV */}
        <div id="pswFeild">Password</div>
        <input
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        {/* THE SUBMIT BUTTON */}
        <button
          id="submitBtn"
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
