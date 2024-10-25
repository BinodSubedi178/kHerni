import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoImage from "../assets/noImage.png";
import { useTitleUpdate } from "../hooks";

export const MovieDetail = ({ apiPath }) => {
  const [movie, setMovie] = useState({});
  const [loader, setLoader] = useState(true);
  const params = useParams();
  const url = `https://api.themoviedb.org/3/${apiPath}${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoader(true);
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
      response.ok && setLoader(false);
    };
    fetchMovies();
  }, [url]);

  const Image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : NoImage;
  useTitleUpdate(movie.title);

  return (
    <main>
      {loader ? (
        <div className="m-auto max-w-4xl">
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <section className=" py-5 flex flex-wrap justify-around">
          <div className="max-w-sm">
            <img className="rounded" src={Image} alt={movie.title} />
          </div>
          <div className="max-w-2xl text-gray-700 text-lg dark:text-white flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center lg:text-left mt-3">{movie.title}</h1>
            <p>{movie.overview}</p>
            {movie.genres ? (
              <p className="flex flex-wrap">
                {movie.genres.map((genre) => {
                  return (
                    <span
                      className="text-gray-900  border border-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-5 dark:border-gray-600 dark:text-gray-400"
                      key={genre.id}>
                      {genre.name}
                    </span>
                  );
                })}
              </p>
            ) : (
              ""
            )}
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 font-bold text-gray-900 dark:text-white">
                {Math.floor(movie.vote_average)}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="font-medium text-gray-900 dark:text-white">{movie.vote_count} votes</p>
            </div>
            <p>
              <span className="font-bold">Runtime:</span> {movie.runtime} min
            </p>
            <p>
              <span className="font-bold">Budget:</span> ${movie.budget}
            </p>
            <p>
              <span className="font-bold">Revenue:</span> ${movie.revenue}
            </p>
            <p>
              <span className="font-bold">Release Date:</span> {movie.release_date}
            </p>
            <p>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer">
                <span className="font-bold ">IMDB Id:</span>
                <span>{movie.imdb_id}</span>
              </a>
            </p>
          </div>
        </section>
      )}
    </main>
  );
};
