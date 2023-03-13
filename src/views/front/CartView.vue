<template>
  <div>這是購物車頁面</div>
  <div class="container">
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
  </div>
  <div class="my-5 row justify-content-center">
    <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <v-field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="required|email"
          v-model="form.user.email"
        ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <v-field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <v-field
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|phone"
          v-model="form.user.tel"
        ></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <v-field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></v-field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
      </div>
      {{  }}
      <div class="text-end">
        <button
          type="submit"
          class="btn btn-danger"
          :disabled="cart.carts.length === 0">
          送出訂單
        </button>
      </div>
    </v-form>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {
        carts: []
      },
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
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
