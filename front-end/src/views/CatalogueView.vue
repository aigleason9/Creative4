<template>
  <div>

    <div class="wrapper">

    </div>
    
    <CatalogueList :books="books" />

  </div>
</template>

<script>
    import CatalogueList from "../components/CatalogueList.vue"

    export default {
        name: 'catalogue-catalogue',

        components: {
            CatalogueList
        },

        computed: {
            books() {
                return this.$root.$data.books;
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
