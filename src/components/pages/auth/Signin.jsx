import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div>
        {/* Pages: Sign In: Boxed */}
        {/* Page Container */}
        <div
          id="page-container"
          className="  mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gradient-to-r from-red-600 via-red-900 to-yellow-600 dark:text-gray-100"
        >
          {/* Page Content */}
          <main
            id="page-content"
            className="flex max-w-full flex-auto flex-col"
          >
            <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
              {/* Sign In Section */}
              <section className="w-full max-w-xl py-6">
                {/* Header */}
                <header className="mb-5 text-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/07/55/63/19/360_F_755631914_ywbLJokVMiHJgd99s0BEEcx4PUPZOrZY.jpg"
                    alt=""
                    width={100}
                    className="rounded-full flex justify-center items-center mx-auto"
                  />
                  <span className="bg-gradient-to-r from-white via-orange-500 to-red-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl	">
                    Bawarchi
                  </span>
                  <h2 className="text-sm font-medium text-gray-200">
                    Welcome, please sign in to your dashboard
                  </h2>
                </header>
                {/* END Header */}
                {/* Sign In Form */}
                <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm text-gray-900  ">
                  <div className="grow p-0 md:px-16 md:py-5">
                    <form className="space-y-6" onsubmit="return false;">
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-5000 dark:placeholder-gray-400 "
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500  dark:placeholder-gray-400 "
                        />
                      </div>
                      <div>
                        <div className="mb-5 flex items-center justify-center">
                          <a
                            href="javascript:void(0)"
                            className="inline-block text-sm font-medium text-blue-800 hover:text-blue-400"
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                        >
                          <svg
                            className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                            xmlns=""
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Sign In</span>
                        </button>
                        {/* Divider: With Label */}
                        <div className="my-5 flex items-center">
                          <span
                            aria-hidden="true"
                            className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                          />
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            or sign in with
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                          />
                        </div>
                        {/* END Divider: With Label */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 "
                          >
                            <svg
                              className="bi bi-google inline-block size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 488 512"
                            >
                              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                            <span>Google</span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 "
                          >
                            <svg
                              className="bi bi-twitter-x inline-block size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                            </svg>
                            <span className="sr-only">X</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="grow bg-gray-50 p-5 text-center text-sm md:px-16 ">
                    Don’t have an account yet?{" "}
                    <Link to={"/Signup"}>
                      <p className="font-medium text-blue-600 hover:text-blue-900 hover:cursor-pointer ">
                        Sign up
                      </p>
                    </Link>
                  </div>
                </div>
                {/* END Sign In Form */}
              </section>
              {/* END Sign In Section */}
            </div>
          </main>
          {/* END Page Content */}
        </div>
        {/* END Page Container */}
        {/* END Pages: Sign In: Boxed */}
      </div>
    </>
  );
};

export default Signin;
