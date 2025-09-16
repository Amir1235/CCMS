<template>
  <div>
    <h3>Articles</h3>
    <ul>
      <li v-for="a in store.articles" :key="a.id">
        <h4>{{ a.title }}</h4>
        <div v-for="bid in a.blockIds" :key="bid">
          {{ store.blocks.find(b => b.id === bid)?.content }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '../store/ccms'

const store = useArticleStore()
</script>
