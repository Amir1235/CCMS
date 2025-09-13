<template>
<div>
    <h3>Articles</h3>
    <ul>
      <li v-for="a in store.articles" :key="a.id">
        {{ a.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '../store/ccms'

const store = useArticleStore()


</script>