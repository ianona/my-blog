import React, { useState } from "react";
import { useFormik } from "formik";
import _ from "lodash";
import * as yup from "yup";

const initialValues = {
  email: "",
  name: "",
  subject: "",
  message: "",
};

const validationSchema = yup.object({
  subject: yup.string().required("Subject is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  name: yup.string().required("Name is required"),
  message: yup.string().required("Body is required"),
});

function ContactForm() {
  const [response, setResponse] = useState<{
    type: "success" | "error",
    msg: string
  } | null>(null);
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    getFieldProps,
    resetForm,
    isSubmitting
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const res = await fetch('/api/sendgrid', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          const data = await res.json();
          setResponse({
            type: "success",
            msg: data.message
          });
          resetForm();
        } else {
          console.log("GRRR")
          setResponse({
            type: "error",
            msg: "Error Sending Message"
          });
        }
      } catch (error) {
        console.log("ERROR")
        setResponse({
          type: "error",
          msg: "Error Sending Message"
        });
      }
    },
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
          {...getFieldProps("name")}
          type="text"
          id="name"
          name="name"
          placeholder="Barry M."
          className={errors.name && touched.name ? "invalid" : ""}
        />
        {errors.name && touched.name && (
          <div className="error">{errors.name}</div>
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
          id="message"
          name="message"
          placeholder="Hey there"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          className={errors.message && touched.message ? "invalid" : ""}
        />
        {errors.message && touched.message && (
          <div className="error">{errors.message}</div>
        )}
      </div>
      {
        response &&
        <div className={`${response.type == "success" ? " bg-primary-light" : "bg-pink-500"} flex flex-row gap-3 p-4 rounded-lg text-white shadow-md items-center`}>
          <div className="text-2xl">
            {response.type === "success" ? "👍🏽" : "😔"}
          </div>
          <p className="grow-[2]">
            {response.msg}
          </p>
          <button onClick={() => setResponse(null)}>
            ⓧ
          </button>
        </div>
      }
      <button
        className="btn-primary"
        type="submit"
        disabled={!_.isEmpty(errors) || isSubmitting}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
