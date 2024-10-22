import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Content */}
            <div className="flex flex-col gap-8 lg:w-3/5">
              <h2 className="mb-8 text-3xl font-bold md:text-5xl">About us</h2>
              <p className="text-sm sm:text-base">
                At Bawarchi, we’re all about the love of food and the joy of
                sharing. Our mission is to create a space where food lovers,
                from beginner cooks to culinary experts, can come together to
                share their favorite recipes, tips, and stories. Founded by food
                enthusiasts, Bawarchi was born out of a desire to preserve
                cherished family recipes while exploring new flavors from across
                the globe. Here, you can find recipes that suit every
                palate—whether you’re craving traditional comfort food or
                looking to try something new and exciting. Cooking isn’t just
                about following instructions; it’s about creativity, connection,
                and community. At Bawarchi, we invite you to join us in
                celebrating the diverse world of food, one recipe at a time
              </p>
              <Link to={"/AllRecipes"}>
                <h2 className="w-auto rounded-md bg-black px-6 py-3 text-center font-semibold text-white">
                  Explore Recipes
                </h2>
              </Link>
              {/* Divider */} <div className="my-8 h-px w-full bg-black"></div>
              {/* Testimonials */}
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                  <p className="text-sm">
                    I have been using the Business Solution services for the
                    past year, and I am extremely satisfied with the results.
                    Their innovative solutions and expertise have transformed my
                    business operations.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1664301243888-b742afd0676c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2luZyUyMHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base">
                        Sameer
                      </p>
                    </div>
                    {/* Divider */} <div className="h-5 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base">5.0</p>
                      <div className="flex text-orange-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                  <p className="text-sm">
                    I have been using the Business Solution services for the
                    past year, and I am extremely satisfied with the results.
                    Their innovative solutions and expertise have transformed my
                    business operations.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://media.istockphoto.com/id/1251717229/photo/young-woman-friends-different-races-in-apron-make-salad-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=ck9fGafODB4mpJwnHjnzr3bm4wgI57jBRoIoNki5Dqw="
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base">
                        Alleyah
                      </p>
                    </div>
                    {/* Divider */} <div className="h-5 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base">5.0</p>
                      <div className="flex text-orange-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5">
              <img
                src="https://plus.unsplash.com/premium_photo-1664301243888-b742afd0676c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2luZyUyMHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
