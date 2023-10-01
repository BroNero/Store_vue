<template>
    <div class="product">
        <img :src="data.url" alt="">
        <h2>{{ data.title }}</h2>
        <p> {{ data.desc }}</p>
        <p><span>Price: </span>{{ data.price }}$</p>
        <button @click="openInner">See Product</button>
    </div>
</template>


<script>
export default {
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    methods:{
        openInner(){
            this.$router.push({path: "Inner", query: { plan: this.data.id }})
        } 
    }
}

</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: cursive;
}
.product{
    background: rgba(101, 139, 216, 0.375);
    width: 300px;
    margin:  0 auto;
    display: flex;
    flex-direction:column;
    border-radius: 50px;
    padding: 30px;
    
}
span{
    color: aliceblue;
    text-transform: uppercase;
    font-size: 13px;
}
p:has(span){
    color: rgb(130, 8, 196);
    font-weight: bolder;
}
h2{
    color: rgb(130, 8, 196);
    text-transform: capitalize;
}
h2 + p::first-letter{
    text-transform:uppercase ;
}
img{
    border-radius: 50%;
    cursor: pointer;
    filter: grayscale(1);
    transition: 0.4s;
}
img:hover{
    filter: grayscale(0);
}
.product:has(img:hover){
    background-color: rgba(101, 139, 216, 0.659);
}

button{
    border-radius: 5px;
    outline: none;
    width: 100px;
    padding: 5px 10px;
    border: none;
    margin: 0 auto;
    cursor: pointer;
    background-color: rgb(166, 6, 166);
    color: white;
}
</style>