// client/components/navbar.vue
<template>
    <nav id="nav" class="shadow flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink mr-6">
            <nuxt-link to="/">
                <span class="home-nav font-semibold text-xl tracking-tight">Home</span>
            </nuxt-link>
        </div>

        <div class="flex items-center w-auto">
            <div class="text-sm flex-grow">
                <a href="#stack" class="block md:hidden inline-block mt-0 mr-4 nav-links">
                    Stack
                </a>
                <nuxt-link to="/about" class="block inline-block mt-0 mr-4 nav-links">
                    About
                </nuxt-link>
                <nuxt-link to="/legalstuff" class="block inline-block mt-0 mr-4 nav-links">
                    Legal Stuff
                </nuxt-link>
            </div>
        </div>
  </nav>

</template>
