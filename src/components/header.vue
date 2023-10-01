<template>
    <div class="nav" id="nav">
        <div>
            <h1>Jamal's Pizza</h1>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/cart">Cart</router-link>
        </div>
        <p>item count: {{ getProducts.length }}</p>
        <p>total cost: {{ getProducts.reduce((money, el) => money + el.total, 0) }}</p>
    </div>

    <router-view />
</template>


<script>
import store from "../store/index"
export default {
    computed: {
        getProducts() {
            return store.getters.getProducts
        }
    }
}
</script>



<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.nav {
    width: 100%;
    height: fit-content;
    margin: 0 auto;
}

.nav div {
    margin: 0 auto;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 100px;

}



.link {
    margin: 0 auto;
    font-size: 25px;
    text-decoration: none;

}

p {
    font-size: 20px;
}
</style>