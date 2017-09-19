<template>
    <psg-page title="Staff" subtitle="Our Team" hero="Hero text">
        <div slot="copy">
            <psg-staff></psg-staff>
        </div>
    </psg-page>
</template>

<script>
    import Staff from '../../components/contact/Staff';

    export default {
        data() {
            return {
                staff: []
            }
        },
        components: {
            'psg-staff': Staff
        }
    }
</script>