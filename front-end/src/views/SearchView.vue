<template>
  <div v-if="user">

    <div class="wrapper">

        <div class="search-wrapper">

            <div class="search">
                <form class="pure-form">
                    <i class="fas fa-search"></i><input v-model="searchTitle" placeholder="Search by title"/>
                </form>
            </div>
            <div class="search">
                <form class="pure-form">
                    <i class="fas fa-search"></i><input v-model="searchAuthor" placeholder="Search by author"/>
                </form>
            </div>
        </div>

    </div>
    
    <BookList :books="books" />

  </div>
  <LoginRegister v-else/>

</template>

<script>
    import axios from 'axios';
    import LoginRegister from '../components/LoginRegister.vue'
    import BookList from "../components/BookList.vue"

    export default {
        name: 'search-search',
        components: {
            BookList,
            LoginRegister
        },

        data() {
            return {
                searchTitle: '',
                searchAuthor: '',
            }
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
            books() {
                return this.$root.$data.books.filter(this.titleAndAuthor);
            }
        },

        methods: {
            titleAndAuthor(book) {
                
                let theTitle = false;
                let theAuthor = false;
            
                if (book.title.toLowerCase().search(this.searchTitle.toLowerCase()) >= 0) {
                    theTitle = true;
                }
                if (book.author.toLowerCase().search(this.searchAuthor.toLowerCase()) >= 0) {
                    theAuthor = true;
                }

                if (theTitle & theAuthor) {
                    return true;
                }
                else {
                    return false;
                }
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

    .search-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
    }

    .search {
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 50%;
        background-color:#ccc;
        margin: 10px;
    }

    form {
        display: table;
        width: 100%;
    }

    i {
        display: table-cell;
        padding-left: 10px;
        width: 1px;
    }

    input {
        display: table-cell;
        font-size: 20px;
        border: none !important;
        box-shadow: none !important;
        width: 100%;
        height: 40px;
    }
</style>
