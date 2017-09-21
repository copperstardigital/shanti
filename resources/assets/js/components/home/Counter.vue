<template>
    <div>
        <div class="counter-item">
            <!-- Icon -->
            <i :class="icon"></i>
            <!-- Number -->
            <span class="number-count">{{ count }}</span>
            <!-- Border -->
            <hr :class="rule" />
            <!-- Heading -->
            <h5>{{ text }}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'rule', 'text', 'max', 'interval'],
        data() {
            return {
                count: 0
            }
        },
        mounted() {
            window.setInterval(() => {
                if (this.count < this.max) {
                    this.count++;
                } else {
                    this.count = 0;
                }
            }, this.interval);
        }
    }
</script>