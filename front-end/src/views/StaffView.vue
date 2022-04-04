<template>
    <div class="whole">
        <h1>See our staff's favorite books from this month</h1>
        <div class="wrapper">

                <div class="picks">

                    <div class="book">
                        <div class="image">
                            <img src="/images/six_of_crows.jpeg">
                        </div>
                        <div class="info">
                            <h1>Six of Crows</h1>
                            <h3>Leigh Bardugo</h3>
                            <div class="review">
                                <p>Our staff were quickly enamoured by the intriguing Kaz Brekker and his crew of thieves. Follow this band on their epic heist filled with adrenaline and witty one-liners! Leigh Bardugo's exceptional world-building and character dynamics will keep you engaged page after page. You can't go wrong with the Six of Crows. Keep an eye out for its sequel, Crooked Kingdom, or other books in the Grishaverse which recently joined our stock.</p>
                            </div>
                        </div>
                    </div>

                    <div class="book">

                        <div class="image">
                            <img src="/images/the_deepest_blue.jpeg">
                        </div>

                        <div class="info">
                            <h1>The Deepest Blue</h1>
                            <h3>Sarah Beth Durst</h3>
                            <div class="review">
                                <p>The Deepest Blue became one of our favorites from the earliest pages. We couldn't resist the vibrant characters, their emotional journeys, and the well-established world around them. It was impossible not to be drawn into the stakes of the characters' decisions, especially when all the odds were against them. Sarah Beth Durst expands on her world of Renthia in this magnificent novel, which we hope you take the time to read!</p>
                            </div>
                        </div>

                    </div>

                    <div class="book">

                        <div class="image">
                            <img src="/images/race_the_sands.jpeg">
                        </div>

                        <div class="info">
                            <h1>Race the Sands</h1>
                            <h3>Sarah Beth Durst</h3>
                            <div class="review">
                                <p>Another gripping tale from Durst. The stakes are high and the returns are higher in this tale of monster racing. This book has action and suspense through every page. Trust us--you won't want to put it down for a second. The characters are beautifully real and it's impossible not to become quickly invested in their individual goals and stories!</p>
                            </div>
                        </div>

                    </div>

                    <div class="book">

                        <div class="image">
                            <img src="/images/goose_girl.jpeg">
                        </div>

                        <div class="info">
                            <h1>Goose Girl</h1>
                            <h3>Shannon Hale</h3>
                            <div class="review">
                                <p>A timeless favorite, Shannon Hale's tale of a princess turned goose tender is like coming home. With betrayals, reunions, a love story, magic, and complicated family relationships, The Goose Girl truly has something for everyone. Do yourself a favor and sink into the warm embrace of this tale!</p>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'staff-staff',
  }
</script>

<style scoped>

    .whole {
        padding-top: 20px;
        background-color: #DE6E4B;
        padding-bottom: 20px;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .picks {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .book {
        margin: 10px;
        margin-top: 50px;
        width: 70%;
        display: flex;
        flex-direction: row;
    }

    .book img {
        border: 2px solid #333;
        height: 300px;
        object-fit: cover;
        margin-right: 10px;
    }

    .book .image {
        display: flex;
        justify-content: center;
    }

    .info {
        color: #000;
        padding: 10px 30px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
    }

    .info h1 {
        font-size: 26px;
    }

    .info h3 {
        font-size: 18px;
    }

    .info p {
        margin: 0px;
        font-size: 16px;
    }

    .auto {
        margin-left: auto;
    }
</style>