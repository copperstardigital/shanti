<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.326600321518!2d-112.11022!3d33.538261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd063606639b3257!2sShanti+Group+Inc!5e0!3m2!1sen!2sus!4v1500435531942" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="col-sm-6">
                    <div class="about-us-three">
                        <alert v-model="showTop" placement="top-right" duration="10000" :type="type" width="500px" dismissable>
                            <span class="icon-ok-circled alert-icon-float-left"></span>
                            <p>{{ flash }}</p>
                        </alert>

                        <h1>Contact Us</h1>

                        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                            <div class="form-group" :class="{'has-error': errors.has('emailAddress') }">
                                <label for="name">Name:</label>
                                <input class="form-control" type="text" name="text" id="name" v-model="name" v-validate.initial="name" data-vv-rules="required"/>
                                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>

                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('emailAddress') }">
                                <label for="emailAddress">Email:</label>
                                <input class="form-control" type="email" name="emailAddress" id="emailAddress" v-model="emailAddress" v-validate.initial="emailAddress" data-vv-rules="required|email"/>
                                <p class="text-danger" v-if="errors.has('emailAddress')">A valid email address is required.</p>
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone:</label>
                                <input class="form-control" type="email" name="phone" id="phone" v-model="phone" />
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('subject') }">
                                <label for="subject">Subject:</label>
                                <input class="form-control" type="text" name="subject" id="subject" v-model="subject" v-validate.initial="subject" data-vv-rules="required"/>
                                <p class="text-danger" v-if="errors.has('subject')">{{ errors.first('subject') }}</p>

                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('message') }">
                                <label for="message">Message:</label>
                                <textarea class="form-control" id="message" name="message" rows="10" v-model="message" v-validate.initial="message" data-vv-rules="required"></textarea>
                                <p class="text-danger" v-if="errors.has('message')">{{ errors.first('message') }}</p>

                                <p class="help-block">Required</p>
                            </div>

                            <button type="submit" class="btn btn-color pull-right">Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    import { alert } from 'vue-strap';

    export default {
        data() {
            return {
                article: {},
                name: '',
                emailAddress : '',
                phone: '',
                subject: '',
                message: '',
                showTop: false,
                type: 'success',
                flash: '',
                formSubmitted: false
            }
        },
        methods: {
            validateBeforeSubmit(e) {
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    this.sendMessage();
                }
            },
            sendMessage()  {
                this.formSubmitted = true;

                axios.post('/contact', {
                    name: this.name,
                    email: this.emailAddress,
                    phone: this.phone,
                    subject: this.subject,
                    message: this.message
                }).then(response => {
                    this.showTop = true;
                    this.flash = 'Thank you for contacting Shanti. We will be in touch shortly.'
                }).catch(error => {
                    this.showTop = true;
                    this.type = 'danger';
                    this.flash = error.message;
                });
            }
        },
        created() {
            this.loading = true;

            http
                .get('/articles/12')
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
        components: {
            alert: alert
        }
    }
</script>