<template>
    <div class="icon-box-8 text-center">
        <div class="row">
            <psg-info-box
                v-for="(box, index) in boxes"
                :color="box.color"
                :icon="box.icon"
                :headline="box.title"
                :link="box.link"
                :copy="box.copy"
                key="index">
            </psg-info-box>
        </div>
        <br />
    </div>
</template>

<script>
    import InfoBox from './InfoBox';

    export default {
        data() {
            return {
                boxes: [
                    {
                        color: 'bg-red',
                        icon: 'icon icon-awareness-ribbon',
                        title: 'HIV Services',
                        copy: 'Personalized support services for people infected with and affected by HIV/AIDS.',
                        link: '/services/hiv'
                    },
                    {
                        color: 'bg-lblue',
                        icon: 'fa fa-truck',
                        title: '2nd Chances Store',
                        copy: 'PSG operates a 7,000-square-foot retail thrift store to help fund patient services.',
                        link: 'http://store.shantiaz.org'
                    },
                    {
                        color: 'bg-green',
                        icon: 'fa fa-user',
                        title: 'Treatment',
                        copy: 'Individualized treatment plans are tailored to clients to help rebuild lives.',
                        link: '/services/hiv'
                    },
                    {
                        color: 'bg-purple',
                        icon: 'fa fa-home',
                        title: 'Housing',
                        copy: 'Shanti offers transitional and permanent housing to homeless individuals.',
                        link: '/services/housing'
                    },
                ]
            }
        },
        components: {
            'psg-info-box' : InfoBox
        }
    }
</script>