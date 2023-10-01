
<template>
    <input v-model="searchWord" type="search" placeholder="search...">
    <p v-if="getData.length == 0">errror</p>
    <div class="products">
        <Product v-for="(item, index) in  getData" :key="index" :data="item" />
    </div>
</template>

<script>
import Product from "../components/product.vue"
import prData from "../main.json"
export default {
    components: {
        Product
    },
    data() {
        return {
            productsData: prData,
            searchWord: ""
        }
    },
    computed: {
        getData() {

            return this.productsData.filter(el => 
            el.title.toLocaleLowerCase()
            .includes(this.searchWord.toLocaleLowerCase()))
        }
    }

}
</script>


<style scoped>
.products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap:50px;
    margin-top: 50px;
}
input{
    width: 200px;
    height: 30px;
}

@media screen and (max-width:1000px) {
    .products {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width:600px) {
    .products {
        grid-template-columns: 1fr;
    }
}
</style>