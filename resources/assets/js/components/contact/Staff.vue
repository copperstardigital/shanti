<template>
    <div>
        <div class="text-center">
            <i v-show="loading" class="fa fa-refresh fa-spin fa-5x color"></i>
        </div>
        <psg-staff-member v-for="(member, index) in staff" :member="member" key="index"></psg-staff-member>
    </div>
</template>

<script>
    import StaffMember from './StaffMember';

    export default {
        data() {
            return {
                staff: [],
                loading: false
            }
        },
        methods: {
            getStaff() {
                this.loading = true;

                http
                    .get('/staff')
                    //.use(saCache)
                    .then(response => {
                        this.staff = response.body.staff;
                        this.loading = false;
                    }).catch(error => {
                    console.error(error);
                });
            }
        },
        mounted() {
            this.loading = true;
            this.getStaff();
        },
        components: {
            'psg-staff-member': StaffMember
        }
    }
</script>