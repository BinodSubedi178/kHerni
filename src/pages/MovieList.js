import { Card } from "../components";
import { useFetch, useTitleUpdate } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitleUpdate(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
