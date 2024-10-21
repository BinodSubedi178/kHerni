import { Link } from "react-router-dom";
import NoImage from "../assets/noImage.png";

export const Card = ({ movie }) => {
  const { id, title, overview, poster_path, vote_average } = movie;
  const Image = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : NoImage;
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/title/id:${id}`}>
          <img className="rounded-t-lg" src={Image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/title/id:${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Rating : {Math.floor(vote_average)} / 10
          </p>
        </div>
      </div>
    </>
  );
};
