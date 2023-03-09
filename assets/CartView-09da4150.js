import{_ as k,r as f,o as n,c as r,e,F as b,f as g,g as V,t as i,b as d,w as I,d as x,h as y,v as E,n as h,i as U}from"./index-f2e23404.js";const{VITE_URL:c,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"alex-test",BASE_URL:"/week6-deploy/",MODE:"production",DEV:!1,PROD:!0},q={data(){return{products:[],productId:"",cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts(){this.$http.get(`${c}/v2/api/${m}/cart`).then(a=>{this.cart=a.data.data})},updateCart(a){const o={product_id:a.product.id,qty:a.qty};this.loadingItem=a.id,this.$http.put(`${c}/v2/api/${m}/cart/${a.id}`,{data:o}).then(v=>{this.cart=v.data.data,this.getCarts(),this.loadingItem=""})},deleteCart(a){this.loadingItem=a.id,this.$http.delete(`${c}/v2/api/${m}/cart/${a.id}`).then(()=>{this.getCarts(),this.loadingItem=""})},deleteCarts(){this.$http.delete(`${c}/v2/api/${m}/carts`).then(()=>{this.getCarts()})},createOrder(){const a=this.form;this.$http.post(`${c}/v2/api/${m}/order`,{data:a}).then(()=>{this.$refs.form.resetForm(),this.form.message="",this.getCarts()}).catch(o=>{alert(o.response.data.message)})}},mounted(){this.getCarts()}},w=e("div",null,"這是購物車頁面",-1),T={class:"container"},D={class:"table align-middle"},S=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價")])],-1),$=["disabled","onClick"],B={key:0,class:"fas fa-spinner fa-pulse"},L=e("div",{class:"text-success"}," 已套用優惠券 ",-1),N={class:"input-group input-group-sm"},O={class:"input-group mb-3"},R=["onUpdate:modelValue","disabled","onChange"],A=["value"],F={class:"text-end"},M=e("td",{colspan:"3",class:"text-end"},"總計",-1),P={class:"text-end"},H=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),j={class:"text-end text-success"},z={class:"my-5 row justify-content-center"},G={class:"mb-3"},J=e("label",{for:"email",class:"form-label"},"Email",-1),K={class:"mb-3"},Q=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),W={class:"mb-3"},X=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),Y={class:"mb-3"},Z=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ee={class:"mb-3"},te=e("label",{for:"message",class:"form-label"},"留言",-1),se=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function le(a,o,v,oe,t,p){const u=f("v-field"),_=f("error-message"),C=f("v-form");return n(),r(b,null,[w,e("div",T,[e("table",D,[S,e("tbody",null,[t.cart.carts?(n(!0),r(b,{key:0},g(t.cart.carts,l=>(n(),r("tr",{key:l.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:l.id===t.loadingItem,onClick:s=>p.deleteCart(l)},[l.id===t.loadingItem?(n(),r("i",B)):V("",!0),x(" x ")],8,$)]),e("td",null,[x(i(l.product.title)+" ",1),L]),e("td",null,[e("div",N,[e("div",O,[y(e("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":s=>l.qty=s,disabled:l.id===t.loadingItem,onChange:s=>p.updateCart(l)},[(n(),r(b,null,g(20,s=>e("option",{value:s,key:`${s}165146`},i(s),9,A)),64))],40,R),[[E,l.qty]])])])]),e("td",F,i(l.product.price),1)]))),128)):V("",!0)]),e("tfoot",null,[e("tr",null,[M,e("td",P,i(t.cart.total),1)]),e("tr",null,[H,e("td",j,i(t.cart.final_total),1)])])])]),e("div",z,[d(C,{ref:"form",class:"col-md-6",onSubmit:p.createOrder},{default:I(({errors:l})=>[e("div",G,[J,d(u,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:t.form.user.email,"onUpdate:modelValue":o[0]||(o[0]=s=>t.form.user.email=s)},null,8,["class","modelValue"]),d(_,{name:"email",class:"invalid-feedback"})]),e("div",K,[Q,d(u,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":o[1]||(o[1]=s=>t.form.user.name=s)},null,8,["class","modelValue"]),d(_,{name:"姓名",class:"invalid-feedback"})]),e("div",W,[X,d(u,{id:"tel",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":o[2]||(o[2]=s=>t.form.user.tel=s)},null,8,["class","modelValue"]),d(_,{name:"電話",class:"invalid-feedback"})]),e("div",Y,[Z,d(u,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":o[3]||(o[3]=s=>t.form.user.address=s)},null,8,["class","modelValue"]),d(_,{name:"地址",class:"invalid-feedback"})]),e("div",ee,[te,y(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":o[4]||(o[4]=s=>t.form.message=s)},null,512),[[U,t.form.message]])]),se]),_:1},8,["onSubmit"])])],64)}const de=k(q,[["render",le]]);export{de as default};