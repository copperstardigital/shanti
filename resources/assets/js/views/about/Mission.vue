<template>
    <psg-page title="About Us" subtitle="Something About Us" hero="Founded back in 1987, our mission is to provide housing, education, and direct client services to individuals, families, and loved ones infected with and affected by HIV/AIDS. “Shanti” is a Sanskrit word meaning “Inner Peace” and is reflective of Phoenix Shanti Groups’ approach of promoting personal empowerment and maintaining independence and dignity">
        <div slot="copy">
            <!-- Block heading eight -->
            <div class="block-heading-eight">
                <h3><i class="fa fa-hand-o-right color"></i> About Phoenix Shanti Group</h3>
            </div>
            <!-- Nav tab style 2 starts -->
            <div class="nav-tabs-two">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#home-2" data-toggle="tab">What We Do?</a></li>
                    <li><a href="#profile-2" data-toggle="tab">Why Choose Us?</a></li>
                    <li><a href="#messages-2" data-toggle="tab">What Makes Us Special?</a></li>
                    <li><a href="#settings-2" data-toggle="tab">Testimonials</a></li>
                </ul>
                <!-- Tab content -->
                <div class="tab-content">
                    <div class="tab-pane fade in active" id="home-2">
                        <p>The Phoenix Shanti Group provides support, counseling, housing and other services to people infected with or affected by HIV/AIDS. In one form or another, Shanti has been serving the the HIV community in metro Phoenix for {{ yearsSinceFounding }} years.</p>
                    </div>
                    <div class="tab-pane fade" id="profile-2">
                        <p>Shanti provides a stem-to-stern approach to HIV services. Some of our clients are homeless when they enter the Shanti program. Most clients, but not all, enter housing services upon entry to Shanti. In housing, clients can relate to other people living with HIV. Some are newly infected, others have been living with the virus for many years. Through counseling, medication and peer support, clients learn how to re-enter the world, without having to rely on drugs and alcohol. In our vocational rehabilitation program, clients gain valuable work skills and experience. By the time they graduate, clients are ready to take on the world anew.</p>
                    </div>
                    <div class="tab-pane fade" id="messages-2">
                        <p>Through the boundless support provided by Shanti, many clients become quite fond of the agency and its staff. There is a familial feeling to Shanti.  Many of the clients become friends. After graduation, some former clients come back to help the organization in various ways.  Some serve on the Board.  Others volunteer for committees.  This website was created by a former client, who redeemed his life through the Shanti program.  At Shanti, through its curriculum, many clients have tackled lifelong issues and now that they are clean and sober, they feel an immense sense of gratitude that they want to pay forward.</p>
                    </div>
                    <div class="tab-pane fade" id="settings-2">

                    </div>
                </div>
            </div>
            <!-- Nav tab style 2 ends -->
        </div>
    </psg-page>
</template>

<script>
    export default {
         computed: {
             yearsSinceFounding() {
                 return new Date().getFullYear() - new Date('1987-09-01').getFullYear();
             }
         }
    }
</script>