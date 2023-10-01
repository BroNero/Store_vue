<template>
    <div class="products">
        <cartItem @update:data="cart_update" v-for="(item, index) in  cartData.sort((a,b)=>e.title.localCompare(b.title))" :key="index" :data="item" />
    </div>

</template>

<script>
import store from "../store/index"
import cartItem from "../components/cartitem.vue"
export default{
    data(){
        return {
            cartData : []

        }
    },components:{
        cartItem
    },
    mounted(){
        this.cartData = store.getters.getProducts
    },
    methods:{
        cart_update (change){
            store.commit("replaceProduct",change)
            this.cartData = store.getters.getProducts
           
        }
    }


}
</script>