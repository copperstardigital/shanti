<template>
    <div class="progress pb-sm">
        <div class="progress">
            <div :class="bar" role="progressbar" :aria-valuenow="now" aria-valuemin="0" aria-valuemax="100" :style="{ width: width + '%' }">
                <span class="sr-only">% Complete (success)</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['bar', 'now', 'goal'],
        data() {
            return {
                width: 0
            }
        },
        mounted() {
            window.setInterval(() => {
                if (this.width < ((this.now / this.goal) * 100)) {
                    this.width++;
                } else {
                    this.width = 0;
                }
            }, 100);
        }
    }
</script>