<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
             <div class="row">
                 <div class="col-md-6">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3041.158503327335!2d-112.09135435000675!3d33.47740223550215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1253c82c4907%3A0xc29f66f2ac0ff98c!2sEncanto+Park!5e0!3m2!1sen!2sus!4v1505936613455" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
                 </div>
                 <div class="col-md-6">
                     <h1>RSVP for 30th Anniversary Gala</h1>
                     <h3>Dec. 9 at Encanto Park Clubhouse, 4 pm to 8 pm</h3>

                     <hr />

                     <p>Fill out the form below to RSVP for the 30th Anniversary Gala.</p>

                     <alert :show.sync="showTop" placement="top-right" :duration="10000" :type="type" width="500px" dismissable>
                         <span class="icon-ok-circled alert-icon-float-left"></span>
                         <p>{{ flash }}</p>
                     </alert>

                     <form>
                         <div class="form-group">
                             <label for="first_name">First Name</label>
                             <input type="text" id="first_name" v-model="firstName" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="last_name">Last Name</label>
                             <input type="text" id="last_name" v-model="lastName" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="email">Email Address</label>
                             <input type="text" id="email" v-model="emailAddress" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="phone">Phone</label>
                             <input type="text" id="phone" v-model="phone" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="comments">Comments</label>
                             <textarea class="form-control" id="comments" v-model="comments" rows="7"></textarea>
                         </div>

                         <div class="form-group">
                             <button type="button" class="btn btn-color pull-right" @click.prevent="rsvp" :disabled="loading">RSVP <i v-show="loading" class="fa fa-refresh fa-spin"></i></button>
                         </div>
                     </form>
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
                firstName: '',
                lastName: '',
                emailAddress: '',
                phone: '',
                comments: '',
                showTop: false,
                type: 'success',
                flash: '',
                loading: false,
                article: {
                    headline: 'Thirtieth Anniversary Gala',
                    subhead: 'Dec. 9 at Encanto Park Clubhouse',
                    callout: 'The Phoenix Shanti Group is celebrating 30 years of serving the HIV/AIDS community <br />in the Valley of the Sun with a special anniversary event on Dec. 9 at Encanto Park. You can RSVP below. <strong>RSVP now</strong>, as space is limited.',
                    body: ''
                },
            }
        },
        methods: {
            rsvp() {
                this.loading = true;
                axios.post('/30th-anniversary', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.emailAddress,
                    phone: this.phone,
                    position: this.position,
                    comments: this.comments
                }).then(response => {
                    this.showTop = true;
                    this.flash = 'Thank you for RSVPing for our Thirtieth Anniversary Gala. You will receive a confirmation email shortly.';
                    this.firstName = '';
                    this.lastName = '';
                    this.emailAddress = '';
                    this.phone = '';
                    this.position = 'None';
                    this.comments = '';

                    this.loading = false;
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