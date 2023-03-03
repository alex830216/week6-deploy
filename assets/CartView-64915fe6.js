import{_ as f,o as d,c as n,e as t,F as i,f as _,g,t as l,d as m,h as v,v as C}from"./index-3fb14ba9.js";const{VITE_URL:r,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"alex-test",BASE_URL:"/week6-deploy/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{products:[],productId:"",cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts(){this.$http.get(`${r}/v2/api/${c}/cart`).then(e=>{this.cart=e.data.data})},updateCart(e){const h={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${r}/v2/api/${c}/cart/${e.id}`,{data:h}).then(u=>{this.cart=u.data.data,this.getCarts(),this.loadingItem=""})},deleteCart(e){this.loadingItem=e.id,this.$http.delete(`${r}/v2/api/${c}/cart/${e.id}`).then(()=>{this.getCarts(),this.loadingItem=""})},deleteCarts(){this.$http.delete(`${r}/v2/api/${c}/carts`).then(()=>{this.getCarts()})},createOrder(){const e=this.form;this.$http.post(`${r}/v2/api/${c}/order`,{data:e}).then(()=>{this.$refs.form.resetForm(),this.form.message="",this.getCarts()})}},mounted(){this.getCarts()}},$=t("div",null,"這是購物車頁面",-1),b={class:"table align-middle"},y=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),I=["disabled","onClick"],V={key:0,class:"fas fa-spinner fa-pulse"},k=t("div",{class:"text-success"}," 已套用優惠券 ",-1),E={class:"input-group input-group-sm"},T={class:"input-group mb-3"},D=["onUpdate:modelValue","disabled","onChange"],U=["value"],q={class:"text-end"},w=t("td",{colspan:"3",class:"text-end"},"總計",-1),B={class:"text-end"},L=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),R={class:"text-end text-success"};function A(e,h,u,F,a,p){return d(),n(i,null,[$,t("table",b,[y,t("tbody",null,[a.cart.carts?(d(!0),n(i,{key:0},_(a.cart.carts,s=>(d(),n("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:s.id===a.loadingItem,onClick:o=>p.deleteCart(s)},[s.id===a.loadingItem?(d(),n("i",V)):g("",!0),m(" x ")],8,I)]),t("td",null,[m(l(s.product.title)+" ",1),k]),t("td",null,[t("div",E,[t("div",T,[v(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":o=>s.qty=o,disabled:s.id===a.loadingItem,onChange:o=>p.updateCart(s)},[(d(),n(i,null,_(20,o=>t("option",{value:o,key:`${o}165146`},l(o),9,U)),64))],40,D),[[C,s.qty]])])])]),t("td",q,l(s.product.price),1)]))),128)):g("",!0)]),t("tfoot",null,[t("tr",null,[w,t("td",B,l(a.cart.total),1)]),t("tr",null,[L,t("td",R,l(a.cart.final_total),1)])])])],64)}const O=f(x,[["render",A]]);export{O as default};
