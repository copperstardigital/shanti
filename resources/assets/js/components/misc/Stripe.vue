<template>
    <div>
        <label>Credit or Debit Card</label>
        <card class="stripe-card"
              :class="{ complete }"
              :stripe="stripe"
              @change="complete = $event.complete"
        />
        <button class="pay-with-stripe btn btn-color pull-right" @click="pay" :disabled="paying || !complete">Donate <i v-show="paying" class="fa fa-refresh fa-spin"></i></button>
    </div>
</template>

<script>
    import { Card, createToken } from 'vue-stripe-elements'

    export default {
        data () {
            return {
                stripe: process.env.MIX_STRIPE_KEY,
                complete: false,
                stripeOptions: {
                    // see https://stripe.com/docs/stripe.js#element-options for details
                }
            }
        },

        components: { Card },

        props: ['paying'],

        methods: {
            pay () {
                createToken().then(data => {
                    let stripeToken = data.token.id;
                    window.bus.$emit('stripe-token', stripeToken);
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