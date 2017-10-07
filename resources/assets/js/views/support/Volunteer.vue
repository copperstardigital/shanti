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
                        <img src="/img/volunteer.jpg" class="img-responsive" alt="Volunteer" />

                        <hr />

                        <h3>{{ becomeAVolunteer}}</h3>

                        <p>{{ formInstructions }}</p>

                        <!--<alert v-model="showTop" placement="top-right" duration="10000" :type="type" width="500px" dismissable>
                            <span class="icon-ok-circled alert-icon-float-left"></span>
                            <p>{{ flash }}</p>
                        </alert>-->

                        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                            <div class="form-group" :class="{'has-error': errors.has('firstName')}">
                                <label for="first_name">{{ first }}</label>
                                <input type="text" id="first_name" v-model="firstName" class="form-control" v-validate.initial="firstName" data-vv-rules="required"/>
                                <p class="text-danger" v-if="errors.has('firstName')">{{ firstRequired }}</p>
                                <p class="help-block">{{ required }}</p>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('lastName') }">
                                <label for="last_name">{{ last }}</label>
                                <input type="text" id="last_name" v-model="lastName" class="form-control" v-validate.initial="lastName" data-vv-rules="required"/>
                                <p class="text-danger" v-if="errors.has('lastName')">{{ lastRequired }}</p>
                                <p class="help-block">{{ required }}</p>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('emailAddress') }">
                                <label for="email">{{ emailAddy }}</label>
                                <input type="text" id="email" v-model="emailAddress" class="form-control" v-validate.initial="emailAddress" data-vv-rules="required|email"/>
                                <p class="text-danger" v-if="errors.has('emailAddress')">{{ emailRequired }}</p>
                                <p class="help-block">{{ required }}</p>
                            </div>

                            <div class="form-group">
                                <label for="phone">{{ phoneNumber }}</label>
                                <input type="text" id="phone" v-model="phone" class="form-control"/>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('position') }">
                                <label for="position">{{ positionAt}}</label>
                                <select v-model="position" class="form-control" id="position" v-validate.initial="position" data-vv-rules="required">
                                    <option value="">{{ selectOne }}</option>
                                    <option value="Food Pantry">{{ foodPantry}}</option>
                                    <option value="Personal Hygiene Pantry">{{ hygienePantry }}</option>
                                    <option value="Shelter Construction/Repair">{{ shelterConstruction }}</option>
                                    <option value="Special Events Coordinator">{{ specialEvents }}</option>
                                    <option value="Traditional Media Coordinator">{{ traditionalMedia }}</option>
                                    <option value="Social Media Coordinator">{{ socialMedia }}</option>
                                    <option value="Legal Assistance Coordinator">{{ legalAssistance }}</option>
                                    <option value="Corporate Incentives Coordinator">{{ corporateIncentives }}</option>
                                    <option value="Other">{{ other }}</option>
                                </select>
                                <p class="text-danger" v-if="errors.has('position')">{{ positionRequired }}</p>
                                <p class="help-block">{{ required }}</p>
                            </div>

                            <div class="form-group">
                                <label for="comments">{{ message }}</label>
                                <textarea class="form-control" id="comments" v-model="comments" rows="10"></textarea>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-color pull-right" :disabled="sending">{{ volunteerAt }} <i v-show="sending" class="fa fa-refresh fa-spin"></i></button>
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
    //import { alert } from 'vue-strap';
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
          //  alert: alert,
            'psg-speak': TextToSpeech
        },
        computed: {
            becomeAVolunteer() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Conviértase en voluntario';
                } else {
                    return 'Become a Volunteer'
                }
            },
            formInstructions() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Llene el siguiente formulario para informarse sobre las oportunidades de voluntariado.';
                } else {
                    return 'Fill out the form below to inquire about volunteer opportunities.'
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
            },
            required() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Necesario';
                } else {
                    return 'Required';
                }
            },
            volunteerAt() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Ofrecerse';
                } else {
                    return 'Volunteer';
                }
            },
            selectOne() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Seleccione uno ...';
                } else {
                    return 'Select one...';
                }
            },
            positionAt() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Oficio';
                } else {
                    return 'Position';
                }
            },
            foodPantry() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Despensa de alimentos';
                } else {
                    return 'Food Pantry';
                }
            },
            hygienePantry() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Despensa de higiene personal';
                } else {
                    return 'Personal Hygiene Pantry';
                }
            },
            shelterConstruction() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Construcción / Reparación de Refugios';
                } else {
                    return 'Shelter Construction/Repair';
                }
            },
            specialEvents() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Despensa de alimentos';
                } else {
                    return 'Special Events Coordinator';
                }
            },
            traditionalMedia() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Coordinador de Medios Tradicionales';
                } else {
                    return 'Traditional Media Coordinator';
                }
            },
            socialMedia() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Coordinador de Medios Sociales';
                } else {
                    return 'Social Media Coordinator';
                }
            },
            legalAssistance() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Coordinador de Asistencia Legal';
                } else {
                    return 'Legal Assistance Coordinator';
                }
            },
            corporateIncentives() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Coordinador de Incentivos Corporativos';
                } else {
                    return 'Corporate Incentives Coordinator';
                }
            },
            other() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Otro';
                } else {
                    return 'Other';
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
            positionRequired() {
                if (this.$cookie.get('language') === 'es') {
                    return 'La posición es necesaria.';
                } else {
                    return 'The position is required.';
                }
            }
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
        }
    }
</script>