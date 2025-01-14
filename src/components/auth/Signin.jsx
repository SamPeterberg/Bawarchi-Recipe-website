import React from "react";

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
                            xmlns="http://www.w3.org/2000/svg"
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
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                          >
                            <svg
                              className="bi bi-facebook inline-block size-4 text-[#1877f2]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <span>Facebook</span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
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
                    <p className="font-medium text-blue-600 hover:text-blue-900 hover:cursor-pointer ">
                      Sign up
                    </p>
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
