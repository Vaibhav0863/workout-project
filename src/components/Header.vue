<template>
  <header class="container">
    <nav class="py-4 flex items-center justify-between">
      <div id="logo" class="border border-bookmark-white px-3 py-5 z-50">
        <img
          class="w-auto h-8 md:h-14"
          src="../assets/images/logo.png"
          alt=""
        />
      </div>
      <div class="md:hidden">
        <img class="w-auto h-4" src="../assets/images/menu-icon.png" alt="" />
      </div>

      <ul class="hidden md:flex text-sm font-light uppercase gap-x-10">
        <li
          class="
            cursor-pointer
            border-b-4
            hover:border-b-4 hover:border-bookmark-dark-pink
            border-transparent
            py-1
          "
        >
          exercise
        </li>
        <li
          class="
            cursor-pointer
            border-b-4
            hover:border-b-4 hover:border-bookmark-dark-pink
            border-transparent
            py-1
          "
        >
          community
        </li>
        <li
          class="
            cursor-pointer
            border-b-4
            hover:border-b-4 hover:border-bookmark-dark-pink
            border-transparent
            py-1
          "
        >
          pricing
        </li>
        <li
          class="
            cursor-pointer
            border-b-4
            hover:border-b-4 hover:border-bookmark-dark-pink
            border-transparent
            py-1
          "
        >
          about us
        </li>
        <div>
          <button class="text-sm font-light uppercase bg-bookmark-pink px-2">
            login
          </button>
          <button
            class="
              text-sm
              font-light
              uppercase
              border border-bookmark-white
              px-1
            "
          >
            sign in
          </button>
        </div>
      </ul>
    </nav>
  </header>
</template>
