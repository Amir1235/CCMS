import { createRouter, createWebHistory } from 'vue-router'
import CreateArticlePage from '../views/CreateArticlePage.vue'
import ArticleViewPage from '../views/ArticleViewPage.vue'
import BlockManagerPage from '../views/BlockManagerPage.vue'
import ArticleManagerPage from '../views/ArticleManagerPage.vue'
import EditArticlePage from '../views/EditArticlePage.vue'

const routes = [
  { path: '/', redirect: '/articles' },
  { path: '/articles', component: ArticleManagerPage },
  { path: '/articles/new', component: CreateArticlePage },
  { path: '/articles/:id', component: ArticleViewPage },
  { path: '/articles/:id/edit', component: EditArticlePage },
  { path: '/blocks', component: BlockManagerPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})