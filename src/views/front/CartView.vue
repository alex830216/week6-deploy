<template>
  <div>這是購物車頁面</div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <!-- 刪除時不能重複刪除 -->
            <button type="button" class="btn btn-outline-danger btn-sm"
              :disabled="item.id === loadingItem"
              @click="deleteCart(item)">
              <i class="fas fa-spinner fa-pulse"
                v-if="item.id === loadingItem"></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success">
              已套用優惠券
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <!-- 更新時不能更改數量 -->
                <select name="" id="" class="form-control" v-model="item.qty"
                  :disabled="item.id === loadingItem"
                  @change="updateCart(item)">
                  <option :value="i" v-for="i in 20" :key="`${i}165146`">{{ i }}</option>
                </select>
              </div>
            </div>
          </td>
          <td class="text-end">
            {{ item.product.price }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: '', // 存 id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCarts () {
      // *可以做區塊或全畫面的讀取*
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`).then((res) => {
        this.cart = res.data.data
      })
    },
    updateCart (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.cart = res.data.data
          this.getCarts()
          this.loadingItem = ''
        })
    },
    deleteCart (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`).then(() => {
        this.getCarts()
        this.loadingItem = ''
      })
    },
    deleteCarts () {
      this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`).then(() => {
        this.getCarts()
      })
    },
    createOrder () {
      const data = this.form
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data }).then(() => {
        // 清除form資料，veevalidate提供的方法
        this.$refs.form.resetForm()
        this.form.message = ''
        this.getCarts()
      })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
