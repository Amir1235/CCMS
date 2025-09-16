<template>
    <div>
    <h3>Create Block</h3>
    <select v-model="type">
      <option value="text">Text</option>
      <option value="image">Image</option>
      <option value="warning">Warning</option>
    </select>
    <textarea v-model="content" placeholder="Block content"></textarea>
    <button @click="saveBlock">Save Block</button>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Block } from '../types/ccms';
import { useArticleStore } from '../store/ccms';

const store = useArticleStore()
const content = ref("")
const type = ref<'text' | 'image' | 'warning'>('text')

function saveBlock(){
    if(!content.value.trim()) return

    const newBlock: Block ={
        id: crypto.randomUUID(),
        type: type.value,
        content: content.value,
       
    }
    store.addBlock(newBlock)
    content.value = ""
}

</script>