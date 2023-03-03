<template>
  <div>這是單一產品頁面</div>
  <h2>{{ product.title }}</h2>
  <img :src="product.imageUrl" width="200" alt="">
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
