<template>
    <ArticleEditor :articleId="$route.params.id" />
  </template>
  
  <script setup lang="ts">
  import ArticleEditor from '../components/ArticleEditor.vue'
  </script>