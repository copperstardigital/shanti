<template>
    <div>
        <psg-staff-member v-for="(member, index) in staff" :member="member" key="index"></psg-staff-member>
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