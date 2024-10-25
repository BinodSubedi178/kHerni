import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-white-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KHerni?
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.instagram.com/binod_subedi18"
                className="hover:underline me-4 md:me-6"
                rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/binodsubedi"
                className="hover:underline me-4 md:me-6"
                rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/binod.subedi187"
                className="hover:underline me-4 md:me-6"
                rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/binodsubedi178"
                className="hover:underline"
                rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            kHerni?
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
