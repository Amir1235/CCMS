import {ref} from 'vue'
import { defineStore } from 'pinia'
import type { Article, Block } from '../types/ccms'

export const useArticleStore = defineStore('ccms',()=>{
     const articles = ref<Article[]>([])
     const blocks = ref<Block[]>([])


     function addBlock(block: Block){
        blocks.value.push(block)

     }

     function editBlock(updated: Block){
        const index = blocks.value.findIndex(b => b.id === updated.id)
        if(index !== -1)
            blocks.value[index] = updated

     }
     function removeBlock(id: string) {
        blocks.value = blocks.value.filter(b => b.id !== id)
    }
    

     


     function addArticle(article: Article){

        articles.value.push(article)
     }

     function removeArticle(id: string){
        articles.value = articles.value.filter(a => a.id !== id)
     }

     function editArticle(updated: Article){
        const index = articles.value.findIndex(a=> a.id === updated.id)
        if(index !== -1){
            articles.value[index] =updated
        }

     }
     return { articles,blocks, addArticle, removeArticle, editArticle, addBlock, editBlock, removeBlock }


})

