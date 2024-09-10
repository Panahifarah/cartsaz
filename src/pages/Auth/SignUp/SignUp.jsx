import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FormInput = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  error,
  isRequired = false,
  type = "text",
  options = [],
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-gray-700 text-sm">
      {label} {isRequired && <span className="text-red-500">*</span>}
    </label>
    {type === "select" ? (
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`mt-1 pl-4 pr-4 py-2 border rounded-lg w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`mt-1 pl-4 pr-4 py-2 border rounded-lg w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />
    )}
    {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.oneOf(["text", "select"]),
  options: PropTypes.arrayOf(PropTypes.string),
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  instagramId: Yup.string().required("Instagram ID is required"),
  shopName: Yup.string().required("Shop Name is required"),
  activityType: Yup.string().required("Type of store activity is required"),
  email: Yup.string().email("Invalid email address"),
  senderAddress: Yup.string(),
  senderPostNumber: Yup.string().matches(
    /^\d+$/,
    "Post number must be numeric"
  ),
});

const activityTypes = ["Retail", "Wholesale", "Service", "Online", "Other"];

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      instagramId: "",
      shopName: "",
      activityType: "",
      email: "",
      senderAddress: "",
      senderPostNumber: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form submitted:", values);
      setTimeout(() => {
        navigate("/success");
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <a
          onClick={() => navigate("/exit")}
          className="text-red-400 text-sm font-semibold hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer underline"
        >
          Exit
        </a>
        <h1 className="text-xl font-bold text-gray-900">Shop Registration</h1>
      </header>

      <main className="flex flex-grow items-center justify-center p-4 overflow-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md p-6 space-y-4 rounded-lg"
        >
          <FormInput
            label="Name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            isRequired
          />

          <FormInput
            label="Shop Instagram ID"
            id="instagramId"
            value={formik.values.instagramId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.instagramId && formik.errors.instagramId}
            isRequired
          />

          <FormInput
            label="Shop Name"
            id="shopName"
            value={formik.values.shopName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.shopName && formik.errors.shopName}
            isRequired
          />

          <FormInput
            label="Type of Store Activity"
            id="activityType"
            value={formik.values.activityType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.activityType && formik.errors.activityType}
            isRequired
            type="select"
            options={activityTypes}
          />

          <FormInput
            label="Email (Optional)"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          <FormInput
            label="Sender Address (Optional)"
            id="senderAddress"
            value={formik.values.senderAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.senderAddress && formik.errors.senderAddress}
          />

          <FormInput
            label="Sender Post Number (Optional)"
            id="senderPostNumber"
            value={formik.values.senderPostNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.senderPostNumber && formik.errors.senderPostNumber
            }
          />

          <div className="bg-gray-200 text-gray-700 p-4 rounded-lg text-sm shadow-sm">
            <p>
              Please fill in all the required fields. Optional fields can be
              skipped, but providing more information helps us serve you better.
            </p>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center"
          >
            {formik.isSubmitting ? (
              <AiOutlineLoading className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <span>Complete Registration</span>
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
