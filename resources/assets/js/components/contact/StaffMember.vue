<template>
    <div>
        <div class="row" style="margin-bottom: 20px;">
            <div v-if="member.staff">
                <div v-if="member.staff.image">
                    <div class="col-md-4">
                        <img :src="'/uploads/staff/' + member.staff.image" class="img-responsive" :alt=" member.first_name + ' ' + member.last_name"/>
                    </div>
                    <div class="col-md-8">
                        <h3>{{ member.first_name }} {{ member.last_name }}</h3>
                        <h5>{{ member.staff.title }}</h5>

                        <div class="team-member">
                            <div class="team-links">
                                <div v-if="member.email">
                                    <a :href="'mailto:' + member.email"><i class="fa fa-envelope"></i> {{ member.email }}</a>
                                </div>
                                <div v-if="member.extension && member.phone_number">
                                    <a :href="'tel:' + member.phone_number + ' x' + member.extension"><i class="fa fa-phone"></i> 602.279.0008 x{{ member.extension }}</a>
                                </div>
                                <div v-if="!member.extension && member.phone_number">
                                    <a :href="'tel:' + member.phone_number"><i class="fa fa-phone"></i> 602.283-0100</a>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div v-if="member.staff.bio">
                            <div v-html="member.staff.bio"></div>
                        </div>
                        <div v-if="!member.staff.bio">
                            <p>Profile information is unavailable.</p>
                        </div>
                    </div>

                </div>
                <div v-if="!member.staff.image">
                    <div v-if="member.staff.bio">
                        <div class="col-md-12">
                            <h3>{{ member.first_name }} {{ member.last_name }}</h3>
                            <h5>{{ member.staff.title }}</h5>

                            <div class="team-links">
                                <div v-if="member.email">
                                    <a :href="'mailto:' + member.email"><i class="fa fa-envelope"></i> {{ member.email }}</a>
                                </div>
                                <div v-if="member.extension && member.phone_number">
                                    <a :href="'tel:' + member.phone_number + ' x' + member.extension"><i class="fa fa-phone"></i> 602.279.0008 x{{ member.extension }}</a>
                                </div>
                                <div v-if="!member.extension && member.phone_number">
                                    <a :href="'tel:' + member.phone_number"><i class="fa fa-phone"></i> 602.283-0100</a>
                                </div>
                            </div>

                            <hr />

                            <div v-html="member.staff.bio"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />
    </div>
</template>

<script>
    export default {
        props: ['member']
    }
</script>