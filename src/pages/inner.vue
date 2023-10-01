<template>

    <div class="product">
        <img :src="data.url" alt="">
        <h2>{{ data.title }}</h2>
        <p> {{ data.desc }}</p>
        <p><span>Price: </span>{{ data.price * count }}$</p>
        <button @click="count--">-</button>
        <span>{{ count  }}</span>
        <button @click="count++">+</button>


        <button @click="addItem">Add to Cart</button>
    </div> 

    <div class="thumbs" >
        <img v-for="(url,index) in data.thumbnails" :key="index" :src="url" alt="">
    </div>


</template>

<script>
import prData from "../main.json"
import store from "../store/index"
export default {
    
    data(){
        return {
            data: prData,
            count:1
        }

    },
    methods:{
        addItem(){
            this.item = {
                id:this.data.id,
                title:this.data.title,
                desc:this.data.desc,
                url:this.data.url,
                price:this.data.price,
                total: this.data.price * this.count,
                count:this.count
            }
            store.commit("setProduct",this.item)
            console.log(store.state.cartProducts)
            localStorage.setItem("cartItems", JSON.stringify(store.state.cartProducts))
        }
    },
    mounted(){
        this.data = prData.filter( el => el.id === parseInt(this.$route.query.plan) )[0]
    },
    watch: {
        count : function(){
                if (this.count < 1){
                    this.count = 1
                }
            }
        }
    }

</script>


<style scoped>

.thumbs{
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin:50px auto;
    border: 2px solid #00ff00 ;
    padding: 10px ;
    gap:50px;

    flex: 1;
    overflow: auto;

    
}

.thumbs img{
    height: 300px;
}

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