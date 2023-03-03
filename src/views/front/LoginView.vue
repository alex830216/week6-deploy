<template>
  <div>
    這是登入頁面
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="col-8">
        <!-- 表單送出:v-on:submit.prevent -->
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" placeholder="name@example.com" required autofocus v-model="user.username">
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password" required v-model="user.password">
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 2023~∞ - 六角學院
    </p>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // 登入api
      const url = `${VITE_URL}/v2/admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          const { token, expired } = res.data
          // 將 token 及 expired 存入 cookie ，供其他頁面可以使用這個 token
          // expired 是 unix timestamp，需要使用 new Date 將 expired 做轉型
          // hexToken 名字可自取，但需跟 products.js mounted 的 document.cookie.replace 內的 token 取名相同
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          // 轉址到後台產品頁面
          this.$router.push('/admin/products')
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  }
}
</script>
