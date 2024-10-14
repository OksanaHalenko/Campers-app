import css from "./BookForm.module.css";
import * as Yup from "yup";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const date = new Date();
const initialValues = {
  username: "",
  email: "",
  bookingDate: date.toISOString().split("T")[0],
  comment: "",
};
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date()
    .typeError("Please enter a valid date")
    .required("Date is required"),
  comment: Yup.string().min(5, "Comment must be at least 5 characters long"),
});
function BookForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    if (actions) {
      toast.success(
        "Form successfully submitted! Thank you for the order! ",
        {
          position: "top-center",
          autoClose: 3000,
        },
        1000
      );
      actions.resetForm();
    }
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="Name*"
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field
            className={css.field}
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
          />
          <ErrorMessage
            className={css.error}
            name="bookingDate"
            component="span"
          />
          <Field
            as="textarea"
            rows="3"
            className={css.field}
            type="text"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
          <div className={css.btn}>
            <SubmitBtn
              handleSubmit={handleSubmit}
              ariaLabel={"Submit book form"}
            >
              Send
            </SubmitBtn>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default BookForm;
