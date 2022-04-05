<template>
    <div class="wrapper">

        <div class="products">

            <div class="product" v-for="book in books" :key="book.id">
                
                <div class="info">
                    <h1>{{book.title}}</h1>
                    <p>{{book.author}}</p>
                </div>

                <div class="image">
                    <img :src="'/images/'+book.image">
                </div>

                <div class="price">
                    <h2>{{book.price}}</h2>
                    <button class="auto" v-on:click="addToCart(book)">Add to Cart</button>
                </div>

            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'BookList',
    props: {
        books: Array
    },

    async created() {
        try {
            let response = await axios.get('/api/users');
            this.$root.$data.user = response.data.user;

        } catch (error) {
            this.$root.$data.user = null;
        }
    },

    computed: {
        user() {
                return this.$root.$data.user;
        },
    },

    methods: {
        async addToCart (book) {
            try {
                await axios.post("/api/cart", {
                    user: this.user,
                    book: book
                });

                this.book = "";
                return true;

            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .products {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .product {
        margin: 10px;
        margin-top: 50px;
        width: 200px;
    }

    .product img {
        border: 2px solid #333;
        height: 300px;
        object-fit: cover;
    }

    .product .image {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .info {
        /* background: #F2921D; */
        color: #000;
        padding: 10px 30px;
        height: 70px;
    }

    .info h1 {
        font-size: 16px;
    }

    .info h2 {
        font-size: 14px;
    }

    .info p {
        margin: 0px;
        font-size: 10px;
    }

    .price {
        display: flex;
        color: #000;
    }

    button {
        height: 50px;
        background: #000;
        color: white;
        border: none;
    }

    .auto {
        margin-left: auto;
    }
</style>