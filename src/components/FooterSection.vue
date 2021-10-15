<template>
  <footer
    class="
      border border-l-0 border-r-0 border-bookmark-white
      container
      w-11/12
      lg:w-full
      px-0
    "
  >
    <div
      class="
        grid grid-cols-1
        text-center
        lg:text-left
        lg:grid-cols-12
        gap-y-4
        pt-8
      "
    >
      <div class="col-span-4">
        <div class="border lg:border-2 inline-block p-3 lg:p-6">
          <img
            class="w-full h-8 lg:h-14"
            src="../assets/images/logo.png"
            alt=""
          />
        </div>

        <p class="text-xs mx-auto text-bookmark-white my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          harum nulla tenetur est mollitia vitae alias.
        </p>

        <div
          class="flex justify-center lg:justify-start items-center my-3 gap-x-2"
        >
          <div>
            <img src="../assets/images/facebook.png" alt="" />
          </div>

          <div>
            <img src="../assets/images/instagram.png" alt="" />
          </div>

          <div>
            <img src="../assets/images/twitter.png" alt="" />
          </div>

          <div>
            <img src="../assets/images/whatsapp.png" alt="" />
          </div>
        </div>
      </div>
      <div
        class="
          col-span-4
          row-start-3
          lg:row-start-auto
          lg:col-start-auto
          w-10/12
          lg:w-full
          mx-auto
          mb-8
        "
      >
        <div class="grid grid-cols-2 gap-x-2.5 text-left">
          <div>
            <h1 class="text-lg font-semibold text-bookmark-white uppercase">
              info
            </h1>

            <ul class="mt-4 flex flex-col gap-y-4 items-start">
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                About
              </li>
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                Careers
              </li>
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                Press
              </li>
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                Product Updates
              </li>
            </ul>
          </div>
          <div>
            <h1 class="text-lg font-semibold text-bookmark-white uppercase">
              get in touch
            </h1>

            <ul class="mt-4 flex flex-col gap-y-4 items-start">
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                About Us
              </li>
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                Support
              </li>
              <li class="hover:text-bookmark-pink cursor-pointer text-xs">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="
          col-span-4
          row-start-2
          lg:row-start-auto
          lg:col-start-auto
          px-0
          lg:px-4
        "
      >
        <h1 class="uppercase text-lg font-semibold text-bookmark-white">
          subscribe to our newsletter
        </h1>

        <div class="my-6">
          <input
            type="text"
            class="
              w-10/12
              mx-auto
              px-3
              py-1.5
              rounded-md
              text-bookmark-black text-sm text-center
              outline-none
              focus:ring-2
              ring-bookmark-pink ring-offset-2 ring-offset-current
            "
            placeholder="Type Your Email Here"
          />
          <button class="btn btn-sm px-4 py-2.5 text-xs rounded-md mt-3">
            subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
  <div
    class="
      container
      text-center
      lg:text-left
      py-8
      px-0
      flex flex-wrap
      gap-y-2
      justify-center
      lg:justify-between
    "
  >
    <p class="text-bookmark-white text-xs font-light">
      Copyright &#169; 2021 Enisson Lemos | All rights reserved
    </p>
    <p class="text-bookmark-white text-xs font-light">Terms & Conditions</p>
  </div>
</template>