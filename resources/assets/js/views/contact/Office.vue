<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
        </div>
    </psg-page>
</template>
<template>
    <psg-page title="Contact Us" subtitle="Main Office" hero="">
        <div slot="copy">
            <div class="row">
                <div class="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.326600321518!2d-112.11022!3d33.538261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd063606639b3257!2sShanti+Group+Inc!5e0!3m2!1sen!2sus!4v1500435531942" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="col-sm-6">
                    <div class="about-us-three">
                        <!-- About section hero -->
                        <div class="about-hero">
                            In this area, you can contact us to inquire about any of the programs or services that we provide. Your information will be kept strictly confidential.
                        </div>

                        <alert :show.sync="showTop" placement="top-right" :duration="10000" :type="type" width="500px" dismissable>
                            <span class="icon-ok-circled alert-icon-float-left"></span>
                            <p>{{ flash }}</p>
                        </alert>

                        <div class="divider-2"></div>

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
        components: {
            alert: alert
        }
    }
</script>