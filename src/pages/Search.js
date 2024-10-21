import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className="py-4">
        <h4 class="text-3xl dark:text-white text-gray-700">
          {movies.length === 0
            ? `No Matching Movies Found for '${queryTerm}'`
            : `Results for ${queryTerm}`}
        </h4>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-start">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
