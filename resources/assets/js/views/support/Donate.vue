<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body" style="margin-bottom: 40px;"></div>

            <alert v-model="showTop" placement="top-right" duration="10000" :type="type" width="500px" dismissable>
                <span class="icon-ok-circled alert-icon-float-left"></span>
                <p>{{ flash }}</p>
            </alert>

            <form action="/support/donate" id="payment-form" method="POST" @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                <div class="row">
                    <div class="col-sm-6">
                        <fieldset>
                            <legend>{{ donorInformation }}</legend>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="first_name">{{ first }}</label>
                                        <input type="text" class="form-control" id="first_name" v-model="donation.first_name" v-validate.initial="donation.first_name" data-vv-rules="required"/>
                                        <p class="text-danger" v-if="errors.has('donation.first_name')">{{ firstRequired }}</p>
                                        <p class="help-block">{{ required }}</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="last_name">{{ last }}</label>
                                        <input type="text" class="form-control" id="last_name" v-model="donation.last_name"  v-validate.initial="donation.last_name" data-vv-rules="required"/>
                                        <p class="text-danger" v-if="errors.has('donation.last_name')">{{ lastRequired }}</p>
                                        <p class="help-block">{{ required }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="email">{{ emailAddy }}</label>
                                        <input type="email" class="form-control" id="email" v-model="donation.email"  v-validate.initial="donation.email" data-vv-rules="required|email"/>
                                        <p class="text-danger" v-if="errors.has('donation.email')">{{ emailRequired }}</p>
                                        <p class="help-block">{{ required }}</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone_number">{{ phoneNumber }}</label>
                                        <input type="text" class="form-control" id="phone_number" v-model="donation.phone_number" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="address">{{ addressOf }}</label>
                                        <input type="text" class="form-control" id="address" v-model="donation.address" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="city">{{ cityName }}</label>
                                        <input type="text" class="form-control" id="city" v-model="donation.city" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="state">{{ stateInUS }}</label>
                                        <select name="state" class="form-control" id="state" v-model="donation.state">
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
                                        <label for="zip_code">{{ zipCode }}</label>
                                        <input type="text" class="form-control" id="zip_code" v-model="donation.zip_code" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="password">{{ passwordOf }}</label>
                                        <input type="password" class="form-control" id="password" v-model="donation.password" v-validate.initial="donation.password" data-vv-rules="required"/>
                                        <p class="text-danger" v-if="errors.has('donation.password')">{{ passwordRequired }}</p>
                                        <p class="help-block">{{ required }}</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="password_confirmation">{{ passwordConfirmationOf }}</label>
                                        <input type="password" class="form-control" id="password_confirmation" v-model="donation.password_confirmation" v-validate.initial="donation.password_confirmation" data-vv-rules="required"/>
                                        <p class="text-danger" v-if="errors.has('donation.password_confirmation')">{{ passwordConfirmationRequired }}</p>
                                        <p class="help-block">{{ required }}</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-sm-6">
                        <fieldset style="margin-bottom: 20px;">
                            <legend>{{ donationInformation }}</legend>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="donation_id">{{ recurringDonation }}</label>
                                        <select name="donation_id" id="donation_id" class="form-control" v-model="donation.donation_id" v-validate.initial="donation.donation_id" data-vv-rules="required">
                                            <option value="">{{ selectOne }}</option>
                                            <optgroup :label="businessDonations">
                                                <option value="1">{{ goldBusiness }}</option>
                                                <option value="2">{{ silverBusiness }}</option>
                                                <option value="3">{{ bronzeBusiness}}</option>
                                            </optgroup>
                                            <optgroup :label="individualDonations">
                                                <option value="4">{{ goldIndividual}}</option>
                                                <option value="5">{{ silverIndividual }}</option>
                                                <option value="6">{{ bronzeIndividual }}</option>
                                            </optgroup>
                                            <optgroup :label="other">
                                                <option value="7">{{ recurringBusinessFillIn }}</option>
                                                <option value="8">{{ recurringIndividualFillIn }}</option>
                                            </optgroup>
                                        </select>
                                        <p class="text-danger" v-if="errors.has('donation.donation_id')">{{ donationRequired }}</p>
                                        <p class="help-block">{{ required }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="other_business">{{ recurringBusiness }}</label>
                                        <input type="text" class="form-control" id="other_business"  v-model="donation.other_business"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="other_individual">{{ recurringIndividual }}</label>
                                            <input type="text" class="form-control" id="other_individual" v-model="donation.other_individual" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset style="margin-bottom: 20px;">
                            <legend>{{ weeklyNewsletter }}</legend>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <label><input type="checkbox" name="newsletter" value="1" v-model="donation.newsletter"/> {{ optIn }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>{{ creditCardInfo }}</legend>
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
                            <psg-stripe :paying="donating" :label="creditOrDebit" :buttonText="donateTo"></psg-stripe>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </psg-page>
</template>

<script>
    import Stripe from '../../components/misc/Stripe';
    import { alert } from 'vue-strap';

    export default {
        data() {
            return {
                article: {},
                donation: {
                    state: '',
                    donation_id: '',
                    newsletter: 1
                },
                type: 'success',
                showTop: false,
                flash: '',
                donating: false,
                formSubmitted: false
            }
        },
        components: {
            'psg-stripe': Stripe,
            alert
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

                    if (this.$cookie.get('language') === 'es') {
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
            validateBeforeSubmit(e) {
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    this.donate();
                }
            },
            donate() {
                let vm = this;
                this.donating = true;

                window.bus.$on('stripe-token', function(token) {
                    axios.post('/support/donate', {
                        stripe_token: token,
                        first_name: vm.donation.first_name,
                        last_name: vm.donation.last_name,
                        email: vm.donation.email,
                        phone_number: vm.donation.phone_number,
                        address: vm.donation.address,
                        city: vm.donation.city,
                        state: vm.donation.state,
                        zip_code: vm.donation.zip_code,
                        password: vm.donation.password,
                        newsletter: vm.donation.newsletter,
                        donation_id: vm.donation.donation_id,
                        other_business: vm.donation.other_business,
                        other_individual: vm.donation.other_individual
                    }).then(response => {
                        if (!response.data.success) {
                            vm.type = 'danger';
                        }

                        if (response.data.success) {
                            vm.donation = {
                                state: '',
                                donation_id: '',
                                newsletter: 1
                            };
                        }

                        vm.showTop = true;
                        vm.flash = response.data.message;

                        vm.donating = false;
                    })
                    .then(() => {
                        vm.errors.clear();
                    })
                    .catch(error => {
                        console.log(error);
                        vm.showTop = true;
                       // vm.flash = error.data.error;
                    });
                })
            }
        },
        computed: {
            first() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Nombre de pila';
                } else {
                    return 'First Name';
                }
            },
            last() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Apellido';
                } else {
                    return 'Last Name';
                }
            },
            emailAddy() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Dirección de correo electrónico';
                } else {
                    return 'Email Address';
                }
            },
            phoneNumber() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Número de teléfono';
                } else {
                    return 'Phone Number';
                }
            },
            addressOf() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Dirección';
                } else {
                    return 'Address';
                }
            },
            cityName() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Ciudad';
                } else {
                    return 'City';
                }
            },
            stateInUS() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Estado';
                } else {
                    return 'State';
                }
            },
            zipCode() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Código postal';
                } else {
                    return 'Zip Code';
                }
            },
            passwordOf() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Contraseña';
                } else {
                    return 'Password';
                }
            },
            passwordConfirmationOf() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Confirmación de contraseña';
                } else {
                    return 'Password Confirmation';
                }
            },
            donationInformation() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Información de donación';
                } else {
                    return 'Donation Information';
                }
            },
            recurringDonation() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donación Recurrente';
                } else {
                    return 'Recurring Donation';
                }
            },
            recurringBusiness() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donación Recurrente de Empresas (Otros)';
                } else {
                    return 'Recurring Business Donation (Other)';
                }
            },
            recurringIndividual() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donación Individual Recurrente (Otro)';
                } else {
                    return 'Recurring Individual Donation (Other)';
                }
            },
            recurringBusinessFillIn() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donación Recurrente de Empresas (Rellene abajo)';
                } else {
                    return 'Recurring Business Donation (Fill in Below)';
                }
            },
            recurringIndividualFillIn() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donación Individual Recurrente (Rellene abajo)';
                } else {
                    return 'Recurring Individual Donation (Fill in Below)';
                }
            },
            weeklyNewsletter() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Boletín semanal';
                } else {
                    return 'Weekly Newsletter';
                }
            },
            donorInformation() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Información del Donante';
                } else {
                    return 'Donor Information';
                }
            },
            optIn() {
                if (this.$cookie.get('language') === 'es') {
                    return '¿Ingresar al boletín semanal?';
                } else {
                    return 'Opt in to weekly newsletter?';
                }
            },
            creditCardInfo() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Información de tarjeta de crédito';
                } else {
                    return 'Credit Card Information';
                }
            },
            creditOrDebit() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tarjeta de crédito o débito';
                } else {
                    return 'Credit or Debit Card';
                }
            },
            businessDonations() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donaciones empresariales';
                } else {
                    return 'Business Donations';
                }
            },
            individualDonations() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donaciones individuales';
                } else {
                    return 'Individual Donations';
                }
            },
            selectOne() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Seleccione uno ...';
                } else {
                    return 'Select one...';
                }
            },
            goldBusiness() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Oro ($ 500 por mes)';
                } else {
                    return 'Gold ($500 per month)';
                }
            },
            silverBusiness() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Plata ($ 100 por mes)';
                } else {
                    return 'Silver ($100 per month)';
                }
            },
            bronzeBusiness() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Bronce ($ 50 por mes)';
                } else {
                    return 'Bronze ($50 per month)';
                }
            },
            goldIndividual() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Oro ($ 30 por mes)';
                } else {
                    return 'Gold ($30 per month)';
                }
            },
            silverIndividual() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Plata ($ 20 por mes)';
                } else {
                    return 'Silver ($20 per month)';
                }
            },
            bronzeIndividual() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Bronce ($ 20 por mes)';
                } else {
                    return 'Bronze ($20 per month)';
                }
            },
            donateTo() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donar';
                } else {
                    return 'Donate';
                }
            },
            required() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Necesario';
                } else {
                    return 'Required';
                }
            },
            firstRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Se requiere el primer nombre.';
                } else {
                    return 'The first name is required.';
                }
            },
            lastRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'El apellido es obligatorio.';
                } else {
                    return 'The last name is required.';
                }
            },
            emailRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Se requiere una dirección de correo electrónico válida.';
                } else {
                    return 'A valid email address is required.';
                }
            },
            passwordRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Se requiere la contraseña.';
                } else {
                    return 'The password is required.';
                }
            },
            passwordConfirmationRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Se requiere la confirmación de la contraseña.';
                } else {
                    return 'The password confirmation is required.';
                }
            },
            donationRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'La donación es necesaria.';
                } else {
                    return 'The recurring donation is required.';
                }
            },
            other() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Otro';
                } else {
                    return 'Other';
                }
            }
        }
    }
</script>