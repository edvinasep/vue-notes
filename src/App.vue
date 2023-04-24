<template>
  <nav-bar></nav-bar>
  <div class="container is-max-desktop px-2 py-4">
    <router-view></router-view>
  </div>
</template>

<script setup>
  import NavBar from '@/components/layout/NavBar.vue'
</script>

<style>
  @import 'bulma\css\bulma.min.css'
</style>
