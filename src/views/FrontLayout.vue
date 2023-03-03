<template>
  <div>這是前台頁面</div>
  <router-link to="/">前台</router-link> |
  <router-link to="/products">產品列表</router-link> |
  <router-link to="/cart">購物車列表</router-link> |
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/login">後台</router-link> |
  <routerView></routerView>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
  components: {
    RouterView,
    RouterLink
  }
}
</script>
