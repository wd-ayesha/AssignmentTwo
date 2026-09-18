import { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Movie = ({ movie }) => {
  // console.log(movie);
  const { image, name, premiered, rating, summary, type, genres } = movie;
  const bidModalRef = useRef(null);
  const handleModalOpen = () => {
    bidModalRef.current.showModal();
  };
  const removeHtmlTags = (html) => {
    return html ? html.replace(/<[^>]*>/g, "") : "";
  };
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image?.original} alt={name} className="rounded-xl h-96" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          <div className="flex items-center gap-2">
            <span className="flex items-center">
              <FaStar className="mr-2 text-amber-500" />
              {rating?.average}
            </span>
            <BsDot />

            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-800" />
              {premiered?.split("-")[0]}
            </span>
          </div>

          <div className="card-actions">
            <Link onClick={handleModalOpen} className="btn btn-primary">
              See Details
            </Link>
            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <figure>
                  <img
                    src={image?.medium}
                    alt={name}
                    className="rounded-xl w-fit"
                  />
                </figure>
                <p className="text-left font-medium pt-2">
                  Movie Title: <span className="font-light">{name}</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="flex items-center">
                    <FaStar className="mr-2 text-amber-500" />
                    {rating?.average}
                  </span>
                  |
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-800" />
                    {premiered?.split("-")[0]}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-medium"> Overview:</p>
                  <p>{removeHtmlTags(movie?.summary).slice(0, 180)}...</p>
                </div>

                <div className="text-left font-bold">
                  Genre:
                  {genres.map((genre, indx) => (
                    <span className="mx-3 font-light" key={indx}>
                      {genre}
                    </span>
                  ))}
                </div>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
