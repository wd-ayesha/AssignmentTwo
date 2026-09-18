import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
            About MovieExplorer
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Discover Stories Worth
            <span className="text-blue-700"> Watching</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-base-content/70 sm:text-lg">
            MovieExplorer is your simple and enjoyable destination for
            discovering movies and TV shows. Explore popular titles, search
            for your favorites, and find your next story to watch.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-base-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Image / Visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl bg-blue-700 p-8 shadow-xl sm:p-12">
                <div className="rounded-2xl bg-base-100 p-8 text-center">
                  <div className="text-6xl sm:text-7xl">🎬</div>

                  <h2 className="mt-5 text-2xl font-bold">
                    MovieExplorer
                  </h2>

                  <p className="mt-3 text-base-content/60">
                    Explore. Discover. Watch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Your Gateway to the World of Entertainment
            </h2>

            <p className="mt-6 leading-7 text-base-content/70">
              Finding something interesting to watch should be easy.
              MovieExplorer brings movies and TV shows together in one
              convenient place so you can quickly discover new titles.
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Whether you're looking for an old favorite or something
              completely new, you can search through a wide collection of
              shows and explore useful information such as ratings,
              genres, release dates, and descriptions.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-base-200 p-5">
                <h3 className="font-bold">🔍 Easy Discovery</h3>
                <p className="mt-2 text-sm text-base-content/60">
                  Quickly search and discover movies and TV shows.
                </p>
              </div>

              <div className="rounded-xl bg-base-200 p-5">
                <h3 className="font-bold">⭐ Useful Details</h3>
                <p className="mt-2 text-sm text-base-content/60">
                  Explore ratings, genres, dates, and descriptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              What We Offer
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything You Need to Explore
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base-content/60">
              MovieExplorer is designed to make finding your next favorite
              movie or show simple and enjoyable.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="card-body">
                <div className="text-4xl">🎥</div>

                <h3 className="card-title mt-2">
                  Explore Movies & Shows
                </h3>

                <p className="text-base-content/60">
                  Browse a diverse collection of entertainment and discover
                  titles that match your interests.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="card-body">
                <div className="text-4xl">🔎</div>

                <h3 className="card-title mt-2">
                  Powerful Search
                </h3>

                <p className="text-base-content/60">
                  Search for your favorite movies and TV shows quickly using
                  the TVMaze database.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="card-body">
                <div className="text-4xl">📱</div>

                <h3 className="card-title mt-2">
                  Responsive Experience
                </h3>

                <p className="text-base-content/60">
                  Enjoy MovieExplorer comfortably on phones, tablets, and
                  desktop devices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-700 px-6 py-12 text-center text-white shadow-xl sm:px-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Discover Something New?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Start exploring movies and TV shows and find your next
            entertainment favorite.
          </p>

          <Link to="/movies" className="btn mt-7 border-0 bg-white px-7 text-blue-700 hover:bg-gray-100">Explore Movies 🎬</Link>
        </div>
      </section>

    </div>
  );
};

export default About;