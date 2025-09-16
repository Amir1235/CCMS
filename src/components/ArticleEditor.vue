<template>
<div>


<input type="text" v-model="title" placeholder="Titel">
<h4>Select Blocks:</h4>
    <div v-for="block in store.blocks" :key="block.id">
      <label>
        <input 
          type="checkbox" 
          :value="block.id" 
          v-model="selectedBlocks" 
        />
       {{ block.content }}
      </label>
    </div>

<button @click="saveArticle">Save</button>

</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Article } from '../types/ccms'
import { useArticleStore } from '../store/ccms'

const store = useArticleStore()

const title = ref("")
const selectedBlocks = ref<string[]>([])



function saveArticle(){
    const newArticle: Article ={
        id: crypto.randomUUID(),
        title: title.value,
        blockIds: [...selectedBlocks.value],
        createdAt: new Date()
        
    }
    store.addArticle(newArticle)
    title.value =""
}
</script>