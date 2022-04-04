<template>
    <div>
        <div class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a @click="select('historical')" href="#" class="pure-menu-link">Historical Fiction</a></li>
                <li class="pure-menu-item"><a @click="select('fantasy')" href="#" class="pure-menu-link">Fantasy</a></li>
                <li class="pure-menu-item"><a @click="select('romance')" href="#" class="pure-menu-link">Romance</a></li>
            </ul>
        </div>

        <BookList :books="books" />

    </div>
</template>

<script>
    import BookList from "../components/BookList.vue"

    export default {
        name: 'genre-genre',

        components: {
            BookList
        },

        data() {
            return {
                genre: '',
            }
        },

        computed: {
            books() {
                return this.$root.$data.books.filter(book => book.genre.includes(this.genre));
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
</style>