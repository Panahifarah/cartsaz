import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CartsazFrame from "../../../assets/images/CartsazFrame.svg";
import { AiOutlineLoading } from "react-icons/ai";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const EmailInput = ({ value, onChange, onBlur, error, isValid }) => (
  <div className="relative">
    <input
      id="email"
      name="email"
      type="email"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`pl-4 pr-4 py-2 border rounded-lg w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
        error
          ? "border-red-500 ring-red-500"
          : isValid
            ? "border-green-500 ring-green-500"
            : "border-gray-300 focus:ring-blue-500"
      }`}
      placeholder="you@example.com"
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? "email-error" : undefined}
    />
  </div>
);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  isValid: PropTypes.bool,
};

const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form submitted with values:", {
        email: values.email,
      });

      setTimeout(() => {
        navigate("/email-verification", { state: { email: values.email } });
        setSubmitting(false);
      }, 1000);
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="mb-8">
        <img src={CartsazFrame} alt="Logo" className="w-[171.12px] h-[209px]" />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-900">Sign In</h1>

      <form
        className="w-full max-w-md space-y-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col space-y-2">
          <label className="block text-gray-700 text-sm" htmlFor="email">
            Enter your email:
          </label>

          <EmailInput
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
        </div>

        {formik.touched.email && formik.errors.email && (
          <div
            id="email-error"
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {formik.errors.email}
          </div>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center"
        >
          {formik.isSubmitting ? (
            <AiOutlineLoading className="animate-spin h-5 w-5 mr-2" />
          ) : (
            <span>Login</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
