import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import CartsazFrame from "../../../assets/images/CartsazFrame.svg";
import { AiOutlineLoading } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa"; // Import the icon

const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const email = location.state?.email || "test@mail.com"; // Safe access with optional chaining

  const [code, setCode] = useState(new Array(5).fill(""));
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isValidCode, setIsValidCode] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const correctCode = "12345"; // Example correct code

  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 4) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].classList.add("border-blue-500");
  };

  const handleBlur = (index) => {
    inputRefs.current[index].classList.remove("border-blue-500");
  };

  const handleResendCode = () => {
    setCode(new Array(5).fill(""));
    setTimer(60);
    setIsResendDisabled(true);
    setIsValidCode(null);
    console.log("Verification code resent to your email.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enteredCode = code.join("");
    console.log("Verification code entered:", enteredCode);

    setTimeout(() => {
      if (enteredCode === correctCode) {
        setIsValidCode(true);
        console.log("Code is valid");
      } else {
        setIsValidCode(false);
        console.log("Code is invalid");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative">
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 flex items-center text-black hover:text-gray-700 focus:outline-none"
      >
        <FaArrowLeft className="mr-2" />
        <span>Change Email Address</span>
      </button>

      <div className="mb-8">
        <img src={CartsazFrame} alt="Logo" className="w-[171px] h-[209px]" />
      </div>
      <h1 className="text-2xl font-bold mb-6">Email Verification</h1>

      <label className="block text-sm mb-4 text-center">
        Please enter the verification number sent to <strong>{email}</strong>
      </label>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <fieldset className="flex space-x-2 mb-6 justify-center">
          {code.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              id={`code-input-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              className={`w-12 h-12 border rounded-lg text-center text-2xl ${
                isValidCode === true
                  ? "border-green-500"
                  : isValidCode === false
                    ? "border-red-500"
                    : "border-gray-300"
              }`}
            />
          ))}
        </fieldset>

        <div
          className={`text-sm mb-4 text-center ${
            isValidCode === true
              ? "text-green-500"
              : isValidCode === false
                ? "text-red-500"
                : ""
          }`}
        >
          {isValidCode === true
            ? "The code is valid!"
            : isValidCode === false
              ? "The code is invalid. Please try again."
              : ""}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center"
        >
          {isSubmitting ? (
            <AiOutlineLoading className="animate-spin h-5 w-5 mr-2" />
          ) : (
            <span>Verify Code</span>
          )}
        </button>

        <div className="text-center mt-4">
          {timer > 0 ? (
            <p className="text-gray-600">Resend code in {timer} seconds</p>
          ) : (
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResendDisabled}
              className="text-blue-500 hover:underline"
            >
              Resend Code
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;
