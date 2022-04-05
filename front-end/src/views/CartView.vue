<template>
    <div v-if="user">

        <div class="info">

            <div class="current">
                <h3>First name: {{user.firstName}}</h3>
                <h3>Last name: {{user.lastName}}</h3>
                <h3>Preferred genre: {{genreTitle}}</h3>
                <button id="logout" @click="logout" class="pure-button pure-button-primary">Logout</button>
            </div>

            <div class="userUpdate">
                <div>
                    <p>Change your preferred genre here:</p>
                    <div class="buttons">

                        <div>
                            <input type="radio" id="romance" v-model="genre" value="romance">
                            <label for="romance">Romance</label>
                        </div>
                        <div>
                            <input type="radio" id="fantasy" v-model="genre" value="fantasy">
                            <label for="fantasy">Fantasy</label>
                        </div>
                        <div>
                            <input type="radio" id="historical" v-model="genre" value="historical">
                            <label for="historical">Historical fiction</label>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" class="pure-button pure-button-primary" @click.prevent="update">Update</button>
                </div>
            </div>
        </div>
        
        <CartList :cart="cart" />

    </div>
    <LoginRegister v-else/>

</template>

<script>
    import axios from 'axios';
    import LoginRegister from '../components/LoginRegister.vue'
    import CartList from "../components/CartList.vue"

    export default {
        name: 'cart-cart',

        components: {
            CartList,
            LoginRegister
        },

        data() {
            return {
                genre: '',
            }
        },

        async created() {
            this.getCart();
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
            cart() {
                return this.$root.$data.cart;
            },
            genreTitle() {
                if (this.user.genre == "historical") {
                    return "Historical Fiction"
                }
                else if (this.user.genre == "fantasy") {
                    return "Fantasy"
                }
                else if (this.user.genre == "romance") {
                    return "Romance"
                }
                else {
                    return "None"
                }
            }
        },

        methods: {
            async getCart() {

                try {
                    let response = await axios.get("/api/cart");
                    this.$root.$data.cart = response.data.books;

                    return true;
                    

                } catch (error) {
                    console.log(error);
                }
            },
            async logout() {

                try {
                    await axios.delete("/api/users");
                    this.$root.$data.user = null;

                } catch (error) {
                    this.$root.$data.user = null;
                }
            },
            async update() {

                try {
                    await axios.put("/api/users", {
                        username: this.$root.$data.user.username,
                        genre: this.genre,
                });

                let response = await axios.get('/api/users');
                this.$root.$data.user = response.data.user;
                return true;

                } catch (error) {
                // console.log(error);
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
        background-color: #DE6E4B;
    }

    .pure-button {
        background-color: #DE6E4B;
        color:black;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
    }

    .info {
        background: white;
        opacity: 0.95;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-size: 16px;
        text-align: center;
        border-radius: 30px;
    }

    .userUpdate {
        background: white;
        opacity: 0.95;
        float: right;
    }

    label {
        margin-left: 5px;
    }

    .current{
        text-align: left;
    }
</style>