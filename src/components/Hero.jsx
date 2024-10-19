import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-red-600 via-red-900 to-yellow-600  text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 md:flex md:h-screen md:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className=" text-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Discover Flavors
              <span className="sm:block"> Share Recipes! </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Welcome to Bawarchi, your go-to platform for all things culinary.
              Whether you're a seasoned chef or just starting your cooking
              journey, here you'll find a world of flavors to explore. Share
              your favorite recipes, learn new ones, and connect with a
              community of food enthusiasts. From traditional dishes to
              innovative creations, Bawarchi is here to inspire your inner chef.
              Dive in and let's cook up something special!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-gray-50 sm:py-16 drop-shadow-sm lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Discover Delicious Recipes for Every Occasion{" "}
            </h2>
            <p>
              Transform your cooking with quick, easy recipes that bring fresh,
              wholesome ingredients to the table. From nutritious breakfasts to
              mouthwatering dinners, we’ve got you covered.
            </p>
          </div>

          <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div class="md:px-4 lg:px-10 ">
              <img
                class="-rotate-1"
                src="https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0Y2huJTIwYW5kJTIwY29va2luZ3xlbnwwfHwwfHx8MA%3D%3D  "
                alt=""
              />
              <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
                Cook Delicious Meals Every Day
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Hundreds of easy, step-by-step recipes for every occasion.
                Whether you’re a beginner or a seasoned chef, we’ve got you
                covered.
              </p>
            </div>

            <div class="md:px-4 lg:px-10">
              <img
                class="rotate-1"
                src="https://images.unsplash.com/photo-1506368083636-6defb67639a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2huJTIwYW5kJTIwY29va2luZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
                Cook Healthy, Live Happy
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Transform your cooking with quick, easy recipes that bring
                fresh, wholesome ingredients to the table. From nutritious
                breakfasts to mouthwatering dinners, we’ve got you covered.
              </p>
            </div>

            <div class="md:px-4 lg:px-10">
              <img
                class="-rotate-1"
                src="https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNobiUyMGFuZCUyMGNvb2tpbmd8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
                Bring Joy to Your Table with Delicious Recipes
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Explore hundreds of delicious, easy-to-make recipes designed to
                fit your busy lifestyle. From quick dinners to family favorites,
                we make cooking fun and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
