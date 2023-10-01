import {createStore} from "vuex"

export default createStore( {
    state:{
        cartProducts: []
    },
    mutations:{
        setProduct(state,val){
            var old = state.cartProducts.filter(el => el.id == val.id)

            // check if is there any same id product
            if (old.length != 0){
                // filter products that have same id
                state.cartProducts = state.cartProducts.filter(el=> el.id != val.id)

                val.count += old[0].count
                val.total += old[0].total

                state.cartProducts.push(val)



            }else{
                state.cartProducts.push(val)
            }
        },
        replaceProduct(state,val){
            state.cartProducts = state.cartProducts.filter(el=> el.id != val.id)
            state.cartProducts.push(val)

        },
        replaceProducts(state,val){
            state.cartProducts = val
        },
        
    },
    getters: {
        getProducts : state => {
            return state.cartProducts
        }
    }
})