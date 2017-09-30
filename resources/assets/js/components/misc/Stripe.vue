<template>
    <div>
        <label>{{ label }}</label>
        <card class="stripe-card"
              :class="{ complete }"
              :stripe="stripe"
              @change="complete = $event.complete"
        />
        <button class="pay-with-stripe btn btn-color pull-right" @click="pay" :disabled="paying || !complete">{{ buttonText }} <i v-show="paying" class="fa fa-refresh fa-spin"></i></button>
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

        props: ['paying', 'label', 'buttonText'],

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