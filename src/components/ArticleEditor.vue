<template>

<input type="text" v-model="title" placeholder="Titel">
<button @click="saveArticle">Save</button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Article } from '../types/ccms'
import { useArticleStore } from '../store/ccms'

const store = useArticleStore()

const title = ref("")



function saveArticle(){
    const newArticle: Article ={
        id: crypto.randomUUID(),
        title: title.value,
        blockIds: [],
        createdAt: new Date()
        
    }
    store.addArticle(newArticle)
    title.value =""
}
</script>