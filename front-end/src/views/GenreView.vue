<template>
    <div v-if="user">
        <div class="pure-menu pure-menu-horizontal">
            <h3 class="suggested">{{genreTitle}} books for you</h3>
        </div>

        <BookList :books="books"/>
        

    </div>
    <LoginRegister v-else/>
</template>

<script>
    import axios from 'axios';
    import LoginRegister from '../components/LoginRegister.vue'
    import BookList from "../components/BookList.vue"

    export default {
        name: 'genre-genre',

        components: {
            BookList,
            LoginRegister
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

            genre() {
                return this.user.genre
            },

            books() {
                return this.$root.$data.books.filter(book => book.genre.includes(this.genre));
            },
            genreTitle() {
                if (this.user.genre == "historical") {
                    return "Historical Fiction"
                }
                else if (this.user.genre == "fantasy") {
                    return "Fantasy"
                }
                else {
                    return "Romance"
                }
            }
        },

        methods: {
            select(genre) {
                this.genre = genre;
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #DE6E4B;
        padding-bottom: 80px;
    }

    .suggested {
        color:black
    }
</style>