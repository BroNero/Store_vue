<template>

    <div class="product">
        <img :src="data.url" alt="">
        <h2>{{ data.title }}</h2>
        <p><span>Price: </span>{{ data.price }}$ <br> <span>total: {{ data.total }}$</span></p>

        <button @click="update_item('-')">-</button>
        <span>{{ this.data.count  }}</span>
        <button @click="update_item('+')">+</button>
    </div> 



</template>

<script>
import store from "../store/index"
export default {
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    methods:{
        update_item(mode){
            if (mode == "-"){
                this.data.count -= 1
                
            }else{
                this.data.count  += 1
               
            }
            this.data.total = this.data.price * this.data.count
            if(this.data.count < 1){
                this.data.count = 1
                this.data.total = this.data.price
            }
            this.$emit("update:data",this.data)
            localStorage.setItem("cartItems", JSON.stringify(store.state.cartProducts))
            

            
        }
    
    }

    }

</script>


<style scoped>


.product{
    width: fit-content;
    margin:50px auto;
}
.product img{
    
    display: block;
    margin: 0 auto;
}
.product span, .product button{
    font-size: 20px;
    padding: 10px;
    margin: 0 10px;
}

</style>