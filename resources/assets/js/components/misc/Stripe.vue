<template>
    <div>
        <div ref="cardElement">
            <label>{{ label }}</label>
            <!--<card class="stripe-card"-->
                  <!--:class="{ complete }"-->
                  <!--:stripe="stripe"-->
                  <!--@change="complete = $event.complete"-->
            <!--/>-->
        </div>
        <!-- Used to display Element errors -->
        <div id="card-errors" role="alert" class="text-danger"></div>
        <button class="pay-with-stripe btn btn-color pull-right" @click="pay" :disabled="paying">{{ buttonText }} <i v-show="paying" class="fa fa-refresh fa-spin"></i></button>
    </div>
</template>

<script>
    import { Card, createToken } from 'vue-stripe-elements'

    export default {
        data () {
            return {
                //stripe: process.env.MIX_STRIPE_KEY,
                complete: false,
                stripeOptions: {
                    // see https://stripe.com/docs/stripe.js#element-options for details
                },
                stripe: {},
                card: {},
            }
        },

        mounted() {
            const stripe = Stripe(process.env.MIX_STRIPE_KEY);
            this.stripe = stripe;
            const elements = stripe.elements();
            const card = elements.create('card');
            this.card = card;
            card.mount(this.$refs.cardElement);
        },

        components: { Card },

        props: ['paying', 'label', 'buttonText'],

        methods: {
            pay () {
                let self = this;

                this.stripe.createToken(this.card).then(function(result) {
                    console.log(result);
                    if (result.error) {
                        // Inform the user if there was an error
                        let errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    } else {
                        let stripeToken = result.token.id;
                        window.bus.$emit('stripe-token', stripeToken);

                        const elements = self.stripe.elements();
                        const card = elements.create('card');
                        card.mount(self.$refs.cardElement);
                    }
                });
            }
        }
    }
</script>

<style>
    .stripe-card.complete {
        border-color: green;
    }
</style>