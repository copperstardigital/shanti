<template>
    <div class="icon-box-8 text-center">
        <div class="row">
            <div v-for="(box, index) in infoBoxes" key="index">
                <psg-info-box :box="box"></psg-info-box>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
    import InfoBox from './InfoBox';

    export default {
        data() {
            return {
                infoBoxes: []
            }
        },
        methods: {
            getInfoBoxes() {
                http
                    .get('/info-boxes')
                    //.use(saCache)
                    .then(response => {
                        this.infoBoxes = response.body.info_boxes;
                    }).catch(error => {
                    console.error(error);
                });
            }
        },
        created() {
            this.getInfoBoxes();
        },
        components: {
            'psg-info-box' : InfoBox
        }
    }
</script>