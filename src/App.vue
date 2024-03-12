<template>
  <div
    class="flex flex-col min-h-screen font-Roboto bg-gray-800"
  >
    <SiteNavigation />
    <RouterView class="flex-1" v-slot="{ Component }">
      <!-- <router-link
            to="/login"
            class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-red-200
            hover:text-white"
            >Login</router-link> -->
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style >
.page-enter-active , .page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from , .page-leave-to {
  opacity: 0;
}
</style>