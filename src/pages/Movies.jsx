import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
     const query = search.trim();
     if (!query) {
  fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) =>
        setMovies(data)
      )
      .catch((error) => 
        console.log(error));

        return;
      }

    fetch(
      `https://api.tvmaze.com/search/shows?q=${(query)}`
    )
      .then((res) => res.json())
      .then((data) => {
    
        const searchResults = data.map((item) => item.show);

        setMovies(searchResults);
      })
      .catch((error) => console.log(error));
  }, [search]);


  return (
    <div className="text-center">
      <label className="input my-10 w-full max-w-md">
        <input
          type="search"
          placeholder="🔍 Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-10">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>

      {movies.length === 0 && (
        <p className="text-gray-500 mt-10">
          No movies found.
        </p>
      )}
    </div>
  );
};

export default Movies;


