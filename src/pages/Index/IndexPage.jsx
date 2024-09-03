import { useState } from "react";
import packageJson from "../../../package.json";

const IndexPage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-background-white text-secondary-black-1" : "bg-background-black text-secondary-white-1"}`}
    >
      <header
        className={`py-16 text-center transition-colors duration-300 ${theme === "light" ? "bg-primary-DEFAULT text-white" : "bg-primary-dark text-gray-100"}`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <h1
            className={`text-5xl font-extrabold leading-tight mb-4 ${theme === "light" ? "text-secondary-blue-1" : "text-secondary-blue-200"}`}
          >
            Welcome to{" "}
            <span className="text-secondary-orange-1">{packageJson.name}</span>
          </h1>
          <p
            className={`text-lg font-medium ${theme === "light" ? "text-secondary-black-700" : "text-secondary-gray-300"}`}
          >
            A place to find success, warning, and error information.
          </p>
          <button
            onClick={toggleTheme}
            className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform transform hover:scale-105"
          >
            Toggle Theme
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12">
        <section className="mb-12">
          <h2
            className={`text-4xl font-semibold mb-6 ${theme === "light" ? "text-secondary-blue-2" : "text-secondary-blue-300"}`}
          >
            Section Header
          </h2>
          <p
            className={`text-lg leading-relaxed mb-6 ${theme === "light" ? "text-secondary-black-800" : "text-secondary-gray-200"}`}
          >
            This is a paragraph of text that uses a secondary color. It is
            styled to have a more readable line height and better spacing.
            Enhanced readability helps in delivering the message clearly and
            effectively.
          </p>
        </section>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <button
            className={`px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-primary-success text-white hover:bg-primary-success-dark focus:ring-primary-success-light" : "bg-primary-success-dark text-gray-200 hover:bg-primary-success focus:ring-primary-success"}`}
          >
            Success Button
          </button>
          <button
            className={`px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-primary-warning text-black hover:bg-primary-warning-dark focus:ring-primary-warning-light" : "bg-primary-warning-dark text-gray-200 hover:bg-primary-warning focus:ring-primary-warning"}`}
          >
            Warning Button
          </button>
          <button
            className={`px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-primary-error text-white hover:bg-primary-error-dark focus:ring-primary-error-light" : "bg-primary-error-dark text-gray-200 hover:bg-primary-error focus:ring-primary-error"}`}
          >
            Error Button
          </button>
        </div>
      </main>

      <footer
        className={`py-8 text-center transition-colors duration-300 ${theme === "light" ? "bg-background-color-3 text-secondary-black-3" : "bg-background-color-4 text-secondary-white-3"}`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-base">
            Footer content with a light background. Adjust padding and margin as
            needed for a balanced look. Ensuring clear separation from the main
            content improves overall readability.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
