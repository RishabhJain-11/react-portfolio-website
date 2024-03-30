import React from "react";

export default function CTS() {
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-10">
        <div className="mx-auto max-w-lg text-center">
          <br />
          <br />
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Rishabh Jain - Freelancer
            </h2>
            <p className="mt-4 text-gray-500">
              Creators of innovative design solutions, captivating online
              experiences, and compelling content.
              <br />
              <br />
              Explore our portfolio of projects and gigs across platforms like{" "}
              <a
                href="/"
                className="text-green-400 font-extrabold underline underline-offset-2"
              >
                Fiverr
              </a>
              ,{" "}
              <a
                href="/"
                className="text-green-600 font-extrabold underline underline-offset-2"
              >
                Upwork
              </a>
              , Freelancer,{" "}
              <a
                href="/"
                className="text-blue-400 font-extrabold underline underline-offset-2"
              >
                Twitter (X)
              </a>
              ,{" "}
              <a
                href="/"
                className="text-pink-400 font-extrabold underline underline-offset-2"
              >
                Dribble
              </a>
              , and more.
              <br />
              <br />
              We're not just about creating; we're about crafting experiences
              that leave a lasting impression. From designing stunning visuals
              to crafting engaging website experiences and crafting compelling
              content, we bring creativity and expertise to every project.
              <br />
              <br />
              Join us in shaping the future of design, online presence, and
              content creation. Based in diverse locations, our team is ready to
              collaborate with you to bring your vision to life. Let's create
              something extraordinary together.
            </p>
          </header>
        </div>

        <div className="mx-auto mt-8 max-w-xl mb-8">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Connect with me - Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium">
                {" "}
                Send this to Rishabh{" "}
              </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
