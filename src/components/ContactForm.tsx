import React from "react";
import { useFormik } from "formik";
import _ from "lodash";
import * as yup from "yup";

const initialValues = {
  email: "",
  subject: "",
  body: "",
};

const validationSchema = yup.object({
  subject: yup.string().required("Subject is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  body: yup.string().required("Body is required"),
});

function ContactForm() {
  const onSubmit = () => {
    resetForm();
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    getFieldProps,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          {...getFieldProps("email")}
          id="email"
          name="email"
          placeholder="Email"
          className={errors.email && touched.email ? "invalid" : ""}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>
      <div className="form-control">
        <input
          {...getFieldProps("subject")}
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          className={errors.subject && touched.subject ? "invalid" : ""}
        />
        {errors.subject && touched.subject && (
          <div className="error">{errors.subject}</div>
        )}
      </div>
      <div className="form-control">
        <textarea
          id="body"
          name="body"
          placeholder="Hey there ;)"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.body}
          className={errors.body && touched.body ? "invalid" : ""}
        />
        {errors.body && touched.body && (
          <div className="error">{errors.body}</div>
        )}
      </div>
      <button
        className="btn-primary"
        type="submit"
        disabled={!_.isEmpty(errors)}
      >
        Hit me up
      </button>
    </form>
  );
}

export default ContactForm;
