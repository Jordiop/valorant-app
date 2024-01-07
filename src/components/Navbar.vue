<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-red-700">
        <div class="container flex flex-wrap items-center justify-between px-4 mx-auto">
            <div class="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
                <a class="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap">
                    VALORANT
                </a>
                <button
                    class="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                    type="button" @click="toggleNavbar()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>
            <div :class="{ 'hidden': !showMenu, 'flex': showMenu }" class="items-center lg:flex lg:flex-grow">
                <ul class="flex flex-col ml-auto list-none lg:flex-row">
                    <li class="nav-item">
                        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75">
                            <i class="text-lg text-white opacity-75 fab fa-facebook-square leading-lg" />
                            <RouterLink to="/">Home</RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75">
                            <i class="text-lg text-white opacity-75 fab fa-twitter leading-lg" />
                            <RouterLink to="/weapons">Weapons</RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75">
                            <i class="text-lg text-white opacity-75 fab fa-twitter leading-lg" />
                            <RouterLink to="/agents">Agents</RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75">
                            <i class="text-lg text-white opacity-75 fab fa-pinterest leading-lg" />
                            <RouterLink to="/about">About</RouterLink>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: "Navbar-nav",
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>
  