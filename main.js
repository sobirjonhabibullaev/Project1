Vue.component('product', {
    props: {
        premium: {
            type: Boolean
        }
    },

    template: `<div class="product">
            <div class="product-image">
                <img :src="image" />
            </div>

            <div class="product-info">

                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{'background-color': variant.variantColor}" @mouseover="updateProduct(index)">
                </div>

                <div>
                    <button v-on:click="addCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>

                    <div class="cart">
                        <p>Cart({{cart}})</p>
                    </div>
                </div>

            </div>
        </div>`,

    data() {

        return {
            brand: "Vue Mastery",
            product: 'Socks',
            selectedVariant: 0,
            cart: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [{
                variantId: 0,
                variantColor: "green",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            }, {
                variantId: 1,
                variantColor: "blue",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }]
        }
    },

    methods: {
        addCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(YorN) {
            this.premium = this.inStock
            if (this.premium) {
                return "free"
            } else {
                return 7.92
            }
        }
    }

})



var app = new Vue({
    el: '#app'
})
