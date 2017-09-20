<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.326600321518!2d-112.11022!3d33.538261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd063606639b3257!2sShanti+Group+Inc!5e0!3m2!1sen!2sus!4v1500435531942" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="col-sm-6">
                    <div class="about-us-three">
                        <alert :show.sync="showTop" placement="top-right" :duration="10000" :type="type" width="500px" dismissable>
                            <span class="icon-ok-circled alert-icon-float-left"></span>
                            <p>{{ flash }}</p>
                        </alert>

                        <h1>Contact Us</h1>

                        <form>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input class="form-control" type="text" name="text" id="name" v-model="name" />
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group">
                                <label for="email_address">Email:</label>
                                <input class="form-control" type="email" name="email_address" id="email_address" v-model="emailAddress"/>

                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone:</label>
                                <input class="form-control" type="email" name="phone" id="phone" v-model="phone" />
                            </div>

                            <div class="form-group">
                                <label for="subject">Subject:</label>
                                <input class="form-control" type="text" name="subject" id="subject" v-model="subject"/>
                                <p class="help-block">Required</p>
                            </div>

                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea class="form-control" id="message" name="message" rows="10" v-model="message"></textarea>
                                <p class="help-block">Required</p>
                            </div>

                            <button type="submit" class="btn btn-color pull-right" @click.prevent="sendMessage">Send Message</button>
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
                flash: ''
            }
        },
        methods: {
            sendMessage()  {
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