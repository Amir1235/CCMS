<template>
  <nav>
    <router-link to="/articles">Articles</router-link> |
    <router-link to="/articles/new">Create Article</router-link> |
    <router-link to="/blocks">Blocks</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
// No imports needed
</script>