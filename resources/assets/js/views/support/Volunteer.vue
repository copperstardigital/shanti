<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-md-6">
                    <div v-html="article.body"></div>
                    <psg-speak v-show="!loading" :text="article.body"></psg-speak>
                </div>
                <div class="col-md-6">
                    <div v-show="!loading" class="well">
                        <h3>Become a Volunteer</h3>

                        <p>Fill out the form below to inquire about volunteer opportunities.</p>

                        <alert :show.sync="showTop" placement="top-right" :duration="10000" :type="type" width="500px" dismissable>
                            <span class="icon-ok-circled alert-icon-float-left"></span>
                            <p>{{ flash }}</p>
                        </alert>

                        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                            <div class="form-group" :class="{'has-error': errors.has('firstName')}">
                                <label for="first_name">First Name</label>
                                <input type="text" id="first_name" v-model="firstName" class="form-control" v-validate.initial="firstName" data-vv-rules="required"/>
                                <p class="text-danger" v-if="errors.has('firstName')">The first name is required.</p>
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('lastName') }">
                                <label for="last_name">Last Name</label>
                                <input type="text" id="last_name" v-model="lastName" class="form-control" v-validate.initial="lastName" data-vv-rules="required"/>
                                <p class="text-danger" v-if="errors.has('lastName')">The last name is required.</p>
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('emailAddress') }">
                                <label for="email">Email Address</label>
                                <input type="text" id="email" v-model="emailAddress" class="form-control" v-validate.initial="emailAddress" data-vv-rules="required|email"/>
                                <p class="text-danger" v-if="errors.has('emailAddress')">A valid email address is required.</p>
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" id="phone" v-model="phone" class="form-control"/>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('position') }">
                                <label for="position">Position</label>
                                <select v-model="position" class="form-control" id="position" v-validate.initial="position" data-vv-rules="required">
                                    <option value="">Select one...</option>
                                    <option value="Food Pantry">Food Pantry</option>
                                    <option value="Personal Hygiene Pantry">Personal Hygiene Pantry</option>
                                    <option value="Shelter Construction/Repair">Shelter Construction/Repair</option>
                                    <option value="Special Events Coordinator">Special Events Coordinator</option>
                                    <option value="Traditional Media Coordinator">Traditional Media Coordinator</option>
                                    <option value="Legal Assistance Coordinator">Legal Assistance Coordinator</option>
                                    <option value="Legal Assistance Coordinator">Legal Assistance Coordinator</option>
                                    <option value="Corporate Incentives Coordinator">Corporate Incentives Coordinator</option>
                                    <option value="Other">Other</option>
                                </select>
                                <p class="text-danger" v-if="errors.has('position')">The position is required.</p>
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group">
                                <label for="comments">Comments</label>
                                <textarea class="form-control" id="comments" v-model="comments" rows="10"></textarea>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-color pull-right" :disabled="sending">Volunteer <i v-show="sending" class="fa fa-refresh fa-spin"></i></button>
                            </div>
                        </form>

                        <br style="clear:both;" />
                    </div>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    import { alert } from 'vue-strap';
    import TextToSpeech from '../../components/misc/TextToSpeech';

    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                emailAddress: '',
                phone: '',
                position: '',
                comments: '',
                showTop: false,
                sending: false,
                type: 'success',
                flash: '',
                article: {},
                formSubmitted: false
            }
        },
        methods: {
            validateBeforeSubmit(e) {
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    this.volunteer();
                }
            },
            volunteer() {
                this.sending = true;
                this.formSubmitted = true;

                axios.post('/volunteer/form', {
                    name: this.firstName + ' ' + this.lastName,
                    email: this.emailAddress,
                    phone: this.phone,
                    position: this.position,
                    comments: this.comments
                }).then(response => {
                    this.showTop = true;
                    this.flash = 'Thank you for contacting Shanti about our volunteer opportunities. We will be in touch shortly.';
                    this.firstName = '';
                    this.lastName = '';
                    this.emailAddress = '';
                    this.phone = '';
                    this.position = 'None';
                    this.comments = '';

                    this.sending = false;
                }).catch(error => {
                    this.showTop = true;
                    this.type = 'danger';
                    this.flash = error.message;
                });
            }
        },
        components: {
            alert: alert,
            'psg-speak': TextToSpeech
        },
        created() {
            this.loading = true;

            http
                .get('/articles/9')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: article.en_body
                    };

                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                });
        }
    }
</script>