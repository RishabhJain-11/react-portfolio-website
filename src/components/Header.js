import React from "react";
import { Logo } from "../images/index";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
          <a className="block text-[#000080] font-extrabold flex items-center" href="/">
              <img src={Logo} alt="Logo" className="h-10 w-auto"  />
              <div>
                <span className="sr-only">Home</span>
                {/* <span className="text-lg">Vṛṣabha ārhata</span> */}
                <span className="text-lg">RmJ</span>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                All Links
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-600"
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
