<template>
  <section class="my-20 lg:my-32 container">
    <div class="lg:flex justify-between items-center text-center lg:text-left">
      <h1 class="inline-block uppercase text-2xl text-bookmark-white font-bold">
        latest training
        <span
          class="mt-1 w-full lg:w-3/12 h-1 block bg-bookmark-dark-pink"
        ></span>
      </h1>

      <a
        href="#"
        class="
          uppercase
          text-xs
          font-light
          hover:text-bookmark-pink
          text-bookmark-white
          hidden
          lg:block
        "
        >see more here</a
      >
    </div>

    <div class="my-12 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-6">
      <div>
        <div
          class="
            aspect-w-5 aspect-h-3
            rounded-3xl
            lg:rounded-none
            overflow-hidden
            relative
          "
        >
          <img src="../assets/images/training-image-1.png" alt="training 1" />
          <div
            class="
              absolute
              bg-bookmark-dark-black bg-opacity-30
              block
              lg:hidden
            "
          >
            <p
              class="
                absolute
                bottom-2
                uppercase
                container
                text-lg
                font-semibold
              "
            >
              running
            </p>
          </div>
        </div>

        <div class="my-4 hidden lg:block">
          <h3 class="text-base font-semibold uppercase">running</h3>
          <p
            class="
              line-clamp-2
              my-2
              text-xs text-bookmark-white text-opacity-40
            "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            mollitia facilis vero. Accusamus, rem, ratione necessitatibus
            eveniet aspernatur laboriosam, vitae placeat dolorem ipsum nulla
            officiis dolorum magnam amet! Asperiores, neque?
          </p>

          <button class="btn btn-sm mt-4">see more</button>
        </div>
      </div>
      <div>
        <div
          class="
            aspect-w-5 aspect-h-3
            rounded-3xl
            lg:rounded-none
            overflow-hidden
            relative
          "
        >
          <img src="../assets/images/training-image-2.png" alt="training 2" />
          <div
            class="
              absolute
              bg-bookmark-dark-black bg-opacity-30
              block
              lg:hidden
            "
          >
            <p
              class="
                absolute
                bottom-2
                uppercase
                container
                text-lg
                font-semibold
              "
            >
              lifting
            </p>
          </div>
        </div>

        <div class="my-4 hidden lg:block">
          <h3 class="text-base font-semibold uppercase">lifting</h3>
          <p
            class="
              line-clamp-2
              my-2
              text-xs text-bookmark-white text-opacity-40
            "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            mollitia facilis vero. Accusamus, rem, ratione necessitatibus
            eveniet aspernatur laboriosam, vitae placeat dolorem ipsum nulla
            officiis dolorum magnam amet! Asperiores, neque?
          </p>

          <button class="btn btn-sm mt-4">see more</button>
        </div>
      </div>

      <div>
        <div
          class="
            aspect-w-5 aspect-h-3
            rounded-3xl
            lg:rounded-none
            overflow-hidden
            relative
          "
        >
          <img src="../assets/images/training-image-3.png" alt="training 3" />
          <div
            class="
              absolute
              bg-bookmark-dark-black bg-opacity-30
              block
              lg:hidden
            "
          >
            <p
              class="
                absolute
                bottom-2
                uppercase
                container
                text-lg
                font-semibold
              "
            >
              yoga
            </p>
          </div>
        </div>

        <div class="my-4 hidden lg:block">
          <h3 class="text-base font-semibold uppercase">yoga</h3>
          <p
            class="
              line-clamp-2
              my-2
              text-xs text-bookmark-white text-opacity-40
            "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            mollitia facilis vero. Accusamus, rem, ratione necessitatibus
            eveniet aspernatur laboriosam, vitae placeat dolorem ipsum nulla
            officiis dolorum magnam amet! Asperiores, neque?
          </p>

          <button class="btn btn-sm mt-4">see more</button>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <button class="btn btn-sm lg:hidden">see more</button>
    </div>
  </section>
</template>