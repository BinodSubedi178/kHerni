import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  return (
    <main>
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
