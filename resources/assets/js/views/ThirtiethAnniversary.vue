<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
             <div class="row">
                 <div class="col-md-6">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3041.158503327335!2d-112.09135435000675!3d33.47740223550215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1253c82c4907%3A0xc29f66f2ac0ff98c!2sEncanto+Park!5e0!3m2!1sen!2sus!4v1505936613455" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
                 </div>
                 <div class="col-md-6">
                     <h1>{{ rsvpHeader }}</h1>
                     <h3>{{ date }}</h3>

                     <psg-speak v-show="!loading" text="RSVP for 30th Anniversary Gala, Dec. 9 at Encanto Park Clubhouse, 4 pm to 8 pm. Fill out the form below to RSVP for the 30th Anniversary Gala." primary="true"></psg-speak>

                     <hr />

                     <p>{{ instructions }}</p>

                     <alert v-model="showTop" placement="top-right" duration="10000" :type="type" width="500px" dismissable>
                         <span class="icon-ok-circled alert-icon-float-left"></span>
                         <p>{{ flash }}</p>
                     </alert>

                     <form>
                         <div class="form-group">
                             <label for="first_name">{{ first }}</label>
                             <input type="text" id="first_name" v-model="firstName" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="last_name">{{ last }}</label>
                             <input type="text" id="last_name" v-model="lastName" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="email">{{ emailAddy }}</label>
                             <input type="text" id="email" v-model="emailAddress" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="phone">{{ phoneNumber }}</label>
                             <input type="text" id="phone" v-model="phone" class="form-control"/>
                         </div>

                         <div class="form-group">
                             <label for="comments">{{ message }}</label>
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
    import TextToSpeech from '../components/misc/TextToSpeech';

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
                    headline: (this.$cookie.get('language') === 'es') ? 'Gala del trigésimo aniversario' : 'Thirtieth Anniversary Gala',
                    subhead: (this.$cookie.get('language') === 'es') ? '9 de diciembre en Encanto Park Clubhouse' :'Dec. 9 at Encanto Park Clubhouse',
                    callout: (this.$cookie.get('language') === 'es') ? 'El Grupo Phoenix Shanti está celebrando 30 años de servir a la comunidad de VIH / SIDA <br /> en el Valle del Sol con un evento aniversario especial el 9 de diciembre en el Parque Encanto. Usted puede confirmar más abajo. <strong> RSVP ahora </ strong>, ya que el espacio es limitado.' :'The Phoenix Shanti Group is celebrating 30 years of serving the HIV/AIDS community <br />in the Valley of the Sun with a special anniversary event on Dec. 9 at Encanto Park. You can RSVP below. <strong>RSVP now</strong>, as space is limited.',
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
            alert: alert,
            'psg-speak': TextToSpeech
        },
        computed: {
            rsvpHeader() {
                if (this.$cookie.get('language') === 'es') {
                    return 'RSVP para la Gala del 30º Aniversario';
                } else {
                    return 'RSVP for 30th Anniversary Gala';
                }
            },
            date() {
                if (this.$cookie.get('language') === 'es') {
                    return '9 de diciembre en Encanto Park Clubhouse, de 4 pm a 8 pm';
                } else {
                    return 'Dec. 9 at Encanto Park Clubhouse, 4 pm to 8 pm';
                }
            },
            instructions() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Llene el siguiente formulario para confirmar la fecha de la gala del 30 aniversario.';
                } else {
                    return 'Fill out the form below to RSVP for the 30th Anniversary Gala.';
                }
            },
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
            message() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Comentarios';
                } else {
                    return 'Comments';
                }
            }
        }
    }
</script>