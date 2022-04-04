<template>
    <div>
        
        <CartList :cart="cart" />

    </div>

</template>

<script>
    import CartList from "../components/CartList.vue"

    export default {
        name: 'cart-cart',

        components: {
            CartList
        },

        computed: {
            cart() {
                return this.$root.$data.cart;
            }
        },
    }
</script>

<style scoped>

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #DE6E4B;
    }
</style>