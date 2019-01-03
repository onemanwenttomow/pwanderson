// client/components/navbar.vue
<template>
    <nav id="nav" class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink mr-6">
            <nuxt-link to="/">
                <span class="home-nav font-semibold text-xl tracking-tight">Home</span>
            </nuxt-link>
        </div>

    <div class="flex items-center w-auto">
      <div class="text-sm flex-grow">
        <nuxt-link to="/about" class="block inline-block mt-0 mr-4 nav-links">
          About
        </nuxt-link>
        <a href="#responsive-header" class="block inline-block mt-0 mr-4 nav-links">
          Examples
        </a>
        <a href="#responsive-header" class="block inline-block mt-0 nav-links">
          Blog
        </a>
      </div>

    </div>
  </nav>

  </nav>
</template>
