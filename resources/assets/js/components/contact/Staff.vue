<template>
    <div>
        <psg-staff-member v-for="member in staff" :member="member"></psg-staff-member>
    </div>
</template>

<script>
    import StaffMember from './StaffMember';

    export default {
        data() {
            return {
                staff: []
            }
        },
        methods: {
            getStaff() {
                http
                    .get('/staff')
                    //.use(saCache)
                    .then(response => {
                        this.staff = response.body.staff;
                    }).catch(error => {
                    console.error(error);
                });
            }
        },
        mounted() {
            this.getStaff();
        },
        components: {
            'psg-staff-member': StaffMember
        }
    }
</script>