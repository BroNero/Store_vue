<script >

// import store from './store/index';

import Header from "./components/header.vue"
import store from "./store/index"
export default {
  components:{
    Header
  },mounted(){
    if(localStorage.getItem("cartItems")){
       store.commit("replaceProducts", JSON.parse(localStorage.getItem("cartItems")))
    }
  }
}
</script>

<template> 
  <Header/>
  
</template>
