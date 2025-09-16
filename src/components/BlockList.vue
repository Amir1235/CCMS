<template>
    <div>
      <h3>All Blocks</h3>
      <ul>
        <li v-for="b in store.blocks" :key="b.id">
          <select v-model="b.type">
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="warning">Warning</option>
          </select>
          <textarea v-model="b.content"></textarea>
          <button @click="editBlock(b)">Save Edit</button>
          <button @click="removeBlock(b.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useArticleStore } from '../store/ccms'
  import type { Block } from '../types/ccms'
  
  const store = useArticleStore()
  
  function editBlock(block: Block) {
    store.editBlock(block)
  }
  
  function removeBlock(id: string) {
    store.removeBlock(id)
  }
  </script>
  