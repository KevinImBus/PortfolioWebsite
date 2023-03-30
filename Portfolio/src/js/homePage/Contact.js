import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/contact.scss";
import "../../styles/formInput.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      text: "",
      email: "",
      phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name is not valid")
        .max(20, "Name must be 20 charrecters or less.")
        .required("Name is required"),
      text: Yup.string().min(2, "Too Short!").required("At least say 'hi'"),
      email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
      phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    }),

    onSubmit: (values) => {
      emailjs
        .send(
          "service_v3l0t9o",
          "template_hwbhyxh",
          formik.values,
          "sa3Pvt_gG0hw-gjm9"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    },
  });

  console.log(
    Object.keys(formik.errors).length,
    Object.keys(formik.touched).length,
    formik.errors,
    formik.touched
  );

  return (
    <section id="contact">
      <div id="contactMain">
        <div id="contactForm">
          <form onSubmit={formik.handleSubmit}>
            <div className="formInput">
              <label htmlFor="name">Introduce yourself*</label>
              <input
                value={formik.values.name}
                onChange={formik.handleChange}
                id="name"
                name="name"
                type="text"
                onBlur={formik.handleBlur}
              />
              <span className="err">
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ""}
              </span>
            </div>
            <div className="formInput">
              <label htmlFor="text">Tell me somethink*</label>
              <textarea
                value={formik.values.text}
                onChange={formik.handleChange}
                rows="9"
                id="text"
                name="text"
                onBlur={formik.handleBlur}
              ></textarea>
              <span className="err">
                {formik.touched.text && formik.errors.text
                  ? formik.errors.text
                  : ""}
              </span>
            </div>
            <div className="formInput">
              <label htmlFor="email">Email for reply*</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                id="email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
              />
              <span className="err">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </span>
            </div>
            <div className="formInput">
              <label htmlFor="phone">Telephone</label>
              <input
                value={formik.values.phone}
                onChange={formik.handleChange}
                id="phone"
                name="phone"
                type="tel"
                onBlur={formik.handleBlur}
              />
              <span className="err">
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : ""}
              </span>
            </div>
            <div id="btnForm">
              <button
                className={
                  Object.keys(formik.touched).length >= 2 &&
                  Object.keys(formik.errors).length === 0
                    ? "btnUse"
                    : ""
                }
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div id="contactInfo">
          <h1>Contact me</h1>
          <div id="userInformation">
            <h2>
              To ask a question, or just say "hello", contact me in any
              convenient way.
            </h2>
          </div>
          <div id="myInformation">
            <h3>Information</h3>
            <p>
              Kevin Kromm <br /> Waldenburgerstr. 11 <br /> 33605 Bielefeld{" "}
              <br />
              kevin.kromm11@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
