import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen opacity-95"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Discover Your Next Favorite Movie</h1>
          <p className="mb-5">
            Explore amazing movies, discover new stories, and find something worth watching.
          </p>
          <Link to="/movies" className="btn btn-primary">Explore Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
