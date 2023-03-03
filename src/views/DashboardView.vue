<template>
  <div>這是後台頁面</div>
  <router-link to="/admin">後台</router-link> |
  <router-link to="/admin/orders">訂單列表</router-link> |
  <router-link to="/admin/products">產品列表</router-link> |
  <router-link to="/">回前台</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <routerView></routerView>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'

const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
    }
  },
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    logout () {
      document.cookie = 'hexToken=""; expires=""'
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')

      this.$http.defaults.headers.common.Authorization = token
      this.$http
        .post(`${VITE_URL}v2/api/user/check`)
        .then(() => {})
        .catch((err) => {
          console.log(err)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
