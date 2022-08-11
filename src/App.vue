<template lang="pug">
    div#app
        router-view
        PwaPop
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PwaPop from '@/components/PwaPop.vue';
import { detect } from 'detect-browser';

@Component({
    components: {
        PwaPop
    }
})
export default class App extends Vue {
    protected deferredPrompt: any;

    protected created() {
        this.$nextTick(() => {
            this.secondStep();
            this.showBtn();
        });
    }

    protected isIosSafari() {
        const browser: any = detect();
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent) && browser.name === 'ios';
    }

    protected showBtn() {
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && ((window as any).navigator.standalone);

        if (!isInStandaloneMode()) {
            /* eslint-disable no-console */
            console.log('showBtn');
        }

        // Checks if should display install popup notification:
        if (this.isIosSafari() && !isInStandaloneMode()) {
            this.showIosInstall();
        }
    }

    protected secondStep() {
        // let deferredPrompt: any;
        window.addEventListener('beforeinstallprompt', (e: any) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.deferredPrompt = e;

            this.showAddToHomeScreen();
        });
    }

    protected showAddToHomeScreen() {
        const a2hsBtn: any = document.querySelector('.ad2hs-prompt');
        a2hsBtn.style.display = 'block';
        a2hsBtn.addEventListener('click', this.addToHomeScreen());
    }

    protected addToHomeScreen() {
        const a2hsBtn: any = document.querySelector('.ad2hs-prompt'); // hide our user interface that shows our A2HS button
        a2hsBtn.style.display = 'none'; // Show the prompt
        this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
                /* eslint-disable no-console */
                console.log('User accepted the A2HS prompt');
            } else {
                /* eslint-disable no-console */
                console.log('User dismissed the A2HS prompt');
            }

            this.deferredPrompt = null;
        });
    }

    protected showIosInstall() {
        /* eslint-disable no-console */
        console.log('showIosInstall');
        const iosPrompt: any = document.querySelector('.ios-prompt');
        const closeBtn: any = document.querySelector('.pwa-close-icon');
        iosPrompt.style.display = 'block';
        closeBtn.addEventListener('click', () => {
            iosPrompt.style.display = 'none';
        });
    }
}
</script>

<style lang="scss">
@import '~@/style/index';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
