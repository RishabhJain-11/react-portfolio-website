import React from "react";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-[#000080] font-extrabold" href="/">
              <span className="sr-only">Home</span>
              vṛṣabha ārhata
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                All Links
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="/"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
