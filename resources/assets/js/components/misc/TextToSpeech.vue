<template>
    <button type="button" class="btn btn-xs" :class="styling" :primary="primary" :text="text" @click="speak"><i class="fa fa-deaf"></i> {{ speakText }}</button>
</template>

<script>
    export default {
        data() {
            return {
                styling: (this.primary) ? 'btn-lpurple' : 'btn-default',
            }
        },
        props: ['text', 'primary'],
        methods: {
            speak() {
                if ('speechSynthesis' in window) {
                    let msg = new SpeechSynthesisUtterance();
                    msg.rate = 0.8;
                    msg.pitch = 1.0;

                    if (this.$cookie.get('language') !== 'es') {
                        msg.text = this.textOnly;
                    } else {
                        msg.text = 'This feature currently does not work in Spanish. Lo siento.';
                    }

                    speechSynthesis.speak(msg);
                } else {
                    alert('Speech synthesis not available in your browser. Please upgrade to a modern browser.');
                }
            }
        },
        computed: {
            speakText() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Habla';
                } else {
                    return 'Speak'
                }
            },
            textOnly() {
                let div = document.createElement('div');
                div.innerHTML = this.text;
                return div.textContent || div.innerText || '';
            }
        }
    }
</script>