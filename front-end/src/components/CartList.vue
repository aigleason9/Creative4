<template>
    <div v-if="cartIsEmpty" class="empty">
        <h1>Your cart is empty</h1>
        <p> Please browse for books to enjoy.</p>
    </div>

    <div v-else>
        <h1 class="total">Cart subtotal: ${{subtotal}}</h1>

        <div class="wrapper">


            <div class="cart">

                <div class="cartItem" v-for="book in cart" :key="book.id">

                    <div class="info">
                        <h1>{{book.title}}</h1>
                        <p>{{book.author}}</p>
                    </div>

                    <div class = "cartInnerItem">

                        <div class="image">
                            <img :src="'/images/'+book.image">
                        </div>

                        <div class="price">
                            <h2>{{book.price}}</h2>
                            <button class="auto" v-on:click="removeFromCart(book)">Remove</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>

</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: Array
  },

  computed: {
      cartIsEmpty() {
          if (this.$root.$data.cart.length === 0) {
              return true;
          }
          else {
              return false;
          }
      },

      subtotal() {
          let sum = 0
          let theCart = this.$root.$data.cart;

          for (let i = 0; i < theCart.length; i++) {
            let book = theCart[i];

            let price = parseFloat(book.price.slice(1));
            sum += price;
          }

          return sum.toFixed(2);
      }
    },

  methods: {
      removeFromCart (book) {
          this.$root.$data.cart = this.$root.$data.cart.filter(function(value) {
              return value != book
          })
          console.log(this.$root.$data.cart)
      }
  },
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .cartItem {
        margin: 10px;
        margin-top: 50px;
        width: 300px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        background: #DE6E4B;
    }

    .cartInnerItem {
        display: flex;
    }

    .cart img {
        border: 2px solid #333;
        height: 300px;
        object-fit: cover;
    }

    .cartItem .image {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .info {
        text-align: center;
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
        flex-direction: column;
        justify-content: center;
        float: right;
        padding: 5px;
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

    .empty {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .total {
        text-align: center;
    }
</style>