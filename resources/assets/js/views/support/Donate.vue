<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body" style="margin-bottom: 40px;"></div>

            <form action="/support/donate" id="payment-form" method="POST" @submit.prevent="pay">
                <div class="row">
                    <div class="col-sm-6">
                        <fieldset>
                            <legend>Donor Information</legend>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="first_name">First Name</label>
                                        <input type="text" class="form-control" id="first_name" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" class="form-control" id="last_name" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="email">Email Address</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone_number">Phone Number</label>
                                        <input type="text" class="form-control" id="phone_number" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="address">Address</label>
                                        <input type="email" class="form-control" id="address" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="city">City</label>
                                        <input type="text" class="form-control" id="city" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="state">State</label>
                                        <select name="state" class="form-control" id="state">
                                            <option value="">Select one...</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="zip_code">Zip Code</label>
                                        <input type="text" class="form-control" id="zip_code" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="email" class="form-control" id="password" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="password_confirmation">Password Confirmation</label>
                                        <input type="text" class="form-control" id="password_confirmation" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <label><input type="checkbox" name="newsletter" value="1" checked="checked"/> Opt into weekly newsletter?</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-sm-6">
                        <fieldset style="margin-bottom: 20px;">
                            <legend>Donation Information</legend>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="donation_id">Recurring Donation</label>
                                        <select name="donation_id" id="donation_id" class="form-control">
                                            <option value="">Select one...</option>
                                            <optgroup label="Business Donations">
                                                <option value="1">Gold ($500 per month)</option>
                                                <option value="2">Silver ($100 per month)</option>
                                                <option value="3">Bronze ($50 per month)</option>
                                            </optgroup>
                                            <optgroup label="Individual Donations">
                                                <option value="4">Gold ($30 per month)</option>
                                                <option value="5">Silver ($20 per month)</option>
                                                <option value="6">Bronze ($10 per month)</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="other_business">Recurring Business Donation</label>
                                        <input type="text" class="form-control" id="other_business" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="other_individual">Recurring Individual Donation</label>
                                            <input type="text" class="form-control" id="other_individual" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Credit Card Information</legend>
                            <!--<div class="row">

                                <div class="col-sm-12">
                                    <div class="alert alert-danger payment-errors" style="display:none; margin: 20px 0;"></div>

                                    <div class="form-group">
                                        <label for="card_number">Card Number</label>
                                        <input type="text" class="form-control" id="card_number" data-stripe="number" />
                                    </div>
                                </div>

                            </div>

                            <div class="row">

                                <div class="col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="cvc">CVC</label>
                                        <input type="text" class="form-control" id="cvc" data-stripe="cvc" />
                                    </div>
                                </div>

                                <div class="col-sm-6 col-xs-12">
                                   <div class="form-group">
                                       <label for="expiration">Expiration</label>
                                       <div class="row">
                                           <div class="col-sm-6">
                                               <select class="form-control" id="expiration" data-stripe="exp-month">
                                                   <option value="01">January</option>
                                                   <option value="02">February</option>
                                                   <option value="03">March</option>
                                                   <option value="04">April</option>
                                                   <option value="05">May</option>
                                                   <option value="06">June</option>
                                                   <option value="07">July</option>
                                                   <option value="08">August</option>
                                                   <option value="09">September</option>
                                                   <option value="10">October</option>
                                                   <option value="11">November</option>
                                                   <option value="12">December</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-6">
                                               <select class="form-control" data-stripe="exp-year">
                                                   <option value="2017">2017</option>
                                                   <option value="2018">2018</option>
                                                   <option value="2019">2019</option>
                                                   <option value="2020">2020</option>
                                                   <option value="2021">2021</option>
                                                   <option value="2022">2022</option>
                                                   <option value="2023">2023</option>
                                                   <option value="2024">2024</option>
                                                   <option value="2025">2025</option>
                                                   <option value="2026">2026</option>
                                                   <option value="2027">2027</option>
                                               </select>
                                           </div>
                                       </div>
                                   </div>

                                    <div class="form-group">
                                        <input type="submit" class="btn btn-color pull-right" value="Donate" />
                                    </div>

                                </div>
                            </div>-->

                            <!--<div class="form-row">
                                <label for="card-element">Credit or Debit Card </label>
                                <div id="card-element">
                                    <!-- a Stripe Element will be inserted here.
                                </div>-->

                                <!-- Used to display Element errors -->
                                <!--<div id="card-errors" role="alert"></div>
                            </div>

                            <button type="submit" class="btn btn-color pull-right">Donate</button>-->
                            <psg-stripe></psg-stripe>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </psg-page>
</template>

<script>
    import Stripe from '../../components/misc/Stripe';

    export default {
        data() {
            return {
                article: {}
            }
        },
        components: {
            'psg-stripe': Stripe
        },
        mounted() {
//            const stripe = Stripe(process.env.MIX_STRIPE_KEY);
//            const elements = stripe.elements();
//
//            const style = {
//                base: {
//                    color: '#32325d',
//                    lineHeight: '24px',
//                    fontFamily: '"Open Sans", sans-serif',
//                    fontSmoothing: 'antialiased',
//                    fontSize: '16px',
//                    '::placeholder': {
//                        color: '#aab7c4'
//                    }
//                },
//                invalid: {
//                    color: '#fa755a',
//                    iconColor: '#fa755a'
//                }
//            };
//
//            // Create an instance of the card Element
//            const card = this.card = elements.create('card', {style});
//
//            // Add an instance of the card Element into the `card-element` <div>
//            card.mount('#card-element');
        },
        created() {
            this.loading = true;

            http
                .get('/articles/8')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: article.en_body
                    };

                    if (this.$cookie.get('lang') === 'es') {
                        this.article = {
                            headline: article.es_headline,
                            subhead: article.es_subhead,
                            callout: article.es_callout,
                            body: article.es_body
                        };
                    }

                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                });
        },
        methods: {
            pay() {
                let form = document.querySelector('#payment-form');

                let token = document.head.querySelector('meta[name="csrf-token"]');
                let input = document.createElement('input');
                input.type = 'hidden';
                input.name = '_token';
                input.value = token.content;

                form.append(input);

                window.bus.$on('stripe-token', function(token) {
                    let tokenInput = document.createElement('input');
                    tokenInput.type = 'hidden';
                    tokenInput.name = 'stripe_token';
                    tokenInput.value = token;

                    form.append(tokenInput);

                    form.submit();
                })


            }
        }
    }
</script>