<template>
    <psg-page :article="article">
        <div slot="copy">
            <div class="row">
                <div class="col-md-6">

                </div>
                <div class="col-md-6">
                    <h3>Home</h3>
                    <p><router-link to="/" exact>Home</router-link></p>

                    <hr />

                    <h3>About</h3>
                    <p><router-link to="/about/mission">Mission</router-link></p>
                    <p><router-link to="/about/getting-started">Getting Started</router-link></p>
                    <p><router-link to="/about/history">History</router-link></p>
                    <p><router-link to="/about/cultural-competency">Cultural Competency</router-link></p>
                    <p><router-link to="/about/privacy-policy">Privacy Policy</router-link></p>

                    <hr />

                    <h3>Services</h3>
                    <p><router-link to="/services/housing">Housing</router-link></p>
                    <p><router-link to="/services/hiv">HIV Services</router-link></p>

                    <hr />

                    <h3>Support</h3>
                    <p><router-link to="/support/donate">Donate</router-link></p>
                    <p><router-link to="/support/volunteer">Volunteer</router-link></p>
                    <p><router-link to="/support/resources">Resources</router-link></p>

                    <hr />

                    <h3>Blog</h3>
                    <p><router-link to="/blog">Blog</router-link></p>

                    <hr />

                    <h3>Store</h3>
                    <p><a href="https://store.shantiaz.org" target="_blank">2nd Chances Store</a></p>

                    <hr />

                    <h3>Contact</h3>
                    <p><router-link to="/contact/office">Contact</router-link></p>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    headline: 'Site Map',
                    subhead: 'Available Pages',
                    callout: 'Below is a list of available page. Please refer to one of them to find your resource.'
                }
            }
        }
    }
</script>