<template>
    <!-- Counter #1 starts -->
    <div class="counter-one text-center">
        <div class="counter-content">
            <div class="row">
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-home red"
                            rule="br-red"
                            :text="housed"
                            max="58"
                            interval="1000"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-briefcase green"
                            rule="br-green"
                            :text="vocRehab"
                            max="146"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-ambulance lblue"
                            rule="br-lblue"
                            :text="outpatients"
                            max="146"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-heart yellow"
                            rule="br-yellow"
                            :text="counseled"
                            max="146"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-book purple"
                            rule="br-purple"
                            :text="educated"
                            max="146"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-clock-o brown"
                            rule="br-brown"
                            :text="volunteerHours"
                            max="1200"
                            interval="100"
                    ></psg-counter>
                </div>
            </div>
        </div>
    </div>
    <!-- Counter #1 ends -->
</template>

<script>
    import Counter from './Counter';

    export default {
        components: {
            'psg-counter': Counter
        },
        computed: {
            housed() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Alojado';
                } else {
                    return 'Housed';
                }
            },
            vocRehab() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Rehabilitación Vocacional';
                } else {
                    return 'Voc Rehab';
                }
            },
            outpatients() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Pacientes ambulatorios';
                } else {
                    return 'Outpatients';
                }
            },
            counseled() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Aconsejado';
                } else {
                    return 'Counseled';
                }
            },
            educated() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Educado';
                } else {
                    return 'Educated';
                }
            },
            volunteerHours() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Horas de Voluntariado';
                } else {
                    return 'Volunteer Hours';
                }
            }
        }
    }
</script>