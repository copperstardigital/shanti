<template>
    <button type="button" class="btn btn-default btn-xs" :text="text" @click="speak"><i class="fa fa-deaf"></i> Speak</button>
</template>

<script>
    export default {
        props: ['text'],
        methods: {
            speak() {
                if ('speechSynthesis' in window) {
                    let msg = new SpeechSynthesisUtterance();
                    msg.rate = 0.8;
                    msg.pitch = 1.0;
                    msg.text = this.textOnly;

                    speechSynthesis.speak(msg);
                } else {
                    alert('Speech synthesis not available in your browser. Please upgrade to a modern browser.');
                }
            }
        },
        computed: {
            textOnly() {
                let div = document.createElement('div');
                div.innerHTML = this.text;
                return div.textContent || div.innerText || '';
            }
        }
    }
</script>