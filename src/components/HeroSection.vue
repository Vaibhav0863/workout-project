<template>
  <section class="container my-16">
    <div class="grid grid-cols-1 md:grid-cols-8 gap-x-2">
      <div class="col-span-4 text-center lg:text-left mt-10 lg:mt-0">
        <h1
          class="
            uppercase
            font-bold
            lg:text-6xl
            text-3xl text-center
            inline-block
            tracking-widest
            lg:tracking-wide
          "
        >
          4 week
          <span
            class="
              block
              text-sm
              lg:text-lg
              font-medium
              -mt-1
              tracking-widest
              lg:tracking-widest-1
            "
            >workout plan</span
          >
        </h1>

        <p
          class="
            my-6
            lg:py-8
            text-sm
            leading-relaxed
            text-bookmark-white text-opacity-40
            lg:w-10/12
          "
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          velit enim molestiae obcaecati minus excepturi eaque nulla maiores id
          quisquam! Consequuntur praesentium earum perspiciatis ipsam aliquid?
          Voluptates rerum aut consequuntur!
        </p>

        <button
          class="
            text-sm
            font-semibold
            text-bookmark-white
            bg-bookmark-pink
            px-4
            py-2
            rounded-md
            uppercase
          "
        >
          try for free
        </button>
      </div>

      <div
        class="
          col-span-4
          row-start-1
          md:col-start-5
          gap-x-6
          grid
          lg:grid-cols-2
        "
      >
        <div class="aspect-w-4 aspect-h-4 rounded-3xl overflow-hidden">
          <img
            class="
              rounded-3xl
              object-cover object-top
              transform
              lg:transform-none
              scale-150
              translate-y-16
            "
            src="../assets/images/hero-image.svg"
            alt=""
          />
        </div>

        <div class="hidden lg:grid grid-cols-1 gap-4">
          <div
            class="
              p-6
              rounded-3xl
              bg-bookmark-light-black
              flex flex-col
              gap-y-6
              justify-between
            "
          >
            <h1 class="text-bookmark-white font-semibold uppercase text-xl">
              get inspired
            </h1>

            <p
              class="
                line-clamp-3
                text-xs
                leading-relaxed
                text-bookmark-white text-opacity-50
              "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet et
              explicabo fugit ratione ipsum sequi earum voluptates neque,
              voluptatibus voluptatem nam similique perspiciatis alias repellat
              deleniti accusamus blanditiis. Vel, officiis.
            </p>

            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-bookmark-pink p-2 rounded-full">
                <svg
                  class="transform -rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p class="capitalize font-semibold text-base text-bookmark-white">
                explore more
              </p>
            </div>
          </div>

          <div
            class="
              p-6
              rounded-3xl
              bg-bookmark-light-black
              flex flex-col
              gap-y-5
              justify-between
            "
          >
            <h1 class="text-bookmark-white font-semibold uppercase text-xl">
              challenge yourself
            </h1>

            <p
              class="
                line-clamp-3
                text-xs
                leading-relaxed
                text-bookmark-white text-opacity-50
              "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet et
              explicabo fugit ratione ipsum sequi earum voluptates neque,
              voluptatibus voluptatem nam similique perspiciatis alias repellat
              deleniti accusamus blanditiis. Vel, officiis.
            </p>

            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-bookmark-pink p-2 rounded-full">
                <svg
                  class="transform -rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p class="capitalize font-semibold text-base text-bookmark-white">
                explore more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>