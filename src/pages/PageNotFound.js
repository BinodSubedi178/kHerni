import { Link } from "react-router-dom";
import { useTitleUpdate } from "../hooks";
import PNF from "../assets/pnf.png";
export const PageNotFound = () => {
  useTitleUpdate("Page Not Found");
  return (
    <main>
      <section className="flex flex-col items-center px-2">
        <h2 className="text-gray-900 text-6xl font-semibold text-center dark:text-gray-200">
          Oops! Page Not Found.
        </h2>
        <div>
          <img className="max-h-80" src={PNF} alt="page-not-found-image" />
        </div>
        <div>
          <Link
            to="/"
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Take me Home
          </Link>
        </div>
      </section>
    </main>
  );
};
