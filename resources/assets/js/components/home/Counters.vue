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
                            text="Housed"
                            max="10"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-briefcase green"
                            rule="br-green"
                            text="Voc Rehab"
                            max="10"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-ambulance lblue"
                            rule="br-lblue"
                            text="Outpatients"
                            max="10"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-heart yellow"
                            rule="br-yellow"
                            text="Counseled"
                            max="10"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-book purple"
                            rule="br-purple"
                            text="Educated"
                            max="10"
                            interval="500"
                    ></psg-counter>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <!-- Counter content item -->
                    <psg-counter
                            icon="fa fa-clock-o brown"
                            rule="br-brown"
                            text="Volunteer Hours"
                            max="10"
                            interval="500"
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
        }
    }
</script>