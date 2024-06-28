import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
const Register = () => {

  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();
  function handleSubmit({ username, email, password }) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });
  }
  return (
   <>
   <Helmet>
    <title>Register</title>
   </Helmet>
   <section className="register">
      <div className="register_container">
        <div className="register_container_content">
          <div className="register_container_content_title">Register</div>

          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={Yup.object({
              username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required(<span>Required</span>),
              email: Yup.string()
                .email("Invalid email address")
                .required(<span>Required</span>),
              password: Yup.string()
                .min(8, "Too short!")
                .required(<span>Required</span>),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" />

              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" />

              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
      <p>
      Have an account?<Link to={"/login"}>Log in</Link>
      </p>
    </section>
   </>
  );
};

export default Register;
